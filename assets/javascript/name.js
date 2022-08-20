let nestedObject = {
    anotherObject: {
        value: 'value',
        friends: { name: 'David', 'age': 3 }
    }
};

for (const key in nestedObject) {
    const element = nestedObject[key]['friends']['age'];
    // console.log(element);
}

nestedObject.anotherObject.array = [
    2, 4, {
        nestedArray: {
            found: 'This is found',
            notFound: 'This is not found',
            try: 'You are trying'
        }
    }
]

const getFound = () => {
    const objectRoot = nestedObject.anotherObject.array;
    for (let i = 0; i < objectRoot.length; i++) {
        const loopedArray = objectRoot[i];
        // console.log(loopedArray)
        for (const key in loopedArray['nestedArray']) {
            if(key=='found'){
                console.log(key);
            }
        }
    }
}
getFound()