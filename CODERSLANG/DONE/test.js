const animals = [
    {
    type: 'Dog',
    name: 'Rex',
  }, 
  {
    type: 'Horse',
  }];
  console.log (animals.length);
  animals.push ({type: 'Cat', name: 'Murka'});
  console.log (animals.length);
  animals.push({type: 'bird', name : 'piggen'})
  console.log (animals.length);
  console.log(animals)

  for(let i = 0; i > animals.length; i++){
    animals.push()
  }
  const food = [
    ['Apple', 'Orange', 'Banana'],
    ['Strawberry', 'Blueberry', 'Raspberry'],
    ['Potato', 'Carrot', 'Broccoli'],
  ];

  console.log(food[0])