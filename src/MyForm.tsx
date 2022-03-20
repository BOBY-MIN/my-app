import React, { useState, useRef } from "react";

interface MyFormProps {
    onSubmit: (form: { name: string; description: string }) => void;
}

function MyForm({ onSubmit }: MyFormProps){

    // ref 활용 예
    // generic 에 사용된 유형은 dom 요소에 커서를 올리면 확인 가능
    const inputRef = useRef<HTMLInputElement>(null);

    // 주어진 초기값으로 타입추론을 함. form 변수에 마우스 올릴 경우 타입유형 확인 가능함.
    const [form, setForm] = useState({
        name: ''
        ,description: ''
    });

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form
            ,[name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        // form 제출 후 초기화
        setForm({
            name: ''
            ,description: ''
        });

        // ref 등록 후 사용하는 값이 undefined 이거나 null일 수 있다면
        // 아래와 같이 null 체크를 하는 로직을 습관적으로 사용하는 것이 좋음.
        if( !inputRef.current ){
            return;
        }
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} ref={inputRef} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;