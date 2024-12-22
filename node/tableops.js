const aws = require("aws-sdk");
const { timeStamp, time } = require("console");
aws.config.update({region: 'us-west-2'})

const ddb = new aws.DynamoDB();
// ddb.listTables({},(err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });
// ddb.describeTable({
//     TableName: "Notesdemo"
// },(err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(JSON.stringify(data, null, 2));
//     }
// })
// ddb.createTable({
//     TableName: "Notesdemo_sdk",
//     AttributeDefinitions:[
//         {
//             AttributeName:"user_id",
//             AttributeType: "S"
//         },
//         {
//             AttributeName:"timestamp",
//             AttributeType: "N"
//         }
//     ],
//     KeySchema: [
//         {
//             AttributeName:"user_id",
//             KeyType: "HASH"
//         },
//         {
//             AttributeName:"timestamp",
//             KeyType: "RANGE"
//         }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 1,
//         WriteCapacityUnits: 1
//     }
// },(err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// ddb.updateTable({
//     TableName: "Notesdemo_sdk",
//     ProvisionedThroughput:{
//         ReadCapacityUnits: 2,
//         WriteCapacityUnits: 1
//     }
// },(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(JSON.stringify(data, null, 2))
//     }
// });
//const documentClient = new aws.DynamoDB.DocumentClient();
// documentClient.put({
//     TableName: "Notesdemo_sdk",
//     Item: {
//         user_id: 'bb',
//         timestamp: 1,
//         title: "my_title_v2",
//         content: "my_content_v2"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err)
//     } else {
        
//         console.log(JSON.stringify(data, null, 2))
//     }
// })
// documentClient.update({
//     TableName: "Notesdemo_sdk",
//     Key: {
//         user_id: "bb",
//         timestamp: 1
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues: {
//         ':t': "Title v2"
//     }
// }, (err, data)=> {
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// });


/*documentClient.batchWrite({
    RequestItems: {
        'Notesdemo_sdk': [
            {
                DeleteRequest: {
                    Key: {
                        user_id: "bb",
                        timestamp: 1
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: "aav2",
                        timestamp: 2,
                        title: "My title v2",
                        content: "My content v2"
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: "cd",
                        timestamp: 3,
                        title: "My title v3",
                        content: "My content v3"
                    }
                }
            }
        ]
    }
}, (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});
*/

ddb.listTables({},(err, data)=>{
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
    
});
ddb.describeTable({
    TableName: "Notesdemo"
},(err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(JSON.stringify(data, null, 2));
    }
})
// ddb.createTable({
//     TableName: "Notesdemo_sdk_v2",
//     AttributeDefinitions: [
//         {
//             AttributeName: "user_id",
//             AttributeType: "S"
//         },
//         {
//             AttributeName: "timestamp",
//             AttributeType: "N"
//         }
//     ],
//     KeySchema: [
//         {
//             AttributeName: "user_id",
//             KeyType: "HASH"
//         },
//         {
//             AttributeName: "timestamp",
//             KeyType: "RANGE"
//         }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 1,
//         WriteCapacityUnits: 1
//     }
// }, (err, data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// })