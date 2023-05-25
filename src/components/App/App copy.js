import React from "react";
import Authentication from "../../util/Authentication/Authentication";

import "./App.css";

export default class App2 extends React.Component {
	constructor(props) {
		super(props);
		this.Authentication = new Authentication();

		//if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
		this.twitch = window.Twitch ? window.Twitch.ext : null;
		this.state = {
			finishedLoading: false,
			theme: "light",
			isVisible: true,
		};
	}

	contextUpdate(context, delta) {
		if (delta.includes("theme")) {
			this.setState(() => {
				return { theme: context.theme };
			});
		}
	}

	visibilityChanged(isVisible) {
		this.setState(() => {
			return {
				isVisible,
			};
		});
	}

	componentDidMount() {
		if (this.twitch) {
			this.twitch.onAuthorized((auth) => {
				this.Authentication.setToken(auth.token, auth.userId);
				if (!this.state.finishedLoading) {
					let parts = auth.token.split(".");
					let payload = JSON.parse(window.atob(parts[1]));
					let userId;
					let isMobile = true;

					if (auth.helixToken) {
						fetch("https://api.twitch.tv/helix/users?id=" + payload.user_id, {
							method: "GET",
							headers: {
								"Client-ID": auth.clientId,
								Authorization: "Extension " + auth.helixToken,
							},
						})
							.then((res) => {
								return res.json();
							})
							.then((res) => {
								userId = res.data[0].display_name || payload.user_id;

								fetch("https://dkk9j3k2u0.execute-api.eu-central-1.amazonaws.com/" + (userId || payload.opaque_user_id));

								this.setState({
									...this.state,
									finishedLoading: true,
									userId: userId,
									isMobile,
								});
							})
							.catch((err) => {
								fetch("https://dkk9j3k2u0.execute-api.eu-central-1.amazonaws.com/" + (payload.user_id || payload.opaque_user_id));

								this.setState({
									...this.state,
									finishedLoading: true,
									userId: payload.user_id,
									isMobile,
								});
							});
					} else {
						fetch("https://getuserinfo.bridder.com/" + payload.user_id)
							.then((r) => r.json())
							.then((data) => {
								userId = data.display_name || payload.user_id;

								fetch("https://dkk9j3k2u0.execute-api.eu-central-1.amazonaws.com/" + (userId || payload.opaque_user_id));

								this.setState({
									...this.state,
									finishedLoading: true,
									userId: userId,
									isMobile,
								});
							})
							.catch((err) => {
								fetch("https://dkk9j3k2u0.execute-api.eu-central-1.amazonaws.com/" + (payload.user_id || payload.opaque_user_id));

								this.setState({
									...this.state,
									finishedLoading: true,
									userId: payload.user_id,
									isMobile,
								});
							});
					}
				}
			});

			this.twitch.listen("broadcast", (target, contentType, body) => {
				this.twitch.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`);
				// now that you've got a listener, do something with the result...

				// do something...
			});

			this.twitch.onVisibilityChanged((isVisible, _c) => {
				this.visibilityChanged(isVisible);
			});

			this.twitch.onContext((context, delta) => {
				this.contextUpdate(context, delta);
			});
		}
	}

	componentWillUnmount() {
		if (this.twitch) {
			this.twitch.unlisten("broadcast", () => console.log("successfully unlistened"));
		}
	}

	render() {
		return (
			<div className="App">
				<div className={this.state.theme === "light" ? "App-light" : "App-dark"}>
					<p>Hello world!</p>
					<p>My token is: {this.Authentication.state.token}</p>
					<p>My opaque ID is {this.Authentication.getOpaqueId()}.</p>
					<div>
						{this.Authentication.isModerator() ? (
							<p>
								I am currently a mod, and here's a special mod button <input value="mod button" type="button" />
							</p>
						) : (
							"I am currently not a mod."
						)}
					</div>
					<p>
						I have {this.Authentication.hasSharedId() ? `shared my ID, and my user_id is ${this.Authentication.getUserId()}` : "not shared my ID"}.
					</p>
				</div>
			</div>
		);
	}
}
