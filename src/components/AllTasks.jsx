import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import { addTask, assignToUser } from '../store/slices/tasksSlice';

const AllTasks = () => {
    const tasks = useSelector(state => state.tasks);
    const humans = useSelector(state => state.humans);
    const dispatch = useDispatch();

    const onTaskSubmit = (name) => {
        dispatch(addTask(name))
    };

    const renderedOptions = humans.map(({ name, id }) => {
        return (
            <option key={id} value={id}>{name}</option>
        )
    });

    const renderedTasks = tasks.map(curTask => {
        const { id, title } = curTask;

        const selectOptionHandler = (event) => {
            const humanId = event.target.value;

            dispatch(assignToUser({ taskId: id, humanId }))
        }

        const taskInputId = `task-checkbox-${id}`;

        return (
            <div key={id} className="task">
                <div className="input-wrapper">
                    <input type="checkbox" id={taskInputId} />
                    <label htmlFor={taskInputId}><b>{title}</b></label>
                </div>
                <div className="input-wrapper">
                    <select onChange={selectOptionHandler} name="resource">
                        <option>(Unassigned)</option>
                        {renderedOptions}
                    </select>
                </div>
            </div>
        )
    });

    return (
        <section className="section-tasks">
            <h3>Tasks</h3>
            <Form
                id="tasks"
                name="tasks"
                placeholder="Describe task:"
                onSubmit={onTaskSubmit}
            />
            <ul className="tasks">
                {renderedTasks}
            </ul>
        </section>
    )
}

export default AllTasks