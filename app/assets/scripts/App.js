import '../styles/styles.css'
import Person from './modules/Person'

if (module.hot) {
  module.hot.accept()
}

class Adult extends Person {
  payTaxes(){
    console.log(this.name + " betalar skatt");
  }
}

var John = new Person("John Doe", "Yellow");
John.greet();

var Greta = new Adult("Greta Thunberg", "Green");
Greta.payTaxes();