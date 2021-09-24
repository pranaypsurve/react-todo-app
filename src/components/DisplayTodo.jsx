// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "./todo.css";
const DisplayTodo = (props) => {
    // console.log(props.data.items);
    if(props.data.items){
        if (5 === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
          }
        return(
            <>
                {
                    props.data.items.map((item,index)=>{
                        return (
                            // <div className="col-lg-12 todolist mb-2" >
                                <div className="row todolist mb-2 m-0 p-2" key={index+item}>
                                    <i className="col-1 col-sm-1 col-lg-1 fa fa-edit" onClick={() => {props.data.edit(index+item)}} title="Edit Todo"></i>
                                    <h4 className="col-9 col-sm-10 col-lg-10">{item}</h4>
                                    <i className="col-1 col-sm-1 col-lg-1 fa fa-trash" onClick={()=>props.data.delete(index+item)} aria-hidden="true" title="Delete Todo"></i>
                                </div>
                            // </div>
                        )
                    })
                }
            </>
        );
    }else{
        return null;
    }
}
export default DisplayTodo;