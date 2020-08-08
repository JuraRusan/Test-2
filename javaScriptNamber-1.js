const private = confirm(  "Are you sure you want to login? (Вы уверены, что хотите войти?)");
if (private) {
    myDiv.innerHTML += `
    <div class="my-class-documents">
          <h1>My fast access to documents</h1>
          <form action="">
            <input type="text" placeholder="What is your name?" />
            <input type="text" placeholder="Enter the password" />
          </form>
          <button class="button"><span>Go </span></button>
        </div>
    `;

  // console.log("Welcome");
  // document.writeln("Welcome");
} else {
  console.log("Sorry.... No access");
  document.writeln("Sorry.... No access!!!");
}
