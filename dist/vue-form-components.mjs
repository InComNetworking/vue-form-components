import { openBlock as d, createElementBlock as a, Fragment as h, toDisplayString as n, createCommentVNode as r, withDirectives as c, normalizeClass as b, withKeys as T, vModelDynamic as S, createTextVNode as F, vModelText as I, createElementVNode as p, renderList as g, vModelSelect as C, vModelCheckbox as z, vModelRadio as O } from "vue";
var V = 0, v = {}, x = {};
const m = function(e, i) {
  return i !== void 0 ? x[i] === void 0 ? (x[i] = 0, i) : (x[i]++, i + "-" + x[i]) : e !== void 0 ? v[e] === void 0 ? (v[e] = 0, "form-id-" + e) : (v[e]++, "form-id-" + e + "-" + v[e]) : (V++, "form-id-" + V);
};
const y = (e, i) => {
  const s = e.__vccOpts || e;
  for (const [f, t] of i)
    s[f] = t;
  return s;
};
var w = ["lg", "sm"], D = ["text", "email", "file", "password", "textarea", "color"];
const R = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      validationTimeOut: !1,
      validationStatus: {},
      formId: "",
      text: "",
      inputTypeTag: "input",
      arialabel: void 0,
      describedby: void 0
    };
  },
  props: ["label", "size", "type", "placeholder", "describe", "id", "disabled", "rows", "readonly", "value", "modelValue", "aria-label", "aria-describedby", "autofocus", "validation", "autocomplete"],
  emits: ["focusout", "keyup", "update:modelValue"],
  computed: {
    inputType: function() {
      var e = "text";
      if (this.type != "textarea")
        return this.type && D.indexOf(this.type) !== -1 && (e = this.type), e;
    },
    inputClasses: function() {
      var e = "form-control";
      return this.readonly && (e = "form-control-plaintext"), this.type == "color" && (e = "form-control form-control-color"), this.size && w.indexOf(this.size) !== -1 && (e = e + " form-control-" + this.size), this.validationStatus.valid && (e = e + " is-valid"), this.validationStatus.valid == !1 && (e = e + " is-invalid"), this.$attrs.class && (e = e + " " + this.$attrs.class), e;
    }
  },
  methods: {
    Validate: function() {
      var e = this;
      this.validationTimeOut && clearTimeout(this.validationTimeOut), this.validation && typeof this.validation == "function" && (this.validationTimeOut = setTimeout(function() {
        e.validation(e.text, function(i) {
          e.validationStatus = i;
        });
      }, 300));
    },
    enterPressed: function() {
      this.$refs.input.blur();
    }
  },
  watch: {
    text: function(e) {
      if (console.log("watch:text", e), this.Validate(), e != null)
        return this.$emit("update:modelValue", e);
    }
  },
  updated: function() {
    console.log("updated", this.modelValue), this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue !== void 0 && this.text != this.modelValue && (this.text = this.modelValue);
  },
  created: function() {
    console.log("created", this.modelValue), this.formId = m(this.inputType, this.id), this.text = this.modelValue, this.type == "textarea" && (this.inputTypeTag = "textarea"), this.value && (this.text = this.value), this.ariaLabel && (this.arialabel = this.ariaLabel), this.ariaDescribedby && (this.describedby = this.ariaDescribedby), this.describe && (this.describedby = this.formId + "-described");
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0), this.autofocus && this.$refs.input.focus(), console.log("mounted", this.modelValue);
  }
}, U = ["for"], M = {
  key: 1,
  class: "invalid-feedback"
}, B = {
  key: 2,
  class: "valid-feedback"
}, N = ["id", "placeholder", "aria-describedby", "type", "readonly", "autocomplete", "aria-label"], L = ["id", "placeholder", "aria-describedby", "aria-label", "autocomplete", "rows", "readonly"], P = ["id"];
function E(e, i, s, f, t, o) {
  return d(), a(h, null, [
    s.label ? (d(), a("label", {
      key: 0,
      for: t.formId,
      class: "form-label"
    }, n(s.label), 9, U)) : r("", !0),
    t.validationStatus.valid == !1 && t.validationStatus.message != "" ? (d(), a("div", M, n(t.validationStatus.message), 1)) : r("", !0),
    t.validationStatus.valid && t.validationStatus.message != "" ? (d(), a("div", B, n(t.validationStatus.message), 1)) : r("", !0),
    t.inputTypeTag == "input" ? c((d(), a("input", {
      key: 3,
      id: t.formId,
      ref: "input",
      class: b(o.inputClasses),
      placeholder: s.placeholder,
      "aria-describedby": t.describedby,
      type: o.inputType,
      readonly: s.readonly,
      autocomplete: s.autocomplete,
      "onUpdate:modelValue": i[0] || (i[0] = (l) => t.text = l),
      "aria-label": t.arialabel,
      onFocusout: i[1] || (i[1] = (l) => e.$emit("focusout")),
      onFocus: i[2] || (i[2] = (l) => e.$emit("focus")),
      onKeyup: i[3] || (i[3] = T((...l) => o.enterPressed && o.enterPressed(...l), ["enter"]))
    }, null, 42, N)), [
      [S, t.text]
    ]) : r("", !0),
    F(" /> "),
    t.inputTypeTag == "textarea" ? c((d(), a("textarea", {
      key: 4,
      id: t.formId,
      ref: "input",
      class: b(o.inputClasses),
      placeholder: s.placeholder,
      "aria-describedby": t.describedby,
      "aria-label": t.arialabel,
      autocomplete: s.autocomplete,
      "onUpdate:modelValue": i[4] || (i[4] = (l) => t.text = l),
      rows: s.rows,
      readonly: s.readonly,
      onFocusout: i[5] || (i[5] = (l) => e.$emit("focusout")),
      onFocus: i[6] || (i[6] = (l) => e.$emit("focus"))
    }, null, 42, L)), [
      [I, t.text]
    ]) : r("", !0),
    s.describe ? (d(), a("div", {
      key: 5,
      id: t.formId + "-described",
      class: "form-text"
    }, n(s.describe), 9, P)) : r("", !0)
  ], 64);
}
const ne = /* @__PURE__ */ y(R, [["render", E], ["__scopeId", "data-v-fc7b779f"]]);
var K = ["lg", "sm"];
const j = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: "",
      type: "select"
    };
  },
  props: ["label", "size", "describe", "multiple", "id", "disabled", "readonly", "value", "options", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
    describedby: function() {
      if (this.describe)
        return this.formId + "-described";
    },
    inputClasses: function() {
      var e = "form-select";
      return this.readonly && (e = "form-select-plaintext"), this.type == "color" && (e = "form-select form-select-color"), this.size && K.indexOf(this.size) !== -1 && (e = e + " form-select-" + this.size), e;
    }
  },
  watch: {
    text: function(e) {
      if (e != null)
        return this.$emit("update:modelValue", e);
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue !== void 0 && this.text != this.modelValue && (this.text = this.modelValue);
  },
  created: function() {
    this.formId = m(this.type, this.id), this.text = this.modelValue, this.value && (this.text = this.value);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, q = ["for"], A = ["id", "aria-describedby", "readonly", "multiple"], G = ["value"], H = ["id"];
function J(e, i, s, f, t, o) {
  return d(), a(h, null, [
    s.label ? (d(), a("label", {
      key: 0,
      for: t.formId,
      class: "form-label"
    }, n(s.label), 9, q)) : r("", !0),
    c(p("select", {
      id: t.formId,
      ref: "input",
      class: b(o.inputClasses),
      "aria-describedby": o.describedby,
      readonly: s.readonly,
      "onUpdate:modelValue": i[0] || (i[0] = (l) => t.text = l),
      multiple: s.multiple
    }, [
      (d(!0), a(h, null, g(s.options, (l, u) => (d(), a("option", {
        key: u,
        value: u
      }, n(l), 9, G))), 128))
    ], 10, A), [
      [C, t.text]
    ]),
    s.describe ? (d(), a("div", {
      key: 1,
      id: t.formId + "-described",
      class: "form-text"
    }, n(s.describe), 9, H)) : r("", !0)
  ], 64);
}
const ue = /* @__PURE__ */ y(j, [["render", J]]), Q = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: !1,
      type: "checkbox"
    };
  },
  props: ["label", "id", "disabled", "value", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
    inputClasses: function() {
      var e = "form-check-input";
      return e;
    }
  },
  watch: {
    text: function(e) {
      return this.$emit("update:modelValue", e);
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue ? this.text = !0 : this.text = !1;
  },
  created: function() {
    this.formId = m(this.type, this.id), this.modelValue ? this.text = !0 : this.$emit("update:modelValue", !1), this.value && (this.text = !0);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, W = { class: "form-check" }, X = ["id"], Y = ["for"];
function Z(e, i, s, f, t, o) {
  return d(), a("div", W, [
    c(p("input", {
      id: t.formId,
      ref: "input",
      class: b(o.inputClasses),
      type: "checkbox",
      "onUpdate:modelValue": i[0] || (i[0] = (l) => t.text = l)
    }, null, 10, X), [
      [z, t.text]
    ]),
    s.label ? (d(), a("label", {
      key: 0,
      for: t.formId,
      class: "form-check-label"
    }, n(s.label), 9, Y)) : r("", !0)
  ]);
}
const fe = /* @__PURE__ */ y(Q, [["render", Z]]);
var _ = -1, $ = function() {
  var e = "form-radio";
  return _ == -1 ? (_++, e) : (_++, e + "-" + _);
};
const ee = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      type: "select",
      name: "",
      selected: 0,
      generatedIds: {}
    };
  },
  props: ["id", "disabled", "readonly", "value", "options", "modelValue"],
  emits: ["update:modelValue"],
  computed: {},
  watch: {
    selected: function(e) {
      return this.$emit("update:modelValue", e);
    }
  },
  methods: {
    getRadioId: function(e) {
      return this.generatedIds[e] ? this.generatedIds[e] : (this.generatedIds[e] = m("radio"), this.generatedIds[e]);
    },
    IsDisabled: function(e) {
      if (this.disabled && this.disabled.indexOf && this.disabled.indexOf(e) !== -1)
        return !0;
    }
  },
  updated: function() {
    this.modelValue !== void 0 && this.text != this.modelValue && (this.selected = this.modelValue);
  },
  created: function() {
    this.formId = m(this.type, this.id), this.name = $(), this.selected = this.modelValue, this.value && (this.selected = this.value);
  },
  mounted: function() {
  }
}, te = ["id", "readonly", "value", "name", "disabled"], ie = ["for"];
function se(e, i, s, f, t, o) {
  return d(!0), a(h, null, g(s.options, (l, u) => (d(), a("div", {
    class: "form-check",
    key: u
  }, [
    c(p("input", {
      id: o.getRadioId(u),
      ref_for: !0,
      ref: "input",
      class: "form-check-input",
      readonly: s.readonly,
      "onUpdate:modelValue": i[0] || (i[0] = (k) => t.selected = k),
      value: u,
      name: t.name,
      type: "radio",
      disabled: o.IsDisabled(u)
    }, null, 8, te), [
      [O, t.selected]
    ]),
    p("label", {
      for: o.getRadioId(u),
      class: "form-check-label"
    }, n(l), 9, ie)
  ]))), 128);
}
const ce = /* @__PURE__ */ y(ee, [["render", se]]), le = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: 0,
      type: "range"
    };
  },
  props: ["label", "id", "min", "max", "step", "disabled", "value", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
    inputClasses: function() {
      var e = "form-range";
      return e;
    }
  },
  watch: {
    text: function(e) {
      return e % 1 === 0 ? this.$emit("update:modelValue", parseInt(e)) : this.$emit("update:modelValue", parseFloat(e));
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue && this.text != this.modelValue && (this.text = this.modelValue);
  },
  created: function() {
    this.formId = m(this.type, this.id), this.modelValue && (this.text = this.modelValue), this.value && (this.text = this.value);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, de = ["for"], ae = ["id", "min", "max", "step"];
function oe(e, i, s, f, t, o) {
  return d(), a(h, null, [
    s.label ? (d(), a("label", {
      key: 0,
      for: t.formId,
      class: "form-check-label"
    }, n(s.label), 9, de)) : r("", !0),
    c(p("input", {
      id: t.formId,
      ref: "input",
      class: b(o.inputClasses),
      type: "range",
      "onUpdate:modelValue": i[0] || (i[0] = (l) => t.text = l),
      min: s.min,
      max: s.max,
      step: s.step
    }, null, 10, ae), [
      [I, t.text]
    ])
  ], 64);
}
const me = /* @__PURE__ */ y(le, [["render", oe]]);
export {
  fe as FormCheckbox,
  ne as FormInput,
  ce as FormRadio,
  me as FormRange,
  ue as FormSelect
};
