// const addToDb = id =>{
//     let data = {};
//     const storeData = localStorage.getItem('Data');
//     if(storeData){
//         data = JSON.parse(storeData);
//     }

//     const duration = data[id];
//     if(duration){
//         const newDuration = duration + 1;
//         data[id] = newDuration;
//     }
//     else{
//         data[id] = 1;
//     }
//     localStorage.setItem('Data', JSON.stringify(data));
// }

const addToLocalStorage = props =>{
    let data ={props};

    localStorage.setItem('Data', JSON.stringify(data));
    
}
const getStoreData = () =>{
    let data = {};
    const storeData = localStorage.getItem('Data');
    if(storeData){
        data = JSON.parse(storeData);
    }
    
    return data;
}

export{
    addToLocalStorage,
    getStoreData
}