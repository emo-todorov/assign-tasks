import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addHuman } from '../store/slices/humansSlice';
import Form from './Form';
import { toggleTask } from '../store/slices/tasksSlice';

const AllHumans = () => {
    const humans = useSelector(state => state.humans);
    const tasks = useSelector(state => state.tasks);

    const dispatch = useDispatch();

    const onHumanNameSubmit = (name) => {
        dispatch(addHuman(name))
    };

    const renderedHumans = humans.map(curHuman => {
        const { id, name, taskIds } = curHuman;

        const renderedHumanTasks = taskIds.map(taskId => {
            const taskData = tasks.find(({ id }) => id === taskId);

            const changeHandler = (event) => {
                const isCompleted = event.target.checked;

                dispatch(toggleTask({ taskId, isCompleted }));
            };

            return (
                <li key={taskId}>
                    <input type='checkbox' id={taskId} onChange={changeHandler} />
                    <label htmlFor={taskId}>{taskData.title}</label>
                </li>
            );
        });

        return (
            <li key={id}>
                <div>{name}</div>
                <ul className='task-list'>
                    {renderedHumanTasks}
                </ul>
            </li>
        );
    });

    return (
        <section className="section-humans">
            <h3>Humans</h3>
            <Form
                id="humans"
                name="humans"
                placeholder="Enter name:"
                onSubmit={onHumanNameSubmit}
            />
            <ul className="humans">
                {renderedHumans}
            </ul>
        </section>
    );
};

export default AllHumans