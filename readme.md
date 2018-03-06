# Laravel 5.4 and Angular 5 with Laravel Mix

![alt tag](http://i.imgur.com/2E8aa6v.png)

## Description
- A simple and easy Laravel 5.4 and Angular 5 integration with Laravel Mix.

## How to install Laravel
- `clone or download zip file`
- `rename .env.example file to .env`
- `composer install`
- `php artisan key:generate`

## How to install Angular
- `npm install`
- `npm run dev`

## How to use styles and template in Angular component
```
@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [`${require('./app.component.scss')}`,]
})
```

## How to use .less in Angular
- `npm install less less-loader raw-loader --save-dev`