class HomeTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount(){
    fetch('/employee', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }}).then((response) => {return response.json()})
      .then((data) => {this.setState({ employees: data}) });
  }

  render(){
    if(this.state.employees.length == 0){
      return(
        <table class="table" >
          <thead class="thead thread-main">
            <tr>
              <th scope="col" class="th-main">SSN</th>
              <th scope="col" class="th-main">First Name</th>
              <th scope="col" class="th-main">Last Name</th>
              <th scope="col" class="th-main">Work Phone</th>
            </tr>
          </thead>
        </table>
      )
    }
    else{
      var innerTable =[];

      for(var i = 0; i < this.state.employees.length; i++){
        innerTable.push(
          <tr>
            <th scope="row">{this.state.employees[i].ssn}</th>
            <td class="td-main">{this.state.employees[i].firstname}</td>
            <td class="td-main">{this.state.employees[i].lastname}</td>
            <td class="td-main">{this.state.employees[i].workphone}</td>
          </tr>
        )
      }

      return(
        <table class="table">
          <thead class="thead thread-main">
            <tr>
              <th scope="col" class="th-main">SSN</th>
              <th scope="col" class="th-main">First Name</th>
              <th scope="col" class="th-main">Last Name</th>
              <th scope="col" class="th-main">Work Phone</th>
            </tr>
          </thead>
          <tbody>
            {innerTable}
          </tbody>
        </table>
      )
    }
   }
}
