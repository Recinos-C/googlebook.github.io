import axios from 'axios';
import Search from "../components/Search"
import Results from "../components/Results"


const Search = () => {

    getGoogleBooks: function(query){

        // import query into component
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    }
    return(
        <Container fluid>
            <Row>
             <Col size="md-6">
            <Search />
            </Col>
             <Col size="md-6 sm-12">
             <Results />
            </Col>
            </Row>
        </Container>
    )
}

export default Search;