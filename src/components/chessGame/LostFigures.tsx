import React, {FC} from 'react';
import {Figure} from "../../models/figures/Figure";

interface LostFiguresProps{
    title: string;
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    let name: string = title
    return (
        <div className={"lost"}>
            <h3>{name}</h3>
            {figures.map((figure) =>
                <div key={figure.id}>
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo}/>}
                </div>
            )}
        </div>
    );
};

export default LostFigures;