@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
                <div class="login-form">
                    <form method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}

                        <div class="input-field{{ $errors->has('email') ? ' red lighten-1' : '' }}">
                            <label for="email">E-Mail Address</label>

                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="red lighten-1 white-text">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="input-field{{ $errors->has('password') ? ' red lighten-1' : '' }}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                                <input id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="red lighten-1 white-text">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="input-field">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                    </label>
                                </div>
                        </div>

                        <div class="input-field">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    Forgot Your Password?
                                </a>
                        </div>
                    </form>
                </div>
        </div>
    </div>
</div>
@endsection
