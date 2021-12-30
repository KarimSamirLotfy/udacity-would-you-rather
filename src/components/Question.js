import { Button, Card } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'

export default function Question({question, chooseOne = ()=>{console.log('choose 1')}, chooseTwo = ()=>{console.log("choose 2");}}) {
     const {id, author, timestamp, optionOne : {text: text_1, votes: votes_1}, optionTwo: {text: text_2, votes: votes_2}} = question
    return (
        <div>
            <Card >
                <Text>id: {id}, author:{author}, {text_1} OR {text_2}</Text>
                <Button onClick={()=>{chooseOne()}} >one</Button>
                <Button onClick={()=>{chooseTwo()}}>tow</Button>
            </Card>
        </div>
    )
}
