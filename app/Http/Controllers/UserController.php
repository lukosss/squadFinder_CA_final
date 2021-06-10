<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\City;
use App\Models\Role;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Throwable;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        $users = User::with(['role', 'images', 'city'])->get();
        return view('admin.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return View
     */
    public function create(): View
    {
        return $this->edit(new User());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UserRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(UserRequest $request): RedirectResponse
    {
        return $this->update($request, new User());
    }

    /**
     * Display the specified resource.
     *
     */
    public function show()
    {
        //
    }

    /**
     * @param User $user
     * @return View
     */
    public function edit(User $user): View
    {
        $model = $user->load('city', 'role');
        $cities = City::get();
        $roles = Role::get();
        return view('admin.users.edit', compact('model', 'cities', 'roles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserRequest $request
     * @param User $user
     * @return RedirectResponse
     * @throws Throwable
     */
    public function update(UserRequest $request, User $user): RedirectResponse
    {
        $user->createUser($request);
        return redirect()->route('admin.users.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(int $id): RedirectResponse
    {
        $user = User::find($id);
        $user->delete();

        return redirect()->route('admin.users.index');
    }
}
