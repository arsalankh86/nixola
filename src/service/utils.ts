
export const sortData = (arr: any) =>{
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]> arr[j]){
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

export const searchData = (arr: any, searchItem: any) =>{
    let startIndex = 0;
    let endIndex = arr.length;

    for(let i=0; i<arr.length; i++){
        let midIndex = (startIndex + endIndex) / 2;

        if(searchItem === arr[midIndex]){
            console.log("Item Found " + searchItem );
            return;
        }
        else if(searchItem > arr[midIndex])
        {
            startIndex = midIndex + 1;
        }
        else if(searchItem < arr[midIndex])
        {
            endIndex =  midIndex-1;
        }

    }
    
}


export const sortDataByName = (arr: any) =>{
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i].name> arr[j].name){
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

export const searchDataByName = (arr: any, searchItem: any) =>{
    let startIndex = 0;
    let endIndex = arr.length-1;

  while(startIndex < endIndex){
        let midIndex = Math.floor((startIndex + endIndex) / 2);
        
        if(searchItem === arr[midIndex].name){
            console.log("Item Found " + searchItem );
            return;
        }
        else if(searchItem > arr[midIndex].name)
        {
            startIndex = midIndex + 1;
        }
        else if(searchItem < arr[midIndex].name)
        {
            endIndex =  midIndex-1;
        }

    }
    
}