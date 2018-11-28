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
    // <table class="table" >
    //   <thead class="thead thread-main">
    //     <tr>
    //       <th scope="col" class="th-main">#</th>
    //       <th scope="col" class="th-main">First</th>
    //       <th scope="col" class="th-main">Last</th>
    //       <th scope="col" class="th-main">Handle</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row">1</th>
    //       <td class="td-main">Mark</td>
    //       <td class="td-main">Otto</td>
    //       <td class="td-main">@mdo</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">2</th>
    //       <td class="td-main">Jacob</td>
    //       <td class="td-main">Thornton</td>
    //       <td class="td-main">@fat</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">3</th>
    //       <td class="td-main">Larry</td>
    //       <td class="td-main">the Bird</td>
    //       <td class="td-main">@twitter</td>
    //     </tr>
    //   </tbody>
    // </table>
    return(

     )
   }
}
