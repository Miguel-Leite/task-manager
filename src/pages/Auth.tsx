import '../styles/auth.scss'

export function Auth () {
    return (
        <div className="auth">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-4 col-md-6 col-xs-12">
                        <h1><span>TASK</span>Manager </h1>
                        
                        <button type="button" className="social">
                            <div className="icon">
                                G
                            </div>
                            Google
                        </button>

                        <button type="button" className="social">
                            <div className="icon">
                                f
                            </div>
                            Facebook
                        </button>

                        <form>
                            <div className="form-group">
                                <label>Your email</label>
                                <input type="text"  className="form-control" placeholder="Please insert your e-mail address"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text"  className="form-control" placeholder="Please insert your password"/>
                            </div>
                            <button>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}