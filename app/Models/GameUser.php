<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'game_id',
        'user_id',
        'rank_id',
        'ingame_name',
        'comment',
    ];

    public function rank()
    {
        return $this->belongsTo(Rank::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
