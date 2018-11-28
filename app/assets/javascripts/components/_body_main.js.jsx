class BodyMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      authSuccess: false,
      token: ''
    };
  }

  componentDidMount(){
    // fetch('https://api.webhris.com/auth/token/', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //   },
    //   body: 'username=CodeChallengeApiUser&password=CpLk0UMcy%5EG3ZU%23T8*J%23%40YfLTZyTZnzWi4%40U1ELn%5E3&grant_type=password'
    // }).then((response) => {return response.json()})
    //   .then((data) => {this.setState({ token: data.access_token }) });
    this.setState({ token: 'debug' })
  }

  render(){
    if(this.state.token == ''){
      return(
        <div class="row">
          <div class="col-md-1">
          </div>
          <div class="col-md-10">
            Authenticating...
          </div>
          <div class="col-md-1">
          </div>
        </div>
      )
    }
    else{
      return(
        <HomeTable/>
       )
     }
   }
}
