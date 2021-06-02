<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rank extends Model
{
    use HasFactory;

    protected $fillable = [
        'rank_name',
    ];

    public function games()
    {
        return $this->belongsToMany(Game::class);
    }
}
