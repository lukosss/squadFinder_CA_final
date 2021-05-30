<?php

namespace App\Http\Controllers;

use App\Models\Rank;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        $ranks = Rank::get();
        return view('admin.ranks.index', compact('ranks'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(): View
    {
        return $this->edit(new Rank());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        return $this->update($request, new Rank());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Rank $rank
     * @return View
     */
    public function edit(Rank $rank): View
    {
        $model = $rank;
        return view('admin.ranks.edit', compact('model'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Rank $rank
     * @return RedirectResponse
     */
    public function update(Request $request, Rank $rank): RedirectResponse
    {
        $rank->fill($request->all())->save();
        return redirect()->route('admin.ranks.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $game = Rank::find($id);
        $game->delete();

        return redirect()->route('admin.ranks.index');
    }
}
