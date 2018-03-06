@extends('layouts.app')

@section('content')
    <app class="flex-center">
    	<div class="title m-b-md">
	    	Loading App Component...
	    </div>
    </app>
@endsection

@section('scripts')
    <script type="text/javascript" src="{{ mix('js/app-component.js') }}"></script>
@endsection