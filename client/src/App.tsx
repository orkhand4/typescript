const App = () => {

  type Person = {
    fullName: string;
    age: number;
    salary: number;
    isWorking: boolean;
    isMarry: boolean;
    speciality: string;
  }

  const person:Person = {
    fullName: 'Zahid Vahabzade',
    age: 23,
    salary: 4000,
    isWorking: true,
    isMarry: true,
    speciality: 'teacher',
  }

  const canTakeIpoteca = (age:number, isWorking:boolean, salary:number):boolean => {
    if (age < 18 || !isWorking || salary < 1000)
      return false

    return true
  }

  const calculateIpoteca = (client: Person):any => {
    //extract age, isWorking, salary from client
    const { age, isWorking, salary } = client

    // check client can take ipoteca
    const check1 = canTakeIpoteca(age, isWorking, salary);
    if (!check1) {
      console.log("Sorry You can't take Ipoteca")
      return
    }
    console.log('You can take Ipoteca');
    
  }

  return (
    <div>
      <h1>TypeScript</h1>
      <button onClick={() => calculateIpoteca(person)}>DEMO</button>
    </div>
  )
}

export default App
