import React from 'react'

const Ex12 = () => {
    return (
        <View style={style.container} >
            <View style={[style.item, style.redSquare]}><Text style={style.text}>1</Text></View>
            <View style={[style.item, style.greenSquare]}><Text style={style.text}>2</Text></View>
            <View style={[style.item, style.blueSquare]}><Text style={style.text}>3</Text></View>
        </View>
    )
}
style = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    item: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redSquare: {
        backgroundColor: 'red',
    },
    blueSquare: {
        backgroundColor: 'blue',
    },
    greenSquare: {
        backgroundColor: 'green',
    },
    text: {
        color: 'white',
    }
}

export default Ex12
