export const basicTypes = () => {
   // 1. string, number, boolean
  const userName: string = "Cuong";
  const userAge: number = 22;
  const isLoggedIn: boolean = true;
  console.log(userName, userAge, isLoggedIn);

  // 2. array
  const hobbies: string[] = ["Coding", "Gaming"];
  const scores: number[] = [10, 9.5, 8];
  console.log(hobbies, scores);

  // 3. tuple
  const person: [string, number] = ["Cuong", 22];
  console.log(person);

  // 4. enum
  enum Gender {
    Male,
    Female,
    Other,
  }
  const myGender: Gender = Gender.Male;
  console.log(myGender);

  // 5. any
  let randomData: any = "abc";
  randomData = 123;
  console.log(randomData);

  // 6. union type
  let id: string | number = "123";
  id = 456;
  console.log(id);

  // 7. literal type
  const direction: "left" | "right" | "up" | "down" = "left";
  console.log(direction);

  // 8. null & undefined
  const something: string | null = null;
  console.log(something);

  // 9. void
  function logMessage(msg: string): void {
    console.log(msg);
  }
  logMessage("Hello world");

};
