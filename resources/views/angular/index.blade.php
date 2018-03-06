@extends('layouts.app')

@section('content')
    <angular class="flex-center">
    	<div class="title m-b-md">
    		Loading Angular Component...
    	</div>
    </angular>
@endsection

@section('scripts')
    <script type="text/javascript" src="{{ mix('js/angular-component.js') }}"></script>
@endsection