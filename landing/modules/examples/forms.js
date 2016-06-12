import React from 'react';
import Formsy from 'formsy-react';
import {Forms} from '../../../src/index';

const MyForm = React.createClass({

	propTypes: {
		children: React.PropTypes.node
	},

	mixins: [Forms.ParentContextMixin],

	render() {
			return (
					<Formsy.Form
							className={this.getLayoutClassName()}
							{...this.props}
							ref="formsy"
					>
							{this.props.children}
					</Formsy.Form>
			);
	}

});

const Options = React.createClass({

		mixins: [Forms.ParentContextMixin],

		render() {
				return (
						<div>
								<Formsy.Form className={this.getLayoutClassName()}>
										<Forms.RadioGroup
												name="layout"
												type="inline"
												label="layout"
												value={this.props.layoutChoice}
												options={[
														{value: 'horizontal', label: <code>horizontal</code>},
														{value: 'vertical', label: <code>vertical</code>},
														{value: 'elementOnly', label: <code>elementOnly</code>}
												]}
												onChange={this.props.changeOption}
										/>
										<Forms.Checkbox
												name="validatePristine"
												value={this.props.validatePristineChoice}
												onChange={this.props.changeOption}
												label="Yes"
												rowLabel="validatePristine"
										/>
										<Forms.Checkbox
												name="disabled"
												value={this.props.disabledChoice}
												onChange={this.props.changeOption}
												label="Yes"
												rowLabel="disabled"
										/>
								</Formsy.Form>
						</div>
				);
		}
});

export default class FormPlayground extends React.Component {

		constructor(props) {
				super(props);

				// Default state
				this.state = {
						layout: 'horizontal',
						validatePristine: false,
						disabled: false
				};
		}

		resetForm = () => {
				// This is nasty
				const formsy = this.refs.myform.refs.formsy;
				formsy.reset();
		}

		submitForm = (data) => {
				console.log(data);
		}

		changeOption = (name, value) => {
				var newState = {};
				newState[name] = value;
				this.setState(newState);
		}

