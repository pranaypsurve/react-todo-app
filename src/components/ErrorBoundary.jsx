import React , {Component} from "react";
export default class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
      static getDerivedStateFromError(Error){
          return {hasError: true};
      }
      componentDidCatch(error, errorInfo) {
          console.log(errorInfo);
      }

      render(){
          if(this.state.hasError){
              return <h2>Some Error has Occured</h2>
          }else{
            return this.props.children;
          }
          
      }
}