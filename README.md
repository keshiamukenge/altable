# altable

## Introduction
Restaurant API with NodeJS Express and Typescript

## How to use it ?
`````
npm install
npm run start
```````

## API Doc
<ul>
  <li>
    <code>[GET] /api/card</code>
    Get all plates of restaurant
    
    interface PlateInterface {
	      id: number
	      name: string
	      description: string
          type: 'Apéritif' | 'Entrée' | 'Plat principal' | 'Dessert' | 'Boisson'
	      price: number
	      quantity: number
      }
  </li>
	<li>
    <code>[POST] /api/card</code>
    Add plate on restaurant's card
  </li>
	<li>
    <code>[PUT] /api/card</code>
    Edit restaurant's card
    <br />
    <code>{ plateId: number, edit: 1 | -1 }</code>
  </li>
	<li>
    <code>[GET] /api/card/available</code>
    Get only the available plates
  </li>
</ul>
