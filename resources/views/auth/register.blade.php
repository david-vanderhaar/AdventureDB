@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
                <div class="register-form">
                    <form method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

                        <div class="input-field{{ $errors->has('name') ? ' teal lighten-2' : '' }}">
                            <label for="name" class="col-md-4 control-label white-text">Name</label>

                                <input id="name" type="text" class="form-control white-text" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="input-field{{ $errors->has('email') ? ' teal lighten-2' : '' }}">
                            <label for="email" class="col-md-4 control-label white-text">E-Mail Address</label>

                                <input id="email" type="email" class="form-control white-text" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="input-field{{ $errors->has('password') ? ' teal lighten-2' : '' }}">
                            <label for="password" class="col-md-4 control-label white-text">Password</label>

                                <input id="password" type="password" class="form-control white-text" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="input-field">
                            <label for="password-confirm" class="col-md-4 control-label white-text">Confirm Password</label>

                                <input id="password-confirm" type="password" class="form-control white-text" name="password_confirmation" required>
                        </div>

                        <div class="input-field">
                                <button type="submit" class="btn btn-primary">
                                    Register
                                </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
</div>
@endsection
