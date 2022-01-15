import { Navbar } from '../components/Navbar';

import '../styles/list.scss'

export function List () {
    return (
        <header className="header-list">
            <Navbar />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-sm-8 col-md-12 col-xs-12">
                        <h1>My Tasks</h1>
                        <p>Register your and have a better monitoring of your activities</p>
                        <div className="search">
                            <input type="text"  className="form-control" placeholder="Find of tasks"/>
                        </div>

                        <h3>Tasks - 2</h3>
                        <div className="tasks">
                            <div className="task-item">
                                <input type="checkbox" name="done" id="done" />
                                <div className="content">
                                    <p>Salve computer logic problems</p>
                                    <p className="date">Today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}