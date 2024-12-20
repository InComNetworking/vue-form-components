import { openBlock as a, createElementBlock as n, Fragment as h, toDisplayString as o, createCommentVNode as r, withDirectives as c, normalizeClass as b, withKeys as T, vModelDynamic as S, vModelText as I, createElementVNode as p, renderList as k, vModelSelect as F, vModelCheckbox as C, vModelRadio as O } from "vue";
var V = 0, v = {}, x = {};
const m = function(e, t) {
  return t !== void 0 ? x[t] === void 0 ? (x[t] = 0, t) : (x[t]++, t + "-" + x[t]) : e !== void 0 ? v[e] === void 0 ? (v[e] = 0, "form-id-" + e) : (v[e]++, "form-id-" + e + "-" + v[e]) : (V++, "form-id-" + V);
};
const y = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [f, i] of t)
    s[f] = i;
  return s;
};
var z = ["lg", "sm"], w = ["text", "email", "file", "password", "textarea", "color"];
const D = {
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
  emits: ["focusout", "focus", "keyup", "update:modelValue", "keyup.enter"],
  computed: {
    inputType: function() {
      var e = "text";
      if (this.type != "textarea")
        return this.type && w.indexOf(this.type) !== -1 && (e = this.type), e;
    },
    inputClasses: function() {
      var e = "form-control";
      return this.readonly && (e = "form-control-plaintext"), this.type == "color" && (e = "form-control form-control-color"), this.size && z.indexOf(this.size) !== -1 && (e = e + " form-control-" + this.size), this.validationStatus.valid && (e = e + " is-valid"), this.validationStatus.valid == !1 && (e = e + " is-invalid"), this.$attrs.class && (e = e + " " + this.$attrs.class), e;
    }
  },
  methods: {
    focusOut: function() {
      this.Validate(), this.$emit("focusout");
    },
    Validate: function() {
      var e = this;
      this.validationTimeOut && clearTimeout(this.validationTimeOut), this.validation && typeof this.validation == "function" && (this.validationTimeOut = setTimeout(function() {
        e.validation(e.text, function(t) {
          e.validationStatus = t;
        });
      }, 300)), this.validation && (e.validationStatus = this.validation);
    },
    keyup: function(e) {
      this.$emit("keyup", e);
    },
    enterPressed: function(e) {
      this.$emit("keyup.enter", e), this.$refs.input.blur();
    }
  },
  watch: {
    validation: function() {
      this.validation && typeof this.validation == "function" || (this.validationStatus = this.validation);
    },
    text: function(e) {
      if (this.Validate(), e != null)
        return this.$emit("update:modelValue", e);
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue !== void 0 && this.text != this.modelValue && (this.text = this.modelValue);
  },
  created: function() {
    this.formId = m(this.inputType, this.id), this.text = this.modelValue, this.type == "textarea" && (this.inputTypeTag = "textarea"), this.value && (this.text = this.value), this.ariaLabel && (this.arialabel = this.ariaLabel), this.ariaDescribedby && (this.describedby = this.ariaDescribedby), this.describe && (this.describedby = this.formId + "-described");
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0), this.autofocus && this.$refs.input.focus();
  }
}, R = ["for"], U = {
  key: 1,
  class: "invalid-feedback"
}, M = {
  key: 2,
  class: "valid-feedback"
}, B = ["id", "placeholder", "aria-describedby", "type", "readonly", "autocomplete", "aria-label"], K = ["id", "placeholder", "aria-describedby", "aria-label", "autocomplete", "rows", "readonly"], L = ["id"];
function N(e, t, s, f, i, d) {
  return a(), n(h, null, [
    s.label ? (a(), n("label", {
      key: 0,
      for: i.formId,
      class: "form-label"
    }, o(s.label), 9, R)) : r("", !0),
    i.validationStatus.valid == !1 && i.validationStatus.message != "" ? (a(), n("div", U, o(i.validationStatus.message), 1)) : r("", !0),
    i.validationStatus.valid && i.validationStatus.message != "" ? (a(), n("div", M, o(i.validationStatus.message), 1)) : r("", !0),
    i.inputTypeTag == "input" ? c((a(), n("input", {
      key: 3,
      id: i.formId,
      ref: "input",
      class: b(d.inputClasses),
      placeholder: s.placeholder,
      "aria-describedby": i.describedby,
      type: d.inputType,
      readonly: s.readonly,
      autocomplete: s.autocomplete,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => i.text = l),
      "aria-label": i.arialabel,
      onFocusout: t[1] || (t[1] = (l) => d.focusOut()),
      onFocus: t[2] || (t[2] = (l) => e.$emit("focus")),
      onKeyup: [
        t[3] || (t[3] = T((...l) => d.enterPressed && d.enterPressed(...l), ["enter"])),
        t[4] || (t[4] = (...l) => d.keyup && d.keyup(...l))
      ]
    }, null, 42, B)), [
      [S, i.text]
    ]) : r("", !0),
    i.inputTypeTag == "textarea" ? c((a(), n("textarea", {
      key: 4,
      id: i.formId,
      ref: "input",
      class: b(d.inputClasses),
      placeholder: s.placeholder,
      "aria-describedby": i.describedby,
      "aria-label": i.arialabel,
      autocomplete: s.autocomplete,
      "onUpdate:modelValue": t[5] || (t[5] = (l) => i.text = l),
      rows: s.rows,
      readonly: s.readonly,
      onFocusout: t[6] || (t[6] = (l) => d.focusOut()),
      onFocus: t[7] || (t[7] = (l) => e.$emit("focus")),
      onKeyup: t[8] || (t[8] = (l) => e.$emit("keyup"))
    }, null, 42, K)), [
      [I, i.text]
    ]) : r("", !0),
    s.describe ? (a(), n("div", {
      key: 5,
      id: i.formId + "-described",
      class: "form-text"
    }, o(s.describe), 9, L)) : r("", !0)
  ], 64);
}
const re = /* @__PURE__ */ y(D, [["render", N], ["__scopeId", "data-v-b84529f3"]]);
var P = ["lg", "sm"];
const E = {
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
      if (!!this.describe)
        return this.formId + "-described";
    },
    inputClasses: function() {
      var e = "form-select";
      return this.readonly && (e = "form-select-plaintext"), this.type == "color" && (e = "form-select form-select-color"), this.size && P.indexOf(this.size) !== -1 && (e = e + " form-select-" + this.size), e;
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
}, j = ["for"], q = ["id", "aria-describedby", "readonly", "multiple"], A = ["value"], G = ["id"];
function H(e, t, s, f, i, d) {
  return a(), n(h, null, [
    s.label ? (a(), n("label", {
      key: 0,
      for: i.formId,
      class: "form-label"
    }, o(s.label), 9, j)) : r("", !0),
    c(p("select", {
      id: i.formId,
      ref: "input",
      class: b(d.inputClasses),
      "aria-describedby": d.describedby,
      readonly: s.readonly,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => i.text = l),
      multiple: s.multiple
    }, [
      (a(!0), n(h, null, k(s.options, (l, u) => (a(), n("option", {
        key: u,
        value: u
      }, o(l), 9, A))), 128))
    ], 10, q), [
      [F, i.text]
    ]),
    s.describe ? (a(), n("div", {
      key: 1,
      id: i.formId + "-described",
      class: "form-text"
    }, o(s.describe), 9, G)) : r("", !0)
  ], 64);
}
const oe = /* @__PURE__ */ y(E, [["render", H]]), J = {
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
}, Q = { class: "form-check" }, W = ["id"], X = ["for"];
function Y(e, t, s, f, i, d) {
  return a(), n("div", Q, [
    c(p("input", {
      id: i.formId,
      ref: "input",
      class: b(d.inputClasses),
      type: "checkbox",
      "onUpdate:modelValue": t[0] || (t[0] = (l) => i.text = l)
    }, null, 10, W), [
      [C, i.text]
    ]),
    s.label ? (a(), n("label", {
      key: 0,
      for: i.formId,
      class: "form-check-label"
    }, o(s.label), 9, X)) : r("", !0)
  ]);
}
const ue = /* @__PURE__ */ y(J, [["render", Y]]);
var _ = -1, Z = function() {
  var e = "form-radio";
  return _ == -1 ? (_++, e) : (_++, e + "-" + _);
};
const $ = {
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
      if (!!this.disabled && !!this.disabled.indexOf && this.disabled.indexOf(e) !== -1)
        return !0;
    }
  },
  updated: function() {
    this.modelValue !== void 0 && this.text != this.modelValue && (this.selected = this.modelValue);
  },
  created: function() {
    this.formId = m(this.type, this.id), this.name = Z(), this.selected = this.modelValue, this.value && (this.selected = this.value);
  },
  mounted: function() {
  }
}, ee = ["id", "readonly", "value", "name", "disabled"], te = ["for"];
function ie(e, t, s, f, i, d) {
  return a(!0), n(h, null, k(s.options, (l, u) => (a(), n("div", {
    class: "form-check",
    key: u
  }, [
    c(p("input", {
      id: d.getRadioId(u),
      ref_for: !0,
      ref: "input",
      class: "form-check-input",
      readonly: s.readonly,
      "onUpdate:modelValue": t[0] || (t[0] = (g) => i.selected = g),
      value: u,
      name: i.name,
      type: "radio",
      disabled: d.IsDisabled(u)
    }, null, 8, ee), [
      [O, i.selected]
    ]),
    p("label", {
      for: d.getRadioId(u),
      class: "form-check-label"
    }, o(l), 9, te)
  ]))), 128);
}
const fe = /* @__PURE__ */ y($, [["render", ie]]), se = {
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
}, le = ["for"], de = ["id", "min", "max", "step"];
function ae(e, t, s, f, i, d) {
  return a(), n(h, null, [
    s.label ? (a(), n("label", {
      key: 0,
      for: i.formId,
      class: "form-check-label"
    }, o(s.label), 9, le)) : r("", !0),
    c(p("input", {
      id: i.formId,
      ref: "input",
      class: b(d.inputClasses),
      type: "range",
      "onUpdate:modelValue": t[0] || (t[0] = (l) => i.text = l),
      min: s.min,
      max: s.max,
      step: s.step
    }, null, 10, de), [
      [I, i.text]
    ])
  ], 64);
}
const ce = /* @__PURE__ */ y(se, [["render", ae]]);
export {
  ue as FormCheckbox,
  re as FormInput,
  fe as FormRadio,
  ce as FormRange,
  oe as FormSelect
};
