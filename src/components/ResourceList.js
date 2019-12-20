import React from 'react';
import useResource from './useResource';



const ResourceList  = ({resource}) =>  {

const resources = useResource(resource);

    // const [resources, setResource] = useState([])

    // // const fetchResource = async  resource  =>{
    // //    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    // //     // this.setState({
    // //     //     resource: response.data
    // //     setResource(response.data)
    // //     }
  

    // // async componentDidUpdate (preProps) {
    // //     if(preProps.resource !== this.props.resource){
    // //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    // //         this.setState({
    // //             resource: response.data
    // //         })
    // //     }

    //   useEffect(()=>{
    //     //   fetchResource(resource)

        
    //         ( async  resource  =>{
    //             const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    //              // this.setState({
    //              //     resource: response.data
    //              setResource(response.data)
    //              })(resource)
        
    //   },[resource])
    // // }
        return (
            <div>{resources.map(record => (<li key={record.id}>{record.title}</li>))}</div>
        )
    }
export default ResourceList;