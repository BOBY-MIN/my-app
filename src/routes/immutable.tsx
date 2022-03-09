import React from "react";
import { Map, List, fromJS } from 'immutable';

export default class ImmutableEx extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        var data = Map({
            a: 1,
            b: 2,
            c: Map({
                d: 3,
                e: 4,
                f: 5
            })
        })
        
        console.log(data.toJS());
        console.log('b ===> ' + data.get('b'));
        console.log(data.get('c').toJS());
        console.log('e ===> ' + data.get('c').get('e'));
        console.log('d ===> ' + data.getIn(['c', 'd']));


        var newData = data.set('a', 4);
        var deepData = data.setIn(['c', 'd'], 10);
        var topMergeData = data.merge({ a: 30, b: 30 })
         
        console.log(data.toJS());
        console.log(newData.toJS());
        console.log(deepData.toJS());
        console.log(topMergeData.toJS());





        console.log("============================================");
        console.log("============================================");
        console.log("============================================");
        console.log("============================================");




        var list = List(
            [
                Map({ name: 'min', age: 20 }),
                Map({ name: 'hee', age: 21 })
            ]
        );
        
        console.log(list.toJS());

        // 객체의 내부값 수정
        var newNameList = list.setIn([0, 'name'], 'sang');
        var newAgeList = list.setIn([1, 'age'], 30);
        // 객체의 내부값 수정
        var updateList = list.update(
        0, // 배열의 index 지정
        item => item.set('age', item.get('age') * 10) // item은 해당 인덱스의 객체
        );
        // 객체 자체를 수정
        var setList = list.set(0, Map({ name: 'hi', age: 10 }));
        
        console.log(newNameList.toJS());
        console.log(newAgeList.toJS());
        console.log(updateList.toJS());
        console.log(setList.toJS());

        // 마지막에 데이터 추가하기
        var pushList = list.push(Map({ name: 'sang', age: 22 }));
        // 맨 앞에 데이터 추가하기
        var unshiftList = list.unshift(Map({ name: 'lee', age: 19 }));
        
        console.log(pushList.toJS());
        console.log(unshiftList.toJS());
        
        // 데이터 제거하기
        // 인덱스로 제거
        var indexDelList = list.delete(0);
        // 맨 마지막 데이터 제거
        var popList = list.pop();
        
        console.log(indexDelList.toJS());
        console.log(popList.toJS());
        
        // 크기 확인
        console.log(list.size);
        // 비어있는지 확인
        console.log(list.isEmpty());



        var fromJSList = fromJS(
            [
                { name: 'hyung', age: 20},
                { name: 'min', age: 21}
            ]
        );

        console.log(fromJSList.toJS());

        var newFromJSList = fromJSList.setIn([0, 'name'], 'sang');

        console.log(newFromJSList.toJS());


        var fromJSData = fromJS({
            a: 1,
            b: 2,
            c: Map({
                d: 3,
                e: 4,
                f: 5
            })
        })

        var newFromJSData = fromJSData.set('a', 4);

        console.log(fromJSData.toJS());
        console.log(newFromJSData.toJS());

        return (
            <main style={{ padding: "1rem 0" }}>
                <h2>Immutable 예제</h2>
            </main>
        );

    }

}