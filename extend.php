<?php

/**
 * @package   andresoftware/flarum-mock-api-playground
 * @author    Andre Software
 * @copyright 2026
 * @license   MIT
 */

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->route('/mock-api', 'andresoftware.mockapi', function ($document) {
            $document->title = 'Zero-DB Mock API Playground';
        })
];