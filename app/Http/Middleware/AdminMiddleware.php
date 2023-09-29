<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
{
    // Check if the user is an admin (example: user has an "admin" role)
    if (auth()->check() && auth()->user()->isUserAdmin()) {
        // If an admin, allow the request to proceed
        Log::debug('AdminMiddleware: User is an admin');
        return $next($request);
    }


    // If not an admin, redirect or return an unauthorized response
    return redirect()->route('customer')->with('error', 'Unauthorized');
}

}