		render() {

				var radioOptions = [
					{ value: 'a', label: 'Option A' },
					{ value: 'b', label: 'Option B' },
					{ value: 'c', label: 'Option C' }
				];

				var radioOptionsDisabled = [
						{value: 'a', label: 'Option A'},
						{value: 'b', label: 'Option B', disabled: true},
						{value: 'c', label: 'Option C'}
				];

				var optionY = {
						value: 'y',
						label: 'Option Y (yellow css class)',
						className: 'yellow'
				};
				optionY['data-note'] = 'This is a data attribute.';
				var selectOptions = [
						{value: 'a', label: 'Option A'},
						{value: 'a', label: 'Option A (again)'},
						{value: 'b', label: 'Option B'},
						{value: 'c', label: 'Option C', title: 'This is a title attribute for Option C'},
						{value: 'd', label: 'Option D', disabled: true},
						optionY
				];

				var singleSelectOptions = selectOptions.slice(0);
				singleSelectOptions.unshift({value: '', label: 'Please select…'});

				return (
					<div className="preview_code">
						<div className="row">
								<h3>Options</h3>
								<Options
										layoutChoice={this.state.layout}
										validatePristineChoice={this.state.validatePristine}
										disabledChoice={this.state.disabled}
										changeOption={this.changeOption}
								/>
								<div className="page-header">
										<h2>Layout: <code>{this.state.layout}</code></h2>
								</div>
								<MyForm
										onSubmit={this.submitForm}
										layout={this.state.layout}
										validatePristine={this.state.validatePristine}
										disabled={this.state.disabled}
										ref="myform"
								>
										<fieldset>
												<legend>Input types</legend>
												<Forms.Input
														name="secret"
														value="I'm hidden!"
														type="hidden"
												/>
												<Forms.Input
														name="text1"
														id="artisanCraftedBespokeId"
														value=""
														label="Text"
														type="text"
														placeholder="Here is a text input."
														help="This is a required text input."
														required
												/>
												<Forms.Input
														name="date[0]"
														value=""
														label="Date"
														type="date"
														placeholder="This is a date input."
														required
												/>
												<Forms.Input
														name="email"
														value=""
														label="Email"
														type="email"
														autoComplete="off"
														placeholder="This is an email input."
														help="This email field should not autocomplete."
														validations="isEmail"
														validationErrors={{
																isEmail: 'This doesn’t look like a valid email address.'
														}}
														required
												/>
												<Forms.Input
														name="password1"
														value=""
														label="Password"
														type="password"
														validations="minLength:8"
														validationError="Your password must be at least 8 characters long."
														placeholder="Choose a password"
												/>
												<Forms.Input
														name="password2"
														value=""
														label="Confirm password"
														type="password"
														validations="equalsField:password1"
														validationErrors={{
																equalsField: 'Passwords must match.'
														}}
														placeholder="Retype password"
												/>
												<Forms.Input
														type="color"
														name="colour1"
														label="Colour input"
														value="#000000"
														validations="equals:#000000"
														validationError="You can have any color, as long as it's black."
												/>
												<Forms.Input
														type="range"
														name="range1"
														label="Range input"
														min={0}
														max={10}
														step={2}
												/>
												<Forms.File
														name="file1"
														label="File picker"
														help="Warning: this returns a FileList that will need custom coding to be useful."
														multiple
												/>
										</fieldset>
										<fieldset>
												<legend>Textarea</legend>
												<Forms.Textarea
														rows={3}
														cols={40}
														name="txtArea1"
														label="Textarea"
														placeholder="This field requires 10 characters."
														help="This is some help text for the textarea."
														validations="minLength:10"
														validationErrors={{
																minLength: 'Please provide at least 10 characters.'
														}}
												/>
										</fieldset>
										<fieldset>
												<legend>Select</legend>
												<Forms.Select
														name="select1"
														label="Select"
														help="This is a required select element."
														options={singleSelectOptions}
														required
												/>
												<Forms.Select
														name="select2"
														value={['a', 'c']}
														label="Select (multiple)"
														help="Here, “Option A” and “Option C” are initially selected."
														options={selectOptions}
														multiple
												/>
										</fieldset>
										<fieldset>
												<legend>Checkboxes</legend>
												<Forms.Checkbox
														name="checkbox1"
														value={true}
														label="Check me out"
														rowLabel="Checkbox (single)"
												/>
												<Forms.CheckboxGroup
														name="checkboxGrp1"
														value={['a', 'c']}
														label="Checkbox group (stacked)"
														help="Here, “Option A” and “Option C” are initially selected."
														options={radioOptions}
												/>
										</fieldset>
										<fieldset>
												<legend>Radio group</legend>
												<Forms.RadioGroup
														name="radioGrp1"
														value="b"
														label="Radio group (stacked)"
														help="Here, “Option B” is initially selected."
														options={radioOptions}
												/>
												<Forms.RadioGroup
														name="radioGrp2"
														type="inline"
														label="Radio group (inline)"
														help="This is a required radio group."
														options={radioOptions}
														required
												/>
												<Forms.RadioGroup
														name="radioGrp3"
														type="inline"
														label="Radio group (disabled)"
														help="Here, “Option B” is disabled."
														options={radioOptionsDisabled}
												/>
										</fieldset>
										<fieldset>
												<legend>Layout tweaks</legend>
												<Forms.Input
														name="cssRowTweak"
														value=""
														label="This row is yellow"
														type="text"
														placeholder="the rowClassName property is ‘yellow’"
														rowClassName="yellow"
														help="You can modify the class name for the row."
												/>
												<Forms.Input
														name="cssWrapperTweaks"
														value=""
														label="Label and element wrapper"
														type="text"
														placeholder="Label is ‘col-sm-5’, element-wrapper is ‘col-sm-7’"
														labelClassName={[{'col-sm-3': false}, 'col-sm-5']}
														elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-7']}
														help="The label and element-wrapper classes can be changed."
												/>
										</fieldset>
										<fieldset>
												<legend>Disabled</legend>
												<Forms.Input
														name="disabled"
														value="This field is always disabled."
														label="Disabled"
														type="text"
														disabled={true}
														help="The disabled prop on this component is set to true."
												/>
										</fieldset>
										<fieldset>
												<legend>Input groups</legend>
												<Forms.Input
														name="addon-before"
														value=""
														label="Add-on before"
														type="text"
														addonBefore={<span className="glyphicon glyphicon-search"></span>}
												/>
												<Forms.Input
														name="addon-after"
														value=""
														label="Add-on after"
														type="text"
														addonAfter={<span className="glyphicon glyphicon-search"></span>}
												/>
												<Forms.Input
														name="button-before"
														value=""
														label="Button before"
														type="text"
														buttonBefore={<button className="btn btn-default" type="button">Go!</button>}
												/>
												<Forms.Input
														name="button-after"
														value=""
														label="Button after"
														type="text"
														buttonAfter={<button className="btn btn-default" type="button">Go!</button>}
												/>
										</fieldset>
										<fieldset>
												<Forms.Row layout={this.state.layout}>
														<Forms.Input name="reset" className="btn btn-default" onClick={this.resetForm} type="reset" defaultValue="Reset" />
														{' '}
														<Forms.Input name="submit" className="btn btn-primary" formNoValidate={true} type="submit" defaultValue="Submit" />
												</Forms.Row>
										</fieldset>
								</MyForm>
						</div>
					</div>
				);
		}
}
