import React from "react";
import PersonalNameCard from "components/PersonalNameCard";
import PersonalDeptCard from "components/PersonalDeptCard";

export default class Hoc extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <main style={{ padding: "1rem 0" }}>
                <h2>Hoc 예제</h2>
                <PersonalNameCard />
                <PersonalDeptCard />
            </main>
        );
    }

}