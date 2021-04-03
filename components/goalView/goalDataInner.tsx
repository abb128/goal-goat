import { Link, Typography } from "@material-ui/core";
import React from "react";
import { DGoal } from "../../util/DGoal";
import { completionTypeData, goalCategoryData, goalIntervalData } from "../../util/GoalFormat";

import styles from "./goalView.module.css"


type GoalDataInnerProps = {
    goal: DGoal;
    extraText?: string;
}

class GoalDataInner extends React.Component<GoalDataInnerProps> {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.cardMain} >
                <div className={styles.categoryImage}>
                    <div className={styles.categoryImageInner}>
                        {goalCategoryData[this.props.goal.category].icon}
                    </div>
                </div>

                <div className={styles.cardRightSide} >
                    <Typography variant="h6">
                        {this.props.goal.name}
                    </Typography>
                    <Typography color="textSecondary">
                        {goalIntervalData[this.props.goal.interval].friendly_name.toLowerCase()}

                        {", "}
                        {this.props.extraText && `${this.props.extraText}, `}

                        {completionTypeData[this.props.goal.completionType].friendly_name.toLowerCase()}
                    </Typography>
                </div>
            </div>
        );
    }
}

export default  GoalDataInner;