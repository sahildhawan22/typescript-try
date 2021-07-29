let obj = {
    toString(){
      console.log('toString called')
      return 'Hello'
    }
  }
  
  let foo = {};
  foo[obj] = 'World'; // toString called
  console.log(foo[obj]); // toString called, World
  console.log(foo['Hello']); // World
  console.log(`foo: ${JSON.stringify(foo)}`)