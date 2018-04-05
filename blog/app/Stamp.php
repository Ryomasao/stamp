<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stamp extends Model
{
    protected $fillable = [
        'company_id',
        'jan_code_1',
        'jan_code_2',
        'jan_code_3',
        'header_template',
        'header_style',
        'stamp_style',
    ];

    public function path():string
    {
        return '/stamps/'. $this->id;
    }

    public function headerStyle():string
    {
        return $this->header_template
               .'<style>'
               .$this->header_style
               .'</style>';
    }
}
