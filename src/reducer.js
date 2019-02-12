const initialState = {
    value: 0,
    color: "purple"
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    let { color } = action;
    

    if (type === "INCREMENT") {
        return {
            value: state.value + 1,
            color: state.color
        }
    } else if 
        (type === "DECREMENT") {
            return {
                value: state.value - 1,
                color: state.color
            }  
    } else if
        (type === "INCREMENTBYFIVE") {
            return {
                value: state.value + 5,
                color: state.color
            }
    } else if 
        (type === "DECREMENTBYFIVE") {
            return {
                value: state.value - 5,
                color: state.color
            }
    } else if 
        (type === "COLOR") {
            return {
                value: state.value,
                color: color
            }
    } else if 
        (type === "ADJUST_NUM") {           
            return {
                value: value,
                color: state.color
            }
        }
    
    return state;
}