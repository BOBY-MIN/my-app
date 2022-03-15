import React from 'react';

interface GreetingsProps {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void; // 아무것도 리턴하지 않음.
}
// React.FC 는 사용하지 않는 것을 권장함.
// defaultProps 가 작동하지 않고, 사용하지 않는 것을 코딩컨벤션으로 하는 곳이 많음.
// const Greetings: React.FC<GreetingsProps> = ({name}) => (
//     <div>Hello, {name}</div>
// )

// 요새 추세는 화살표 함수보다는 아래와 같은 function 키워드를 통한 함수 생성이 더 낫다고 봄.
function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    // const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={() => onClick(name)}>Click Me</button>
            </div>
        </div>
    )
}

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings;