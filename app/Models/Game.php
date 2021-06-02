<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'game_logo',
    ];

    public function ranks()
    {
        return $this->belongsToMany(Rank::class);
    }

    /**
     * @return BelongsToMany
     */
    public function images(): BelongsToMany
    {
        return $this->belongsToMany(Image::class);
    }

    /**
     * @param $request
     * @throws Throwable
     */
    public function createGame($request)
    {
        DB::transaction(function () use ($request) {
            //create user
            $this->fill($request->all())->save();
            //get image ids
            $imageIds = Image::handleImageInsert($request);
            //sync images
            $this->images()->sync($imageIds);
        });
    }

    /**
     * @param Request $request
     */
    public function updateGames(Request $request): void
    {
        DB::transaction(function () use($request){
            $this->fill($request->all())->save();
            $this->ranks()->sync($request->ranks);
        });
    }
}
