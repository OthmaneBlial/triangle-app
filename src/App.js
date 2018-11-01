/**
 * @author Blial Othmane
 *
 * Finding out if a Triangle is is Equilateral, Isosceles or Scalene
 * An equilateral triangle is a triangle where its three sides are equal.
 * An isosceles triangle is a triangle that has two sides of equal length.
 * A scalene triangle is a triangle that all its sides are not equal.
 *
 * Solving the problem while provinding a simple UI:
 * We are asking the user to enter the three sides of the triangle,
 * then, we should check that the user enters a number, and also not let the input empty,
 * otherwise, the submit button should be disabled, so the user will not send wrong data.
 * After that, we should check, based on the three sides values, the type of the triangle,
 * then, we render the result below the form, and reset the form,
 * so the user can enter new values and check out another triangle's type.
 * @param {Object of numbers} values: {sideOne, sideTwo, sideThree} - Triangle's sides
 * @param {string} type - Triangle's type
 */

import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      type: "Equilateral"
    };
  }

  findsOutTriangleType() {
    const { sideOne, sideTwo, sideThree } = this.state.values;
    if (sideOne === sideTwo || sideTwo !== sideThree || sideTwo !== sideThree)
      this.setState({ type: "Isosceles" });
    if (sideOne === sideTwo && sideTwo === sideThree)
      this.setState({ type: "Equilateral" });
    if (sideOne !== sideTwo && sideTwo !== sideThree)
      this.setState({ type: "Scalene" });
  }

  render() {
    return (
      <div className="container" data-ts="Main">
        <div className="form-container">
          <h1 className="title">The Triangle Type</h1>
          <Formik
            initialValues={{ sideOne: 0, sideTwo: 0, sideThree: 0 }}
            validationSchema={Yup.object().shape({
              sideOne: Yup.number().required("Required"),
              sideTwo: Yup.number().required("Required"),
              sideThree: Yup.number().required("Required")
            })}
            onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
              this.setState(
                {
                  values: values
                },
                () => {
                  this.findsOutTriangleType();
                  setSubmitting(false);
                  resetForm();
                }
              );
            }}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
              } = props;
              return (
                <form data-ts="Form" onSubmit={handleSubmit}>
                  <h4 className="form-title">
                    Please enter the sides of the Triangle
                  </h4>
                  <fieldset>
                    <label
                      className={
                        errors.sideOne && touched.sideOne ? "ts-error" : ""
                      }
                    >
                      <span>Side One</span>
                      <input
                        type="number"
                        name="sideOne"
                        value={values.sideOne}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                    {errors.sideOne &&
                      touched.sideOne && (
                        <dl className="ts-errors">
                          <dt>You must enter a number</dt>
                        </dl>
                      )}
                  </fieldset>

                  <fieldset>
                    <label
                      className={
                        errors.sideTwo && touched.sideTwo ? "ts-error" : ""
                      }
                    >
                      <span>Side One</span>
                      <input
                        type="number"
                        name="sideTwo"
                        value={values.sideTwo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                    {errors.sideTwo &&
                      touched.sideTwo && (
                        <dl className="ts-errors">
                          <dt>You must enter a number</dt>
                        </dl>
                      )}
                  </fieldset>

                  <fieldset>
                    <label
                      className={
                        errors.sideThree && touched.sideThree ? "ts-error" : ""
                      }
                    >
                      <span>Side One</span>
                      <input
                        type="number"
                        name="sideThree"
                        value={values.sideThree}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                    {errors.sideThree &&
                      touched.sideThree && (
                        <dl className="ts-errors">
                          <dt>You must enter a number</dt>
                        </dl>
                      )}
                  </fieldset>

                  <button
                    type="submit"
                    data-ts="Button"
                    disabled={
                      isSubmitting ||
                      (errors.sideOne && touched.sideOne) ||
                      (errors.sideTwo && touched.sideTwo) ||
                      (errors.sideThree && touched.sideThree)
                    }
                    className="ts-primary btn-large has-shadow"
                  >
                    <span>Finds out the Triangle Type</span>
                  </button>
                </form>
              );
            }}
          </Formik>
          <div className="triangle-type">
            <h4 className="triangle-type-text">
              This triangle is {this.state.type}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
