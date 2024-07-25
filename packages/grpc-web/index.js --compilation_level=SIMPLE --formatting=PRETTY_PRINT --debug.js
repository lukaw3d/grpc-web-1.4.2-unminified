/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function $$jscomp$arrayIteratorImpl$($array$$) {
  var $index$$ = 0;
  return function() {
    return $index$$ < $array$$.length ? {done:!1, value:$array$$[$index$$++]} : {done:!0};
  };
};
$jscomp.arrayIterator = function $$jscomp$arrayIterator$($array$$) {
  return {next:$jscomp.arrayIteratorImpl($array$$)};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$$, $property$$, $descriptor$$) {
  $target$$ != Array.prototype && $target$$ != Object.prototype && ($target$$[$property$$] = $descriptor$$.value);
};
$jscomp.getGlobal = function $$jscomp$getGlobal$($passedInThis_possibleGlobals$$) {
  $passedInThis_possibleGlobals$$ = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, $passedInThis_possibleGlobals$$];
  for (var $i$$ = 0; $i$$ < $passedInThis_possibleGlobals$$.length; ++$i$$) {
    var $maybeGlobal$$ = $passedInThis_possibleGlobals$$[$i$$];
    if ($maybeGlobal$$ && $maybeGlobal$$.Math == Math) {
      return $maybeGlobal$$;
    }
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function $$jscomp$initSymbol$() {
  $jscomp.initSymbol = function $$jscomp$initSymbol$() {
  };
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function $$jscomp$SymbolClass$($id$$, $opt_description$$) {
  this.$jscomp$symbol$id_ = $id$$;
  $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:$opt_description$$});
};
$jscomp.SymbolClass.prototype.toString = function $$jscomp$SymbolClass$$toString$() {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = function() {
  function $Symbol$$($opt_description$$) {
    if (this instanceof $Symbol$$) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + ($opt_description$$ || "") + "_" + $counter$$++, $opt_description$$);
  }
  var $counter$$ = 0;
  return $Symbol$$;
}();
$jscomp.initSymbolIterator = function $$jscomp$initSymbolIterator$() {
  $jscomp.initSymbol();
  var $symbolIterator$$ = $jscomp.global.Symbol.iterator;
  $symbolIterator$$ || ($symbolIterator$$ = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[$symbolIterator$$] && $jscomp.defineProperty(Array.prototype, $symbolIterator$$, {configurable:!0, writable:!0, value:function() {
    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
  }});
  $jscomp.initSymbolIterator = function $$jscomp$initSymbolIterator$() {
  };
};
$jscomp.initSymbolAsyncIterator = function $$jscomp$initSymbolAsyncIterator$() {
  $jscomp.initSymbol();
  var $symbolAsyncIterator$$ = $jscomp.global.Symbol.asyncIterator;
  $symbolAsyncIterator$$ || ($symbolAsyncIterator$$ = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function $$jscomp$initSymbolAsyncIterator$() {
  };
};
$jscomp.iteratorPrototype = function $$jscomp$iteratorPrototype$($iterator$$) {
  $jscomp.initSymbolIterator();
  $iterator$$ = {next:$iterator$$};
  $iterator$$[$jscomp.global.Symbol.iterator] = function $$iterator$$$$jscomp$global$Symbol$iterator$() {
    return this;
  };
  return $iterator$$;
};
$jscomp.makeIterator = function $$jscomp$makeIterator$($iterable$$) {
  var $iteratorFunction$$ = "undefined" != typeof Symbol && Symbol.iterator && $iterable$$[Symbol.iterator];
  return $iteratorFunction$$ ? $iteratorFunction$$.call($iterable$$) : $jscomp.arrayIterator($iterable$$);
};
$jscomp.arrayFromIterator = function $$jscomp$arrayFromIterator$($iterator$$) {
  for (var $i$$, $arr$$ = []; !($i$$ = $iterator$$.next()).done;) {
    $arr$$.push($i$$.value);
  }
  return $arr$$;
};
$jscomp.arrayFromIterable = function $$jscomp$arrayFromIterable$($iterable$$) {
  return $iterable$$ instanceof Array ? $iterable$$ : $jscomp.arrayFromIterator($jscomp.makeIterator($iterable$$));
};
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function($prototype$$) {
  var $ctor$$ = function $$ctor$$$() {
  };
  $ctor$$.prototype = $prototype$$;
  return new $ctor$$;
};
$jscomp.underscoreProtoCanBeSet = function $$jscomp$underscoreProtoCanBeSet$() {
  var $x$$ = {a:!0}, $y$$ = {};
  try {
    return $y$$.__proto__ = $x$$, $y$$.a;
  } catch ($e$$) {
  }
  return !1;
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function($target$$, $proto$$) {
  $target$$.__proto__ = $proto$$;
  if ($target$$.__proto__ !== $proto$$) {
    throw new TypeError($target$$ + " is not extensible");
  }
  return $target$$;
} : null;
$jscomp.inherits = function $$jscomp$inherits$($childCtor$$, $parentCtor$$) {
  $childCtor$$.prototype = $jscomp.objectCreate($parentCtor$$.prototype);
  $childCtor$$.prototype.constructor = $childCtor$$;
  if ($jscomp.setPrototypeOf) {
    var $p_setPrototypeOf$$ = $jscomp.setPrototypeOf;
    $p_setPrototypeOf$$($childCtor$$, $parentCtor$$);
  } else {
    for ($p_setPrototypeOf$$ in $parentCtor$$) {
      if ("prototype" != $p_setPrototypeOf$$) {
        if (Object.defineProperties) {
          var $descriptor$$ = Object.getOwnPropertyDescriptor($parentCtor$$, $p_setPrototypeOf$$);
          $descriptor$$ && Object.defineProperty($childCtor$$, $p_setPrototypeOf$$, $descriptor$$);
        } else {
          $childCtor$$[$p_setPrototypeOf$$] = $parentCtor$$[$p_setPrototypeOf$$];
        }
      }
    }
  }
  $childCtor$$.superClass_ = $parentCtor$$.prototype;
};
$jscomp.iteratorFromArray = function $$jscomp$iteratorFromArray$($array$$, $transform$$) {
  $jscomp.initSymbolIterator();
  $array$$ instanceof String && ($array$$ += "");
  var $i$$ = 0, $iter$$ = {next:function() {
    if ($i$$ < $array$$.length) {
      var $index$$ = $i$$++;
      return {value:$transform$$($index$$, $array$$[$index$$]), done:!1};
    }
    $iter$$.next = function $$iter$$$next$() {
      return {done:!0, value:void 0};
    };
    return $iter$$.next();
  }};
  $iter$$[Symbol.iterator] = function $$iter$$$Symbol$iterator$() {
    return $iter$$;
  };
  return $iter$$;
};
$jscomp.polyfill = function $$jscomp$polyfill$($property$jscomp$5_split_target$$, $impl_polyfill$$, $fromLang_obj$$, $i$$) {
  if ($impl_polyfill$$) {
    $fromLang_obj$$ = $jscomp.global;
    $property$jscomp$5_split_target$$ = $property$jscomp$5_split_target$$.split(".");
    for ($i$$ = 0; $i$$ < $property$jscomp$5_split_target$$.length - 1; $i$$++) {
      var $key$$ = $property$jscomp$5_split_target$$[$i$$];
      $key$$ in $fromLang_obj$$ || ($fromLang_obj$$[$key$$] = {});
      $fromLang_obj$$ = $fromLang_obj$$[$key$$];
    }
    $property$jscomp$5_split_target$$ = $property$jscomp$5_split_target$$[$property$jscomp$5_split_target$$.length - 1];
    $i$$ = $fromLang_obj$$[$property$jscomp$5_split_target$$];
    $impl_polyfill$$ = $impl_polyfill$$($i$$);
    $impl_polyfill$$ != $i$$ && null != $impl_polyfill$$ && $jscomp.defineProperty($fromLang_obj$$, $property$jscomp$5_split_target$$, {configurable:!0, writable:!0, value:$impl_polyfill$$});
  }
};
$jscomp.polyfill("Array.prototype.keys", function($orig$$) {
  return $orig$$ ? $orig$$ : function() {
    return $jscomp.iteratorFromArray(this, function($i$$) {
      return $i$$;
    });
  };
}, "es6", "es3");
$jscomp.checkEs6ConformanceViaProxy = function $$jscomp$checkEs6ConformanceViaProxy$() {
  try {
    var $proxied$$ = {}, $proxy$$ = Object.create(new $jscomp.global.Proxy($proxied$$, {get:function($target$$, $key$$, $receiver$$) {
      return $target$$ == $proxied$$ && "q" == $key$$ && $receiver$$ == $proxy$$;
    }}));
    return !0 === $proxy$$.q;
  } catch ($err$$) {
    return !1;
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.owns = function $$jscomp$owns$($obj$$, $prop$$) {
  return Object.prototype.hasOwnProperty.call($obj$$, $prop$$);
};
$jscomp.polyfill("WeakMap", function($NativeWeakMap$$) {
  function $isConformant$$() {
    if (!$NativeWeakMap$$ || !Object.seal) {
      return !1;
    }
    try {
      var $x$$ = Object.seal({}), $y$$ = Object.seal({}), $map$$ = new $NativeWeakMap$$([[$x$$, 2], [$y$$, 3]]);
      if (2 != $map$$.get($x$$) || 3 != $map$$.get($y$$)) {
        return !1;
      }
      $map$$.delete($x$$);
      $map$$.set($y$$, 4);
      return !$map$$.has($x$$) && 4 == $map$$.get($y$$);
    } catch ($err$$) {
      return !1;
    }
  }
  function $WeakMapMembership$$() {
  }
  function $isValidKey$$($key$$) {
    var $type$$ = typeof $key$$;
    return "object" === $type$$ && null !== $key$$ || "function" === $type$$;
  }
  function $insert$$($target$$) {
    if (!$jscomp.owns($target$$, $prop$$)) {
      var $obj$$ = new $WeakMapMembership$$;
      $jscomp.defineProperty($target$$, $prop$$, {value:$obj$$});
    }
  }
  function $patch$$($name$$) {
    var $prev$$ = Object[$name$$];
    $prev$$ && (Object[$name$$] = function $Object$$name$$$($target$$) {
      if ($target$$ instanceof $WeakMapMembership$$) {
        return $target$$;
      }
      $insert$$($target$$);
      return $prev$$($target$$);
    });
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if ($NativeWeakMap$$ && $jscomp.ES6_CONFORMANCE) {
      return $NativeWeakMap$$;
    }
  } else {
    if ($isConformant$$()) {
      return $NativeWeakMap$$;
    }
  }
  var $prop$$ = "$jscomp_hidden_" + Math.random();
  $patch$$("freeze");
  $patch$$("preventExtensions");
  $patch$$("seal");
  var $index$$ = 0, $PolyfillWeakMap$$ = function $$PolyfillWeakMap$$$($iter$jscomp$2_opt_iterable$$) {
    this.id_ = ($index$$ += Math.random() + 1).toString();
    if ($iter$jscomp$2_opt_iterable$$) {
      $iter$jscomp$2_opt_iterable$$ = $jscomp.makeIterator($iter$jscomp$2_opt_iterable$$);
      for (var $entry_item$$; !($entry_item$$ = $iter$jscomp$2_opt_iterable$$.next()).done;) {
        $entry_item$$ = $entry_item$$.value, this.set($entry_item$$[0], $entry_item$$[1]);
      }
    }
  };
  $PolyfillWeakMap$$.prototype.set = function $$PolyfillWeakMap$$$$set$($key$$, $value$$) {
    if (!$isValidKey$$($key$$)) {
      throw Error("Invalid WeakMap key");
    }
    $insert$$($key$$);
    if (!$jscomp.owns($key$$, $prop$$)) {
      throw Error("WeakMap key fail: " + $key$$);
    }
    $key$$[$prop$$][this.id_] = $value$$;
    return this;
  };
  $PolyfillWeakMap$$.prototype.get = function $$PolyfillWeakMap$$$$get$($key$$) {
    return $isValidKey$$($key$$) && $jscomp.owns($key$$, $prop$$) ? $key$$[$prop$$][this.id_] : void 0;
  };
  $PolyfillWeakMap$$.prototype.has = function $$PolyfillWeakMap$$$$has$($key$$) {
    return $isValidKey$$($key$$) && $jscomp.owns($key$$, $prop$$) && $jscomp.owns($key$$[$prop$$], this.id_);
  };
  $PolyfillWeakMap$$.prototype.delete = function $$PolyfillWeakMap$$$$delete$($key$$) {
    return $isValidKey$$($key$$) && $jscomp.owns($key$$, $prop$$) && $jscomp.owns($key$$[$prop$$], this.id_) ? delete $key$$[$prop$$][this.id_] : !1;
  };
  return $PolyfillWeakMap$$;
}, "es6", "es3");
$jscomp.MapEntry = function $$jscomp$MapEntry$() {
};
$jscomp.polyfill("Map", function($NativeMap$$) {
  function $isConformant$$() {
    if ($jscomp.ASSUME_NO_NATIVE_MAP || !$NativeMap$$ || "function" != typeof $NativeMap$$ || !$NativeMap$$.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var $key$$ = Object.seal({x:4}), $map$$ = new $NativeMap$$($jscomp.makeIterator([[$key$$, "s"]]));
      if ("s" != $map$$.get($key$$) || 1 != $map$$.size || $map$$.get({x:4}) || $map$$.set({x:4}, "t") != $map$$ || 2 != $map$$.size) {
        return !1;
      }
      var $iter$$ = $map$$.entries(), $item$$ = $iter$$.next();
      if ($item$$.done || $item$$.value[0] != $key$$ || "s" != $item$$.value[1]) {
        return !1;
      }
      $item$$ = $iter$$.next();
      return $item$$.done || 4 != $item$$.value[0].x || "t" != $item$$.value[1] || !$iter$$.next().done ? !1 : !0;
    } catch ($err$$) {
      return !1;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if ($NativeMap$$ && $jscomp.ES6_CONFORMANCE) {
      return $NativeMap$$;
    }
  } else {
    if ($isConformant$$()) {
      return $NativeMap$$;
    }
  }
  $jscomp.initSymbolIterator();
  var $idMap$$ = new WeakMap, $PolyfillMap$$ = function $$PolyfillMap$$$($iter$jscomp$4_opt_iterable$$) {
    this.data_ = {};
    this.head_ = $createHead$$();
    this.size = 0;
    if ($iter$jscomp$4_opt_iterable$$) {
      $iter$jscomp$4_opt_iterable$$ = $jscomp.makeIterator($iter$jscomp$4_opt_iterable$$);
      for (var $entry$jscomp$1_item$$; !($entry$jscomp$1_item$$ = $iter$jscomp$4_opt_iterable$$.next()).done;) {
        $entry$jscomp$1_item$$ = $entry$jscomp$1_item$$.value, this.set($entry$jscomp$1_item$$[0], $entry$jscomp$1_item$$[1]);
      }
    }
  };
  $PolyfillMap$$.prototype.set = function $$PolyfillMap$$$$set$($key$$, $value$$) {
    $key$$ = 0 === $key$$ ? 0 : $key$$;
    var $r$$ = $maybeGetEntry$$(this, $key$$);
    $r$$.list || ($r$$.list = this.data_[$r$$.id] = []);
    $r$$.entry ? $r$$.entry.value = $value$$ : ($r$$.entry = {next:this.head_, previous:this.head_.previous, head:this.head_, key:$key$$, value:$value$$}, $r$$.list.push($r$$.entry), this.head_.previous.next = $r$$.entry, this.head_.previous = $r$$.entry, this.size++);
    return this;
  };
  $PolyfillMap$$.prototype.delete = function $$PolyfillMap$$$$delete$($key$jscomp$46_r$$) {
    $key$jscomp$46_r$$ = $maybeGetEntry$$(this, $key$jscomp$46_r$$);
    return $key$jscomp$46_r$$.entry && $key$jscomp$46_r$$.list ? ($key$jscomp$46_r$$.list.splice($key$jscomp$46_r$$.index, 1), $key$jscomp$46_r$$.list.length || delete this.data_[$key$jscomp$46_r$$.id], $key$jscomp$46_r$$.entry.previous.next = $key$jscomp$46_r$$.entry.next, $key$jscomp$46_r$$.entry.next.previous = $key$jscomp$46_r$$.entry.previous, $key$jscomp$46_r$$.entry.head = null, this.size--, !0) : !1;
  };
  $PolyfillMap$$.prototype.clear = function $$PolyfillMap$$$$clear$() {
    this.data_ = {};
    this.head_ = this.head_.previous = $createHead$$();
    this.size = 0;
  };
  $PolyfillMap$$.prototype.has = function $$PolyfillMap$$$$has$($key$$) {
    return !!$maybeGetEntry$$(this, $key$$).entry;
  };
  $PolyfillMap$$.prototype.get = function $$PolyfillMap$$$$get$($entry$jscomp$2_key$$) {
    return ($entry$jscomp$2_key$$ = $maybeGetEntry$$(this, $entry$jscomp$2_key$$).entry) && $entry$jscomp$2_key$$.value;
  };
  $PolyfillMap$$.prototype.entries = function $$PolyfillMap$$$$entries$() {
    return $makeIterator$$(this, function($entry$$) {
      return [$entry$$.key, $entry$$.value];
    });
  };
  $PolyfillMap$$.prototype.keys = function $$PolyfillMap$$$$keys$() {
    return $makeIterator$$(this, function($entry$$) {
      return $entry$$.key;
    });
  };
  $PolyfillMap$$.prototype.values = function $$PolyfillMap$$$$values$() {
    return $makeIterator$$(this, function($entry$$) {
      return $entry$$.value;
    });
  };
  $PolyfillMap$$.prototype.forEach = function $$PolyfillMap$$$$forEach$($callback$$, $opt_thisArg$$) {
    for (var $iter$$ = this.entries(), $entry$jscomp$6_item$$; !($entry$jscomp$6_item$$ = $iter$$.next()).done;) {
      $entry$jscomp$6_item$$ = $entry$jscomp$6_item$$.value, $callback$$.call($opt_thisArg$$, $entry$jscomp$6_item$$[1], $entry$jscomp$6_item$$[0], this);
    }
  };
  $PolyfillMap$$.prototype[Symbol.iterator] = $PolyfillMap$$.prototype.entries;
  var $maybeGetEntry$$ = function $$maybeGetEntry$$$($index$jscomp$69_map$$, $key$$) {
    var $id$jscomp$6_id$jscomp$inline_43_type$$ = $key$$ && typeof $key$$;
    "object" == $id$jscomp$6_id$jscomp$inline_43_type$$ || "function" == $id$jscomp$6_id$jscomp$inline_43_type$$ ? $idMap$$.has($key$$) ? $id$jscomp$6_id$jscomp$inline_43_type$$ = $idMap$$.get($key$$) : ($id$jscomp$6_id$jscomp$inline_43_type$$ = "" + ++$mapIndex$$, $idMap$$.set($key$$, $id$jscomp$6_id$jscomp$inline_43_type$$)) : $id$jscomp$6_id$jscomp$inline_43_type$$ = "p_" + $key$$;
    var $list$$ = $index$jscomp$69_map$$.data_[$id$jscomp$6_id$jscomp$inline_43_type$$];
    if ($list$$ && $jscomp.owns($index$jscomp$69_map$$.data_, $id$jscomp$6_id$jscomp$inline_43_type$$)) {
      for ($index$jscomp$69_map$$ = 0; $index$jscomp$69_map$$ < $list$$.length; $index$jscomp$69_map$$++) {
        var $entry$$ = $list$$[$index$jscomp$69_map$$];
        if ($key$$ !== $key$$ && $entry$$.key !== $entry$$.key || $key$$ === $entry$$.key) {
          return {id:$id$jscomp$6_id$jscomp$inline_43_type$$, list:$list$$, index:$index$jscomp$69_map$$, entry:$entry$$};
        }
      }
    }
    return {id:$id$jscomp$6_id$jscomp$inline_43_type$$, list:$list$$, index:-1, entry:void 0};
  }, $makeIterator$$ = function $$makeIterator$$$($map$$, $func$$) {
    var $entry$$ = $map$$.head_;
    return $jscomp.iteratorPrototype(function() {
      if ($entry$$) {
        for (; $entry$$.head != $map$$.head_;) {
          $entry$$ = $entry$$.previous;
        }
        for (; $entry$$.next != $entry$$.head;) {
          return $entry$$ = $entry$$.next, {done:!1, value:$func$$($entry$$)};
        }
        $entry$$ = null;
      }
      return {done:!0, value:void 0};
    });
  }, $createHead$$ = function $$createHead$$$() {
    var $head$$ = {};
    return $head$$.previous = $head$$.next = $head$$.head = $head$$;
  }, $mapIndex$$ = 0;
  return $PolyfillMap$$;
}, "es6", "es3");
$jscomp.findInternal = function $$jscomp$findInternal$($array$$, $callback$$, $thisArg$$) {
  $array$$ instanceof String && ($array$$ = String($array$$));
  for (var $len$$ = $array$$.length, $i$$ = 0; $i$$ < $len$$; $i$$++) {
    var $value$$ = $array$$[$i$$];
    if ($callback$$.call($thisArg$$, $value$$, $i$$, $array$$)) {
      return {i:$i$$, v:$value$$};
    }
  }
  return {i:-1, v:void 0};
};
$jscomp.polyfill("Array.prototype.find", function($orig$$) {
  return $orig$$ ? $orig$$ : function($callback$$, $opt_thisArg$$) {
    return $jscomp.findInternal(this, $callback$$, $opt_thisArg$$).v;
  };
}, "es6", "es3");
$jscomp.checkStringArgs = function $$jscomp$checkStringArgs$($thisArg$$, $arg$$, $func$$) {
  if (null == $thisArg$$) {
    throw new TypeError("The 'this' value for String.prototype." + $func$$ + " must not be null or undefined");
  }
  if ($arg$$ instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + $func$$ + " must not be a regular expression");
  }
  return $thisArg$$ + "";
};
$jscomp.polyfill("String.prototype.endsWith", function($orig$$) {
  return $orig$$ ? $orig$$ : function($searchString$$, $i$jscomp$9_opt_position$$) {
    var $string$$ = $jscomp.checkStringArgs(this, $searchString$$, "endsWith");
    $searchString$$ += "";
    void 0 === $i$jscomp$9_opt_position$$ && ($i$jscomp$9_opt_position$$ = $string$$.length);
    $i$jscomp$9_opt_position$$ = Math.max(0, Math.min($i$jscomp$9_opt_position$$ | 0, $string$$.length));
    for (var $j$$ = $searchString$$.length; 0 < $j$$ && 0 < $i$jscomp$9_opt_position$$;) {
      if ($string$$[--$i$jscomp$9_opt_position$$] != $searchString$$[--$j$$]) {
        return !1;
      }
    }
    return 0 >= $j$$;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function($orig$$) {
  return $orig$$ ? $orig$$ : function($searchString$$, $i$jscomp$10_opt_position$$) {
    var $string$$ = $jscomp.checkStringArgs(this, $searchString$$, "startsWith");
    $searchString$$ += "";
    var $strLen$$ = $string$$.length, $searchLen$$ = $searchString$$.length;
    $i$jscomp$10_opt_position$$ = Math.max(0, Math.min($i$jscomp$10_opt_position$$ | 0, $string$$.length));
    for (var $j$$ = 0; $j$$ < $searchLen$$ && $i$jscomp$10_opt_position$$ < $strLen$$;) {
      if ($string$$[$i$jscomp$10_opt_position$$++] != $searchString$$[$j$$++]) {
        return !1;
      }
    }
    return $j$$ >= $searchLen$$;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.repeat", function($orig$$) {
  return $orig$$ ? $orig$$ : function($copies$$) {
    var $string$$ = $jscomp.checkStringArgs(this, null, "repeat");
    if (0 > $copies$$ || 1342177279 < $copies$$) {
      throw new RangeError("Invalid count value");
    }
    $copies$$ |= 0;
    for (var $result$$ = ""; $copies$$;) {
      if ($copies$$ & 1 && ($result$$ += $string$$), $copies$$ >>>= 1) {
        $string$$ += $string$$;
      }
    }
    return $result$$;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.trimLeft", function($orig$$) {
  function $polyfill$$() {
    return this.replace(/^[\s\xa0]+/, "");
  }
  return $orig$$ || $polyfill$$;
}, "es_2019", "es3");
$jscomp.polyfill("Array.prototype.entries", function($orig$$) {
  return $orig$$ ? $orig$$ : function() {
    return $jscomp.iteratorFromArray(this, function($i$$, $v$$) {
      return [$i$$, $v$$];
    });
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function($orig$$) {
  return $orig$$ ? $orig$$ : function($arrayLike$$, $opt_mapFn$$, $opt_thisArg$$) {
    $opt_mapFn$$ = null != $opt_mapFn$$ ? $opt_mapFn$$ : function($x$$) {
      return $x$$;
    };
    var $result$$ = [], $iteratorFunction$jscomp$1_len$jscomp$1_next$$ = "undefined" != typeof Symbol && Symbol.iterator && $arrayLike$$[Symbol.iterator];
    if ("function" == typeof $iteratorFunction$jscomp$1_len$jscomp$1_next$$) {
      $arrayLike$$ = $iteratorFunction$jscomp$1_len$jscomp$1_next$$.call($arrayLike$$);
      for (var $i$$ = 0; !($iteratorFunction$jscomp$1_len$jscomp$1_next$$ = $arrayLike$$.next()).done;) {
        $result$$.push($opt_mapFn$$.call($opt_thisArg$$, $iteratorFunction$jscomp$1_len$jscomp$1_next$$.value, $i$$++));
      }
    } else {
      for ($iteratorFunction$jscomp$1_len$jscomp$1_next$$ = $arrayLike$$.length, $i$$ = 0; $i$$ < $iteratorFunction$jscomp$1_len$jscomp$1_next$$; $i$$++) {
        $result$$.push($opt_mapFn$$.call($opt_thisArg$$, $arrayLike$$[$i$$], $i$$));
      }
    }
    return $result$$;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.values", function($orig$$) {
  return $orig$$ ? $orig$$ : function() {
    return $jscomp.iteratorFromArray(this, function($k$$, $v$$) {
      return $v$$;
    });
  };
}, "es8", "es3");
$jscomp.polyfill("Object.is", function($orig$$) {
  return $orig$$ ? $orig$$ : function($left$$, $right$$) {
    return $left$$ === $right$$ ? 0 !== $left$$ || 1 / $left$$ === 1 / $right$$ : $left$$ !== $left$$ && $right$$ !== $right$$;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function($orig$$) {
  return $orig$$ ? $orig$$ : function($searchElement$$, $i$jscomp$13_opt_fromIndex$$) {
    var $array$$ = this;
    $array$$ instanceof String && ($array$$ = String($array$$));
    var $len$$ = $array$$.length;
    $i$jscomp$13_opt_fromIndex$$ = $i$jscomp$13_opt_fromIndex$$ || 0;
    for (0 > $i$jscomp$13_opt_fromIndex$$ && ($i$jscomp$13_opt_fromIndex$$ = Math.max($i$jscomp$13_opt_fromIndex$$ + $len$$, 0)); $i$jscomp$13_opt_fromIndex$$ < $len$$; $i$jscomp$13_opt_fromIndex$$++) {
      var $element$$ = $array$$[$i$jscomp$13_opt_fromIndex$$];
      if ($element$$ === $searchElement$$ || Object.is($element$$, $searchElement$$)) {
        return !0;
      }
    }
    return !1;
  };
}, "es7", "es3");
$jscomp.polyfill("String.prototype.includes", function($orig$$) {
  return $orig$$ ? $orig$$ : function($searchString$$, $opt_position$$) {
    return -1 !== $jscomp.checkStringArgs(this, $searchString$$, "includes").indexOf($searchString$$, $opt_position$$ || 0);
  };
}, "es6", "es3");
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function($NativePromise$$) {
  function $AsyncExecutor$$() {
    this.batch_ = null;
  }
  function $resolvingPromise$$($opt_value$$) {
    return $opt_value$$ instanceof $PolyfillPromise$$ ? $opt_value$$ : new $PolyfillPromise$$(function($resolve$$, $reject$$) {
      $resolve$$($opt_value$$);
    });
  }
  if ($NativePromise$$ && !$jscomp.FORCE_POLYFILL_PROMISE) {
    return $NativePromise$$;
  }
  $AsyncExecutor$$.prototype.asyncExecute = function $$AsyncExecutor$$$$asyncExecute$($f$$) {
    if (null == this.batch_) {
      this.batch_ = [];
      var $self$$ = this;
      this.asyncExecuteFunction(function() {
        $self$$.executeBatch_();
      });
    }
    this.batch_.push($f$$);
  };
  var $nativeSetTimeout$$ = $jscomp.global.setTimeout;
  $AsyncExecutor$$.prototype.asyncExecuteFunction = function $$AsyncExecutor$$$$asyncExecuteFunction$($f$$) {
    $nativeSetTimeout$$($f$$, 0);
  };
  $AsyncExecutor$$.prototype.executeBatch_ = function $$AsyncExecutor$$$$executeBatch_$() {
    for (; this.batch_ && this.batch_.length;) {
      var $executingBatch$$ = this.batch_;
      this.batch_ = [];
      for (var $i$$ = 0; $i$$ < $executingBatch$$.length; ++$i$$) {
        var $f$$ = $executingBatch$$[$i$$];
        $executingBatch$$[$i$$] = null;
        try {
          $f$$();
        } catch ($error$$) {
          this.asyncThrow_($error$$);
        }
      }
    }
    this.batch_ = null;
  };
  $AsyncExecutor$$.prototype.asyncThrow_ = function $$AsyncExecutor$$$$asyncThrow_$($exception$$) {
    this.asyncExecuteFunction(function() {
      throw $exception$$;
    });
  };
  var $PolyfillPromise$$ = function $$PolyfillPromise$$$($executor$$) {
    this.state_ = 0;
    this.result_ = void 0;
    this.onSettledCallbacks_ = [];
    var $resolveAndReject$$ = this.createResolveAndReject_();
    try {
      $executor$$($resolveAndReject$$.resolve, $resolveAndReject$$.reject);
    } catch ($e$$) {
      $resolveAndReject$$.reject($e$$);
    }
  };
  $PolyfillPromise$$.prototype.createResolveAndReject_ = function $$PolyfillPromise$$$$createResolveAndReject_$() {
    function $firstCallWins$$($method$$) {
      return function($x$$) {
        $alreadyCalled$$ || ($alreadyCalled$$ = !0, $method$$.call($thisPromise$$, $x$$));
      };
    }
    var $thisPromise$$ = this, $alreadyCalled$$ = !1;
    return {resolve:$firstCallWins$$(this.resolveTo_), reject:$firstCallWins$$(this.reject_)};
  };
  $PolyfillPromise$$.prototype.resolveTo_ = function $$PolyfillPromise$$$$resolveTo_$($value$$) {
    if ($value$$ === this) {
      this.reject_(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if ($value$$ instanceof $PolyfillPromise$$) {
        this.settleSameAsPromise_($value$$);
      } else {
        a: {
          switch(typeof $value$$) {
            case "object":
              var $JSCompiler_inline_result$$ = null != $value$$;
              break a;
            case "function":
              $JSCompiler_inline_result$$ = !0;
              break a;
            default:
              $JSCompiler_inline_result$$ = !1;
          }
        }
        $JSCompiler_inline_result$$ ? this.resolveToNonPromiseObj_($value$$) : this.fulfill_($value$$);
      }
    }
  };
  $PolyfillPromise$$.prototype.resolveToNonPromiseObj_ = function $$PolyfillPromise$$$$resolveToNonPromiseObj_$($obj$$) {
    var $thenMethod$$ = void 0;
    try {
      $thenMethod$$ = $obj$$.then;
    } catch ($error$$) {
      this.reject_($error$$);
      return;
    }
    "function" == typeof $thenMethod$$ ? this.settleSameAsThenable_($thenMethod$$, $obj$$) : this.fulfill_($obj$$);
  };
  $PolyfillPromise$$.prototype.reject_ = function $$PolyfillPromise$$$$reject_$($reason$$) {
    this.settle_(2, $reason$$);
  };
  $PolyfillPromise$$.prototype.fulfill_ = function $$PolyfillPromise$$$$fulfill_$($value$$) {
    this.settle_(1, $value$$);
  };
  $PolyfillPromise$$.prototype.settle_ = function $$PolyfillPromise$$$$settle_$($settledState$$, $valueOrReason$$) {
    if (0 != this.state_) {
      throw Error("Cannot settle(" + $settledState$$ + ", " + $valueOrReason$$ + "): Promise already settled in state" + this.state_);
    }
    this.state_ = $settledState$$;
    this.result_ = $valueOrReason$$;
    this.executeOnSettledCallbacks_();
  };
  $PolyfillPromise$$.prototype.executeOnSettledCallbacks_ = function $$PolyfillPromise$$$$executeOnSettledCallbacks_$() {
    if (null != this.onSettledCallbacks_) {
      for (var $i$$ = 0; $i$$ < this.onSettledCallbacks_.length; ++$i$$) {
        $asyncExecutor$$.asyncExecute(this.onSettledCallbacks_[$i$$]);
      }
      this.onSettledCallbacks_ = null;
    }
  };
  var $asyncExecutor$$ = new $AsyncExecutor$$;
  $PolyfillPromise$$.prototype.settleSameAsPromise_ = function $$PolyfillPromise$$$$settleSameAsPromise_$($promise$$) {
    var $methods$$ = this.createResolveAndReject_();
    $promise$$.callWhenSettled_($methods$$.resolve, $methods$$.reject);
  };
  $PolyfillPromise$$.prototype.settleSameAsThenable_ = function $$PolyfillPromise$$$$settleSameAsThenable_$($thenMethod$$, $thenable$$) {
    var $methods$$ = this.createResolveAndReject_();
    try {
      $thenMethod$$.call($thenable$$, $methods$$.resolve, $methods$$.reject);
    } catch ($error$$) {
      $methods$$.reject($error$$);
    }
  };
  $PolyfillPromise$$.prototype.then = function $$PolyfillPromise$$$$then$($onFulfilled$$, $onRejected$$) {
    function $createCallback$$($paramF$$, $defaultF$$) {
      return "function" == typeof $paramF$$ ? function($x$$) {
        try {
          $resolveChild$$($paramF$$($x$$));
        } catch ($error$$) {
          $rejectChild$$($error$$);
        }
      } : $defaultF$$;
    }
    var $resolveChild$$, $rejectChild$$, $childPromise$$ = new $PolyfillPromise$$(function($resolve$$, $reject$$) {
      $resolveChild$$ = $resolve$$;
      $rejectChild$$ = $reject$$;
    });
    this.callWhenSettled_($createCallback$$($onFulfilled$$, $resolveChild$$), $createCallback$$($onRejected$$, $rejectChild$$));
    return $childPromise$$;
  };
  $PolyfillPromise$$.prototype.catch = function $$PolyfillPromise$$$$catch$($onRejected$$) {
    return this.then(void 0, $onRejected$$);
  };
  $PolyfillPromise$$.prototype.callWhenSettled_ = function $$PolyfillPromise$$$$callWhenSettled_$($onFulfilled$$, $onRejected$$) {
    function $callback$$() {
      switch($thisPromise$$.state_) {
        case 1:
          $onFulfilled$$($thisPromise$$.result_);
          break;
        case 2:
          $onRejected$$($thisPromise$$.result_);
          break;
        default:
          throw Error("Unexpected state: " + $thisPromise$$.state_);
      }
    }
    var $thisPromise$$ = this;
    null == this.onSettledCallbacks_ ? $asyncExecutor$$.asyncExecute($callback$$) : this.onSettledCallbacks_.push($callback$$);
  };
  $PolyfillPromise$$.resolve = $resolvingPromise$$;
  $PolyfillPromise$$.reject = function $$PolyfillPromise$$$reject$($opt_reason$$) {
    return new $PolyfillPromise$$(function($resolve$$, $reject$$) {
      $reject$$($opt_reason$$);
    });
  };
  $PolyfillPromise$$.race = function $$PolyfillPromise$$$race$($thenablesOrValues$$) {
    return new $PolyfillPromise$$(function($resolve$$, $reject$$) {
      for (var $iterator$$ = $jscomp.makeIterator($thenablesOrValues$$), $iterRec$$ = $iterator$$.next(); !$iterRec$$.done; $iterRec$$ = $iterator$$.next()) {
        $resolvingPromise$$($iterRec$$.value).callWhenSettled_($resolve$$, $reject$$);
      }
    });
  };
  $PolyfillPromise$$.all = function $$PolyfillPromise$$$all$($thenablesOrValues$$) {
    var $iterator$$ = $jscomp.makeIterator($thenablesOrValues$$), $iterRec$$ = $iterator$$.next();
    return $iterRec$$.done ? $resolvingPromise$$([]) : new $PolyfillPromise$$(function($resolveAll$$, $rejectAll$$) {
      function $onFulfilled$$($i$$) {
        return function($ithResult$$) {
          $resultsArray$$[$i$$] = $ithResult$$;
          $unresolvedCount$$--;
          0 == $unresolvedCount$$ && $resolveAll$$($resultsArray$$);
        };
      }
      var $resultsArray$$ = [], $unresolvedCount$$ = 0;
      do {
        $resultsArray$$.push(void 0), $unresolvedCount$$++, $resolvingPromise$$($iterRec$$.value).callWhenSettled_($onFulfilled$$($resultsArray$$.length - 1), $rejectAll$$), $iterRec$$ = $iterator$$.next();
      } while (!$iterRec$$.done);
    });
  };
  return $PolyfillPromise$$;
}, "es6", "es3");
var COMPILED = !0, goog = goog || {};
goog.global = this || self;
goog.exportPath_ = function $goog$exportPath_$($name$$, $object$$, $overwriteImplicit$$, $cur_objectToExportTo$$) {
  $name$$ = $name$$.split(".");
  $cur_objectToExportTo$$ = $cur_objectToExportTo$$ || goog.global;
  $name$$[0] in $cur_objectToExportTo$$ || "undefined" == typeof $cur_objectToExportTo$$.execScript || $cur_objectToExportTo$$.execScript("var " + $name$$[0]);
  for (var $part$$; $name$$.length && ($part$$ = $name$$.shift());) {
    if ($name$$.length || void 0 === $object$$) {
      $cur_objectToExportTo$$ = $cur_objectToExportTo$$[$part$$] && $cur_objectToExportTo$$[$part$$] !== Object.prototype[$part$$] ? $cur_objectToExportTo$$[$part$$] : $cur_objectToExportTo$$[$part$$] = {};
    } else {
      if (!$overwriteImplicit$$ && goog.isObject($object$$) && goog.isObject($cur_objectToExportTo$$[$part$$])) {
        for (var $prop$$ in $object$$) {
          $object$$.hasOwnProperty($prop$$) && ($cur_objectToExportTo$$[$part$$][$prop$$] = $object$$[$prop$$]);
        }
      } else {
        $cur_objectToExportTo$$[$part$$] = $object$$;
      }
    }
  }
};
goog.define = function $goog$define$($name$$, $defaultValue$jscomp$2_value$$) {
  if (!COMPILED) {
    var $uncompiledDefines$$ = goog.global.CLOSURE_UNCOMPILED_DEFINES, $defines$$ = goog.global.CLOSURE_DEFINES;
    $uncompiledDefines$$ && void 0 === $uncompiledDefines$$.nodeType && Object.prototype.hasOwnProperty.call($uncompiledDefines$$, $name$$) ? $defaultValue$jscomp$2_value$$ = $uncompiledDefines$$[$name$$] : $defines$$ && void 0 === $defines$$.nodeType && Object.prototype.hasOwnProperty.call($defines$$, $name$$) && ($defaultValue$jscomp$2_value$$ = $defines$$[$name$$]);
  }
  return $defaultValue$jscomp$2_value$$;
};
goog.FEATURESET_YEAR = 2012;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.getLocale = function $goog$getLocale$() {
  return goog.LOCALE;
};
goog.TRUSTED_SITE = !0;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function $goog$provide$($name$$) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.provide cannot be used within a module.");
  }
  if (!COMPILED && goog.isProvided_($name$$)) {
    throw Error('Namespace "' + $name$$ + '" already declared.');
  }
  goog.constructNamespace_($name$$);
};
goog.constructNamespace_ = function $goog$constructNamespace_$($name$$, $object$$, $overwriteImplicit$$) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[$name$$];
    for (var $namespace$$ = $name$$; ($namespace$$ = $namespace$$.substring(0, $namespace$$.lastIndexOf("."))) && !goog.getObjectByName($namespace$$);) {
      goog.implicitNamespaces_[$namespace$$] = !0;
    }
  }
  goog.exportPath_($name$$, $object$$, $overwriteImplicit$$);
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.getScriptNonce_ = function $goog$getScriptNonce_$($doc_nonce_opt_window_script$$) {
  $doc_nonce_opt_window_script$$ = ($doc_nonce_opt_window_script$$ || goog.global).document;
  return ($doc_nonce_opt_window_script$$ = $doc_nonce_opt_window_script$$.querySelector && $doc_nonce_opt_window_script$$.querySelector("script[nonce]")) && ($doc_nonce_opt_window_script$$ = $doc_nonce_opt_window_script$$.nonce || $doc_nonce_opt_window_script$$.getAttribute("nonce")) && goog.NONCE_PATTERN_.test($doc_nonce_opt_window_script$$) ? $doc_nonce_opt_window_script$$ : "";
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function $goog$module$($name$$) {
  if ("string" !== typeof $name$$ || !$name$$ || -1 == $name$$.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInGoogModuleLoader_()) {
    throw Error("Module " + $name$$ + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = $name$$;
  if (!COMPILED) {
    if (goog.isProvided_($name$$)) {
      throw Error('Namespace "' + $name$$ + '" already declared.');
    }
    delete goog.implicitNamespaces_[$name$$];
  }
};
goog.module.get = function $goog$module$get$($name$$) {
  return goog.module.getInternal_($name$$);
};
goog.module.getInternal_ = function $goog$module$getInternal_$($name$$) {
  if (!COMPILED) {
    if ($name$$ in goog.loadedModules_) {
      return goog.loadedModules_[$name$$].exports;
    }
    if (!goog.implicitNamespaces_[$name$$]) {
      return $name$$ = goog.getObjectByName($name$$), null != $name$$ ? $name$$ : null;
    }
  }
  return null;
};
goog.ModuleType = {ES6:"es6", GOOG:"goog"};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function $goog$isInModuleLoader_$() {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
goog.isInGoogModuleLoader_ = function $goog$isInGoogModuleLoader_$() {
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
goog.isInEs6ModuleLoader_ = function $goog$isInEs6ModuleLoader_$() {
  if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) {
    return !0;
  }
  var $jscomp$$ = goog.global.$jscomp;
  return $jscomp$$ ? "function" != typeof $jscomp$$.getCurrentModulePath ? !1 : !!$jscomp$$.getCurrentModulePath() : !1;
};
goog.module.declareLegacyNamespace = function $goog$module$declareLegacyNamespace$() {
  if (!COMPILED && !goog.isInGoogModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.declareModuleId = function $goog$declareModuleId$($namespace$$) {
  if (!COMPILED) {
    if (!goog.isInEs6ModuleLoader_()) {
      throw Error("goog.declareModuleId may only be called from within an ES6 module");
    }
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) {
      throw Error("goog.declareModuleId may only be called once per module.");
    }
    if ($namespace$$ in goog.loadedModules_) {
      throw Error('Module with namespace "' + $namespace$$ + '" already exists.');
    }
  }
  if (goog.moduleLoaderState_) {
    goog.moduleLoaderState_.moduleName = $namespace$$;
  } else {
    var $exports_jscomp$$ = goog.global.$jscomp;
    if (!$exports_jscomp$$ || "function" != typeof $exports_jscomp$$.getCurrentModulePath) {
      throw Error('Module with namespace "' + $namespace$$ + '" has been loaded incorrectly.');
    }
    $exports_jscomp$$ = $exports_jscomp$$.require($exports_jscomp$$.getCurrentModulePath());
    goog.loadedModules_[$namespace$$] = {exports:$exports_jscomp$$, type:goog.ModuleType.ES6, moduleId:$namespace$$};
  }
};
goog.setTestOnly = function $goog$setTestOnly$($opt_message$$) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw $opt_message$$ = $opt_message$$ || "", Error("Importing test-only code into non-debug environment" + ($opt_message$$ ? ": " + $opt_message$$ : "."));
  }
};
goog.forwardDeclare = function $goog$forwardDeclare$($name$$) {
};
COMPILED || (goog.isProvided_ = function $goog$isProvided_$($name$$) {
  return $name$$ in goog.loadedModules_ || !goog.implicitNamespaces_[$name$$] && null != goog.getObjectByName($name$$);
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function $goog$getObjectByName$($name$jscomp$77_parts$$, $cur$$) {
  $name$jscomp$77_parts$$ = $name$jscomp$77_parts$$.split(".");
  $cur$$ = $cur$$ || goog.global;
  for (var $i$$ = 0; $i$$ < $name$jscomp$77_parts$$.length; $i$$++) {
    if ($cur$$ = $cur$$[$name$jscomp$77_parts$$[$i$$]], null == $cur$$) {
      return null;
    }
  }
  return $cur$$;
};
goog.addDependency = function $goog$addDependency$($relPath$$, $provides$$, $requires$$, $opt_loadFlags$$) {
  !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency($relPath$$, $provides$$, $requires$$, $opt_loadFlags$$);
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function $goog$logToConsole_$($msg$$) {
  goog.global.console && goog.global.console.error($msg$$);
};
goog.require = function $goog$require$($namespace$$) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested($namespace$$);
    if (goog.isProvided_($namespace$$)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_($namespace$$);
      }
    } else {
      if (goog.ENABLE_DEBUG_LOADER) {
        var $moduleLoaderState$$ = goog.moduleLoaderState_;
        goog.moduleLoaderState_ = null;
        try {
          goog.debugLoader_.load_($namespace$$);
        } finally {
          goog.moduleLoaderState_ = $moduleLoaderState$$;
        }
      }
    }
    return null;
  }
};
goog.requireType = function $goog$requireType$($namespace$$) {
  return {};
};
goog.basePath = "";
goog.nullFunction = function $goog$nullFunction$() {
};
goog.abstractMethod = function $goog$abstractMethod$() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function $goog$addSingletonGetter$($ctor$$) {
  $ctor$$.instance_ = void 0;
  $ctor$$.getInstance = function $$ctor$$$getInstance$() {
    if ($ctor$$.instance_) {
      return $ctor$$.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = $ctor$$);
    return $ctor$$.instance_ = new $ctor$$;
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = "detect";
goog.ASSUME_ES_MODULES_TRANSPILED = !1;
goog.TRANSPILE_TO_LANGUAGE = "";
goog.TRANSPILER = "transpile.js";
goog.TRUSTED_TYPES_POLICY_NAME = "goog";
goog.hasBadLetScoping = null;
goog.loadModule = function $goog$loadModule$($moduleDef$$) {
  var $previousState$$ = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:"", declareLegacyNamespace:!1, type:goog.ModuleType.GOOG};
    var $origExports$$ = {}, $exports$$ = $origExports$$;
    if ("function" === typeof $moduleDef$$) {
      $exports$$ = $moduleDef$$.call(void 0, $exports$$);
    } else {
      if ("string" === typeof $moduleDef$$) {
        $exports$$ = goog.loadModuleFromSource_.call(void 0, $exports$$, $moduleDef$$);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var $moduleName$$ = goog.moduleLoaderState_.moduleName;
    if ("string" === typeof $moduleName$$ && $moduleName$$) {
      goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_($moduleName$$, $exports$$, $origExports$$ !== $exports$$) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof $exports$$ && null != $exports$$ && Object.seal($exports$$), goog.loadedModules_[$moduleName$$] = {exports:$exports$$, type:goog.ModuleType.GOOG, moduleId:goog.moduleLoaderState_.moduleName};
    } else {
      throw Error('Invalid module name "' + $moduleName$$ + '"');
    }
  } finally {
    goog.moduleLoaderState_ = $previousState$$;
  }
};
goog.loadModuleFromSource_ = function $goog$loadModuleFromSource_$($exports$$, $JSCompiler_OptimizeArgumentsArray_p0$$) {
  eval(goog.CLOSURE_EVAL_PREFILTER_.createScript($JSCompiler_OptimizeArgumentsArray_p0$$));
  return $exports$$;
};
goog.normalizePath_ = function $goog$normalizePath_$($components_path$$) {
  $components_path$$ = $components_path$$.split("/");
  for (var $i$$ = 0; $i$$ < $components_path$$.length;) {
    "." == $components_path$$[$i$$] ? $components_path$$.splice($i$$, 1) : $i$$ && ".." == $components_path$$[$i$$] && $components_path$$[$i$$ - 1] && ".." != $components_path$$[$i$$ - 1] ? $components_path$$.splice(--$i$$, 2) : $i$$++;
  }
  return $components_path$$.join("/");
};
goog.loadFileSync_ = function $goog$loadFileSync_$($src$$) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC($src$$);
  }
  try {
    var $xhr$$ = new goog.global.XMLHttpRequest;
    $xhr$$.open("get", $src$$, !1);
    $xhr$$.send();
    return 0 == $xhr$$.status || 200 == $xhr$$.status ? $xhr$$.responseText : null;
  } catch ($err$$) {
    return null;
  }
};
goog.transpile_ = function $goog$transpile_$($code$jscomp$0$$, $path$jscomp$0$$, $target$$) {
  var $jscomp$$ = goog.global.$jscomp;
  $jscomp$$ || (goog.global.$jscomp = $jscomp$$ = {});
  var $transpile$$ = $jscomp$$.transpile;
  if (!$transpile$$) {
    var $transpilerPath$$ = goog.basePath + goog.TRANSPILER, $transpilerCode$$ = goog.loadFileSync_($transpilerPath$$);
    if ($transpilerCode$$) {
      (function() {
        (0,eval)($transpilerCode$$ + "\n//# sourceURL=" + $transpilerPath$$);
      }).call(goog.global);
      if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) {
        throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
      }
      goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
      $jscomp$$ = goog.global.$jscomp;
      $transpile$$ = $jscomp$$.transpile;
    }
  }
  $transpile$$ || ($transpile$$ = $jscomp$$.transpile = function $$jscomp$$$transpile$($code$$, $path$$) {
    goog.logToConsole_($path$$ + " requires transpilation but no transpiler was found.");
    return $code$$;
  });
  return $transpile$$($code$jscomp$0$$, $path$jscomp$0$$, $target$$);
};
goog.typeOf = function $goog$typeOf$($value$$) {
  var $s$$ = typeof $value$$;
  return "object" != $s$$ ? $s$$ : $value$$ ? Array.isArray($value$$) ? "array" : $s$$ : "null";
};
goog.isArrayLike = function $goog$isArrayLike$($val$$) {
  var $type$$ = goog.typeOf($val$$);
  return "array" == $type$$ || "object" == $type$$ && "number" == typeof $val$$.length;
};
goog.isDateLike = function $goog$isDateLike$($val$$) {
  return goog.isObject($val$$) && "function" == typeof $val$$.getFullYear;
};
goog.isObject = function $goog$isObject$($val$$) {
  var $type$$ = typeof $val$$;
  return "object" == $type$$ && null != $val$$ || "function" == $type$$;
};
goog.getUid = function $goog$getUid$($obj$$) {
  return Object.prototype.hasOwnProperty.call($obj$$, goog.UID_PROPERTY_) && $obj$$[goog.UID_PROPERTY_] || ($obj$$[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function $goog$hasUid$($obj$$) {
  return !!$obj$$[goog.UID_PROPERTY_];
};
goog.removeUid = function $goog$removeUid$($obj$$) {
  null !== $obj$$ && "removeAttribute" in $obj$$ && $obj$$.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete $obj$$[goog.UID_PROPERTY_];
  } catch ($ex$$) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function $goog$cloneObject$($obj$$) {
  var $clone_type$$ = goog.typeOf($obj$$);
  if ("object" == $clone_type$$ || "array" == $clone_type$$) {
    if ("function" === typeof $obj$$.clone) {
      return $obj$$.clone();
    }
    if ("undefined" !== typeof Map && $obj$$ instanceof Map) {
      return new Map($obj$$);
    }
    if ("undefined" !== typeof Set && $obj$$ instanceof Set) {
      return new Set($obj$$);
    }
    $clone_type$$ = "array" == $clone_type$$ ? [] : {};
    for (var $key$$ in $obj$$) {
      $clone_type$$[$key$$] = goog.cloneObject($obj$$[$key$$]);
    }
    return $clone_type$$;
  }
  return $obj$$;
};
goog.bindNative_ = function $goog$bindNative_$($fn$$, $selfObj$$, $var_args$$) {
  return $fn$$.call.apply($fn$$.bind, arguments);
};
goog.bindJs_ = function $goog$bindJs_$($fn$$, $selfObj$$, $var_args$$) {
  if (!$fn$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$.apply($selfObj$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$$.apply($selfObj$$, arguments);
  };
};
goog.bind = function $goog$bind$($fn$$, $selfObj$$, $var_args$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function $goog$partial$($fn$$, $var_args$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$ = $args$$.slice();
    $newArgs$$.push.apply($newArgs$$, arguments);
    return $fn$$.apply(this, $newArgs$$);
  };
};
goog.mixin = function $goog$mixin$($target$$, $source$$) {
  for (var $x$$ in $source$$) {
    $target$$[$x$$] = $source$$[$x$$];
  }
};
goog.now = function $goog$now$() {
  return Date.now();
};
goog.globalEval = function $goog$globalEval$($script$$) {
  (0,eval)($script$$);
};
goog.getCssName = function $goog$getCssName$($className_result$$, $opt_modifier$$) {
  if ("." == String($className_result$$).charAt(0)) {
    throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + $className_result$$);
  }
  var $getMapping$$ = function $$getMapping$$$($cssName$$) {
    return goog.cssNameMapping_[$cssName$$] || $cssName$$;
  }, $rename_renameByParts$$ = function $$rename_renameByParts$$$($cssName$jscomp$1_parts$$) {
    $cssName$jscomp$1_parts$$ = $cssName$jscomp$1_parts$$.split("-");
    for (var $mapped$$ = [], $i$$ = 0; $i$$ < $cssName$jscomp$1_parts$$.length; $i$$++) {
      $mapped$$.push($getMapping$$($cssName$jscomp$1_parts$$[$i$$]));
    }
    return $mapped$$.join("-");
  };
  $rename_renameByParts$$ = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? $getMapping$$ : $rename_renameByParts$$ : function($a$$) {
    return $a$$;
  };
  $className_result$$ = $opt_modifier$$ ? $className_result$$ + "-" + $rename_renameByParts$$($opt_modifier$$) : $rename_renameByParts$$($className_result$$);
  return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN($className_result$$) : $className_result$$;
};
goog.setCssNameMapping = function $goog$setCssNameMapping$($mapping$$, $opt_style$$) {
  goog.cssNameMapping_ = $mapping$$;
  goog.cssNameMappingStyle_ = $opt_style$$;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function $goog$getMsg$($str$$, $opt_values$$, $opt_options$$) {
  $opt_options$$ && $opt_options$$.html && ($str$$ = $str$$.replace(/</g, "&lt;"));
  $opt_options$$ && $opt_options$$.unescapeHtmlEntities && ($str$$ = $str$$.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
  $opt_values$$ && ($str$$ = $str$$.replace(/\{\$([^}]+)}/g, function($match$$, $key$$) {
    return null != $opt_values$$ && $key$$ in $opt_values$$ ? $opt_values$$[$key$$] : $match$$;
  }));
  return $str$$;
};
goog.getMsgWithFallback = function $goog$getMsgWithFallback$($a$$, $b$$) {
  return $a$$;
};
goog.exportSymbol = function $goog$exportSymbol$($publicPath$$, $object$$, $objectToExportTo$$) {
  goog.exportPath_($publicPath$$, $object$$, !0, $objectToExportTo$$);
};
goog.exportProperty = function $goog$exportProperty$($object$$, $publicName$$, $symbol$$) {
  $object$$[$publicName$$] = $symbol$$;
};
goog.inherits = function $goog$inherits$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.superClass_ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  $childCtor$$.base = function $$childCtor$$$base$($me$$, $methodName$$, $var_args$$) {
    for (var $args$$ = Array(arguments.length - 2), $i$$ = 2; $i$$ < arguments.length; $i$$++) {
      $args$$[$i$$ - 2] = arguments[$i$$];
    }
    return $parentCtor$$.prototype[$methodName$$].apply($me$$, $args$$);
  };
};
goog.scope = function $goog$scope$($fn$$) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.scope is not supported within a module.");
  }
  $fn$$.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function $goog$defineClass$($superClass$$, $def$$) {
  var $cls_constructor$$ = $def$$.constructor, $statics$$ = $def$$.statics;
  $cls_constructor$$ && $cls_constructor$$ != Object.prototype.constructor || ($cls_constructor$$ = function $$cls_constructor$$$() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  $cls_constructor$$ = goog.defineClass.createSealingConstructor_($cls_constructor$$, $superClass$$);
  $superClass$$ && goog.inherits($cls_constructor$$, $superClass$$);
  delete $def$$.constructor;
  delete $def$$.statics;
  goog.defineClass.applyProperties_($cls_constructor$$.prototype, $def$$);
  null != $statics$$ && ($statics$$ instanceof Function ? $statics$$($cls_constructor$$) : goog.defineClass.applyProperties_($cls_constructor$$, $statics$$));
  return $cls_constructor$$;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function $goog$defineClass$createSealingConstructor_$($ctr$$, $superClass$$) {
  return goog.defineClass.SEAL_CLASS_INSTANCES ? function() {
    var $instance$$ = $ctr$$.apply(this, arguments) || this;
    $instance$$[goog.UID_PROPERTY_] = $instance$$[goog.UID_PROPERTY_];
    return $instance$$;
  } : $ctr$$;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function $goog$defineClass$applyProperties_$($target$$, $source$$) {
  for (var $key$$ in $source$$) {
    Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$]);
  }
  for (var $i$$ = 0; $i$$ < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; $i$$++) {
    $key$$ = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[$i$$], Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$]);
  }
};
goog.identity_ = function $goog$identity_$($s$$) {
  return $s$$;
};
goog.createTrustedTypesPolicy = function $goog$createTrustedTypesPolicy$($name$$) {
  var $policy$$ = null, $policyFactory$$ = goog.global.trustedTypes;
  if (!$policyFactory$$ || !$policyFactory$$.createPolicy) {
    return $policy$$;
  }
  try {
    $policy$$ = $policyFactory$$.createPolicy($name$$, {createHTML:goog.identity_, createScript:goog.identity_, createScriptURL:goog.identity_});
  } catch ($e$$) {
    goog.logToConsole_($e$$.message);
  }
  return $policy$$;
};
!COMPILED && goog.DEPENDENCIES_ENABLED && (goog.isEdge_ = function $goog$isEdge_$() {
  return !!(goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "").match(/Edge\/(\d+)(\.\d)*/i);
}, goog.inHtmlDocument_ = function $goog$inHtmlDocument_$() {
  var $doc$$ = goog.global.document;
  return null != $doc$$ && "write" in $doc$$;
}, goog.isDocumentLoading_ = function $goog$isDocumentLoading_$() {
  var $doc$$ = goog.global.document;
  return $doc$$.attachEvent ? "complete" != $doc$$.readyState : "loading" == $doc$$.readyState;
}, goog.findBasePath_ = function $goog$findBasePath_$() {
  if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      var $doc$$ = goog.global.document, $currentScript_i$$ = $doc$$.currentScript;
      $doc$$ = $currentScript_i$$ ? [$currentScript_i$$] : $doc$$.getElementsByTagName("SCRIPT");
      for ($currentScript_i$$ = $doc$$.length - 1; 0 <= $currentScript_i$$; --$currentScript_i$$) {
        var $src$$ = $doc$$[$currentScript_i$$].src, $l_qmark$$ = $src$$.lastIndexOf("?");
        $l_qmark$$ = -1 == $l_qmark$$ ? $src$$.length : $l_qmark$$;
        if ("base.js" == $src$$.substr($l_qmark$$ - 7, 7)) {
          goog.basePath = $src$$.substr(0, $l_qmark$$ - 7);
          break;
        }
      }
    }
  }
}, goog.findBasePath_(), goog.Transpiler = function $goog$Transpiler$() {
  this.requiresTranspilation_ = null;
  this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
}, goog.Transpiler.prototype.createRequiresTranspilation_ = function $goog$Transpiler$$createRequiresTranspilation_$() {
  function $addNewerLanguageTranspilationCheck$$($modeName$$, $isSupported$$) {
    $transpilationRequiredForAllLaterModes$$ ? $requiresTranspilation$$[$modeName$$] = !0 : $isSupported$$() ? ($transpilationTarget$$ = $modeName$$, $requiresTranspilation$$[$modeName$$] = !1) : $transpilationRequiredForAllLaterModes$$ = $requiresTranspilation$$[$modeName$$] = !0;
  }
  function $evalCheck$$($code$$) {
    try {
      return !!eval(goog.CLOSURE_EVAL_PREFILTER_.createScript($code$$));
    } catch ($ignored$$) {
      return !1;
    }
  }
  var $transpilationTarget$$ = "es3", $requiresTranspilation$$ = {es3:!1}, $transpilationRequiredForAllLaterModes$$ = !1;
  $addNewerLanguageTranspilationCheck$$("es5", function() {
    return $evalCheck$$("[1,].length==1");
  });
  $addNewerLanguageTranspilationCheck$$("es6", function() {
    return goog.isEdge_() ? !1 : $evalCheck$$('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
  });
  $addNewerLanguageTranspilationCheck$$("es7", function() {
    return $evalCheck$$("2**3==8");
  });
  $addNewerLanguageTranspilationCheck$$("es8", function() {
    return $evalCheck$$("async()=>1,1");
  });
  $addNewerLanguageTranspilationCheck$$("es9", function() {
    return $evalCheck$$("({...rest}={}),1");
  });
  $addNewerLanguageTranspilationCheck$$("es_2019", function() {
    return $evalCheck$$('let r;try{r="\u2029"}catch{};r');
  });
  $addNewerLanguageTranspilationCheck$$("es_2020", function() {
    return $evalCheck$$("null?.x??1");
  });
  $addNewerLanguageTranspilationCheck$$("es_next", function() {
    return !1;
  });
  return {target:$transpilationTarget$$, map:$requiresTranspilation$$};
}, goog.Transpiler.prototype.needsTranspile = function $goog$Transpiler$$needsTranspile$($lang$$, $module$$) {
  if ("always" == goog.TRANSPILE) {
    return !0;
  }
  if ("never" == goog.TRANSPILE) {
    return !1;
  }
  if (!this.requiresTranspilation_) {
    var $obj$$ = this.createRequiresTranspilation_();
    this.requiresTranspilation_ = $obj$$.map;
    this.transpilationTarget_ = this.transpilationTarget_ || $obj$$.target;
  }
  if ($lang$$ in this.requiresTranspilation_) {
    return this.requiresTranspilation_[$lang$$] ? !0 : !goog.inHtmlDocument_() || "es6" != $module$$ || "noModule" in goog.global.document.createElement("script") ? !1 : !0;
  }
  throw Error("Unknown language mode: " + $lang$$);
}, goog.Transpiler.prototype.transpile = function $goog$Transpiler$$transpile$($code$$, $path$$) {
  return goog.transpile_($code$$, $path$$, this.transpilationTarget_);
}, goog.transpiler_ = new goog.Transpiler, goog.protectScriptTag_ = function $goog$protectScriptTag_$($str$$) {
  return $str$$.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, goog.DebugLoader_ = function $goog$DebugLoader_$() {
  this.dependencies_ = {};
  this.idToPath_ = {};
  this.written_ = {};
  this.loadingDeps_ = [];
  this.depsToLoad_ = [];
  this.paused_ = !1;
  this.factory_ = new goog.DependencyFactory(goog.transpiler_);
  this.deferredCallbacks_ = {};
  this.deferredQueue_ = [];
}, goog.DebugLoader_.prototype.bootstrap = function $goog$DebugLoader_$$bootstrap$($namespaces$$, $callback$$) {
  function $resolve$$() {
    $cb$$ && (goog.global.setTimeout($cb$$, 0), $cb$$ = null);
  }
  var $cb$$ = $callback$$;
  if ($namespaces$$.length) {
    $callback$$ = [];
    for (var $i$$ = 0; $i$$ < $namespaces$$.length; $i$$++) {
      var $path$$ = this.getPathFromDeps_($namespaces$$[$i$$]);
      if (!$path$$) {
        throw Error("Unregonized namespace: " + $namespaces$$[$i$$]);
      }
      $callback$$.push(this.dependencies_[$path$$]);
    }
    $path$$ = goog.require;
    var $loaded$$ = 0;
    for ($i$$ = 0; $i$$ < $namespaces$$.length; $i$$++) {
      $path$$($namespaces$$[$i$$]), $callback$$[$i$$].onLoad(function() {
        ++$loaded$$ == $namespaces$$.length && $resolve$$();
      });
    }
  } else {
    $resolve$$();
  }
}, goog.DebugLoader_.prototype.loadClosureDeps = function $goog$DebugLoader_$$loadClosureDeps$() {
  this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1));
  this.loadDeps_();
}, goog.DebugLoader_.prototype.requested = function $goog$DebugLoader_$$requested$($absPathOrId_path$$, $callback$jscomp$55_opt_force$$) {
  ($absPathOrId_path$$ = this.getPathFromDeps_($absPathOrId_path$$)) && ($callback$jscomp$55_opt_force$$ || this.areDepsLoaded_(this.dependencies_[$absPathOrId_path$$].requires)) && ($callback$jscomp$55_opt_force$$ = this.deferredCallbacks_[$absPathOrId_path$$]) && (delete this.deferredCallbacks_[$absPathOrId_path$$], $callback$jscomp$55_opt_force$$());
}, goog.DebugLoader_.prototype.setDependencyFactory = function $goog$DebugLoader_$$setDependencyFactory$($factory$$) {
  this.factory_ = $factory$$;
}, goog.DebugLoader_.prototype.load_ = function $goog$DebugLoader_$$load_$($namespace$$) {
  if (this.getPathFromDeps_($namespace$$)) {
    var $loader$$ = this, $deps$$ = [], $visit$$ = function $$visit$$$($dep_namespace$$) {
      var $i$jscomp$24_path$$ = $loader$$.getPathFromDeps_($dep_namespace$$);
      if (!$i$jscomp$24_path$$) {
        throw Error("Bad dependency path or symbol: " + $dep_namespace$$);
      }
      if (!$loader$$.written_[$i$jscomp$24_path$$]) {
        $loader$$.written_[$i$jscomp$24_path$$] = !0;
        $dep_namespace$$ = $loader$$.dependencies_[$i$jscomp$24_path$$];
        for ($i$jscomp$24_path$$ = 0; $i$jscomp$24_path$$ < $dep_namespace$$.requires.length; $i$jscomp$24_path$$++) {
          goog.isProvided_($dep_namespace$$.requires[$i$jscomp$24_path$$]) || $visit$$($dep_namespace$$.requires[$i$jscomp$24_path$$]);
        }
        $deps$$.push($dep_namespace$$);
      }
    };
    $visit$$($namespace$$);
    $namespace$$ = !!this.depsToLoad_.length;
    this.depsToLoad_ = this.depsToLoad_.concat($deps$$);
    this.paused_ || $namespace$$ || this.loadDeps_();
  } else {
    goog.logToConsole_("goog.require could not find: " + $namespace$$);
  }
}, goog.DebugLoader_.prototype.loadDeps_ = function $goog$DebugLoader_$$loadDeps_$() {
  for (var $loader$$ = this, $paused$$ = this.paused_; this.depsToLoad_.length && !$paused$$;) {
    (function() {
      var $loadCallDone$$ = !1, $dep$$ = $loader$$.depsToLoad_.shift(), $loaded$$ = !1;
      $loader$$.loading_($dep$$);
      var $controller$$ = {pause:function() {
        if ($loadCallDone$$) {
          throw Error("Cannot call pause after the call to load.");
        }
        $paused$$ = !0;
      }, resume:function() {
        $loadCallDone$$ ? $loader$$.resume_() : $paused$$ = !1;
      }, loaded:function() {
        if ($loaded$$) {
          throw Error("Double call to loaded.");
        }
        $loaded$$ = !0;
        $loader$$.loaded_($dep$$);
      }, pending:function() {
        for (var $pending$$ = [], $i$$ = 0; $i$$ < $loader$$.loadingDeps_.length; $i$$++) {
          $pending$$.push($loader$$.loadingDeps_[$i$$]);
        }
        return $pending$$;
      }, setModuleState:function($type$$) {
        goog.moduleLoaderState_ = {type:$type$$, moduleName:"", declareLegacyNamespace:!1};
      }, registerEs6ModuleExports:function($path$$, $exports$$, $opt_closureNamespace$$) {
        $opt_closureNamespace$$ && (goog.loadedModules_[$opt_closureNamespace$$] = {exports:$exports$$, type:goog.ModuleType.ES6, moduleId:$opt_closureNamespace$$ || ""});
      }, registerGoogModuleExports:function($moduleId$$, $exports$$) {
        goog.loadedModules_[$moduleId$$] = {exports:$exports$$, type:goog.ModuleType.GOOG, moduleId:$moduleId$$};
      }, clearModuleState:function() {
        goog.moduleLoaderState_ = null;
      }, defer:function($callback$$) {
        if ($loadCallDone$$) {
          throw Error("Cannot register with defer after the call to load.");
        }
        $loader$$.defer_($dep$$, $callback$$);
      }, areDepsLoaded:function() {
        return $loader$$.areDepsLoaded_($dep$$.requires);
      }};
      try {
        $dep$$.load($controller$$);
      } finally {
        $loadCallDone$$ = !0;
      }
    })();
  }
  $paused$$ && this.pause_();
}, goog.DebugLoader_.prototype.pause_ = function $goog$DebugLoader_$$pause_$() {
  this.paused_ = !0;
}, goog.DebugLoader_.prototype.resume_ = function $goog$DebugLoader_$$resume_$() {
  this.paused_ && (this.paused_ = !1, this.loadDeps_());
}, goog.DebugLoader_.prototype.loading_ = function $goog$DebugLoader_$$loading_$($dep$$) {
  this.loadingDeps_.push($dep$$);
}, goog.DebugLoader_.prototype.loaded_ = function $goog$DebugLoader_$$loaded_$($dep$$) {
  for (var $i$$ = 0; $i$$ < this.loadingDeps_.length; $i$$++) {
    if (this.loadingDeps_[$i$$] == $dep$$) {
      this.loadingDeps_.splice($i$$, 1);
      break;
    }
  }
  for ($i$$ = 0; $i$$ < this.deferredQueue_.length; $i$$++) {
    if (this.deferredQueue_[$i$$] == $dep$$.path) {
      this.deferredQueue_.splice($i$$, 1);
      break;
    }
  }
  if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) {
    for (; this.deferredQueue_.length;) {
      this.requested(this.deferredQueue_.shift(), !0);
    }
  }
  $dep$$.loaded();
}, goog.DebugLoader_.prototype.areDepsLoaded_ = function $goog$DebugLoader_$$areDepsLoaded_$($pathsOrIds$$) {
  for (var $i$$ = 0; $i$$ < $pathsOrIds$$.length; $i$$++) {
    var $path$$ = this.getPathFromDeps_($pathsOrIds$$[$i$$]);
    if (!$path$$ || !($path$$ in this.deferredCallbacks_ || goog.isProvided_($pathsOrIds$$[$i$$]))) {
      return !1;
    }
  }
  return !0;
}, goog.DebugLoader_.prototype.getPathFromDeps_ = function $goog$DebugLoader_$$getPathFromDeps_$($absPathOrId$$) {
  return $absPathOrId$$ in this.idToPath_ ? this.idToPath_[$absPathOrId$$] : $absPathOrId$$ in this.dependencies_ ? $absPathOrId$$ : null;
}, goog.DebugLoader_.prototype.defer_ = function $goog$DebugLoader_$$defer_$($dependency$$, $callback$$) {
  this.deferredCallbacks_[$dependency$$.path] = $callback$$;
  this.deferredQueue_.push($dependency$$.path);
}, goog.LoadController = function $goog$LoadController$() {
}, goog.LoadController.prototype.pause = function $goog$LoadController$$pause$() {
}, goog.LoadController.prototype.resume = function $goog$LoadController$$resume$() {
}, goog.LoadController.prototype.loaded = function $goog$LoadController$$loaded$() {
}, goog.LoadController.prototype.pending = function $goog$LoadController$$pending$() {
}, goog.LoadController.prototype.registerEs6ModuleExports = function $goog$LoadController$$registerEs6ModuleExports$($path$$, $exports$$, $opt_closureNamespace$$) {
}, goog.LoadController.prototype.setModuleState = function $goog$LoadController$$setModuleState$($type$$) {
}, goog.LoadController.prototype.clearModuleState = function $goog$LoadController$$clearModuleState$() {
}, goog.LoadController.prototype.defer = function $goog$LoadController$$defer$($callback$$) {
}, goog.LoadController.prototype.areDepsLoaded = function $goog$LoadController$$areDepsLoaded$() {
}, goog.Dependency = function $goog$Dependency$($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$) {
  this.path = $path$$;
  this.relativePath = $relativePath$$;
  this.provides = $provides$$;
  this.requires = $requires$$;
  this.loadFlags = $loadFlags$$;
  this.loaded_ = !1;
  this.loadCallbacks_ = [];
}, goog.Dependency.prototype.getPathName = function $goog$Dependency$$getPathName$() {
  var $pathName$$ = this.path, $protocolIndex_slashIndex$$ = $pathName$$.indexOf("://");
  0 <= $protocolIndex_slashIndex$$ && ($pathName$$ = $pathName$$.substring($protocolIndex_slashIndex$$ + 3), $protocolIndex_slashIndex$$ = $pathName$$.indexOf("/"), 0 <= $protocolIndex_slashIndex$$ && ($pathName$$ = $pathName$$.substring($protocolIndex_slashIndex$$ + 1)));
  return $pathName$$;
}, goog.Dependency.prototype.onLoad = function $goog$Dependency$$onLoad$($callback$$) {
  this.loaded_ ? $callback$$() : this.loadCallbacks_.push($callback$$);
}, goog.Dependency.prototype.loaded = function $goog$Dependency$$loaded$() {
  this.loaded_ = !0;
  var $callbacks$$ = this.loadCallbacks_;
  this.loadCallbacks_ = [];
  for (var $i$$ = 0; $i$$ < $callbacks$$.length; $i$$++) {
    $callbacks$$[$i$$]();
  }
}, goog.Dependency.defer_ = !1, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function $goog$Dependency$registerCallback_$($callback$$) {
  var $key$$ = Math.random().toString(32);
  goog.Dependency.callbackMap_[$key$$] = $callback$$;
  return $key$$;
}, goog.Dependency.unregisterCallback_ = function $goog$Dependency$unregisterCallback_$($key$$) {
  delete goog.Dependency.callbackMap_[$key$$];
}, goog.Dependency.callback_ = function $goog$Dependency$callback_$($key$$, $var_args$$) {
  if ($key$$ in goog.Dependency.callbackMap_) {
    for (var $callback$$ = goog.Dependency.callbackMap_[$key$$], $args$$ = [], $i$$ = 1; $i$$ < arguments.length; $i$$++) {
      $args$$.push(arguments[$i$$]);
    }
    $callback$$.apply(void 0, $args$$);
  } else {
    throw Error("Callback key " + $key$$ + " does not exist (was base.js loaded more than once?).");
  }
}, goog.Dependency.prototype.load = function $goog$Dependency$$load$($controller$$) {
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? $controller$$.loaded() : $controller$$.pause();
  } else {
    if (goog.inHtmlDocument_()) {
      var $doc$$ = goog.global.document;
      if ("complete" == $doc$$.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
        if (/\bdeps.js$/.test(this.path)) {
          $controller$$.loaded();
          return;
        }
        throw Error('Cannot write "' + this.path + '" after document load');
      }
      var $nonce$$ = goog.getScriptNonce_();
      if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
        var $callback$$ = function $$callback$$$($script$$) {
          $script$$.readyState && "complete" != $script$$.readyState ? $script$$.onload = $callback$$ : (goog.Dependency.unregisterCallback_($key$$), $controller$$.loaded());
        };
        var $key$$ = goog.Dependency.registerCallback_($callback$$);
        $nonce$$ = $nonce$$ ? ' nonce="' + $nonce$$ + '"' : "";
        var $script$jscomp$0$$ = '<script src="' + this.path + '"' + $nonce$$ + (goog.Dependency.defer_ ? " defer" : "") + ' id="script-' + $key$$ + '">\x3c/script>';
        $script$jscomp$0$$ += "<script" + $nonce$$ + ">";
        $script$jscomp$0$$ = goog.Dependency.defer_ ? $script$jscomp$0$$ + ("document.getElementById('script-" + $key$$ + "').onload = function() {\n  goog.Dependency.callback_('" + $key$$ + "', this);\n};\n") : $script$jscomp$0$$ + ("goog.Dependency.callback_('" + $key$$ + "', document.getElementById('script-" + $key$$ + "'));");
        $script$jscomp$0$$ += "\x3c/script>";
        $doc$$.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML($script$jscomp$0$$) : $script$jscomp$0$$);
      } else {
        var $scriptEl$$ = $doc$$.createElement("script");
        $scriptEl$$.defer = goog.Dependency.defer_;
        $scriptEl$$.async = !1;
        $nonce$$ && ($scriptEl$$.nonce = $nonce$$);
        goog.DebugLoader_.IS_OLD_IE_ ? ($controller$$.pause(), $scriptEl$$.onreadystatechange = function $$scriptEl$$$onreadystatechange$() {
          if ("loaded" == $scriptEl$$.readyState || "complete" == $scriptEl$$.readyState) {
            $controller$$.loaded(), $controller$$.resume();
          }
        }) : $scriptEl$$.onload = function $$scriptEl$$$onload$() {
          $scriptEl$$.onload = null;
          $controller$$.loaded();
        };
        $scriptEl$$.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
        $doc$$.head.appendChild($scriptEl$$);
      }
    } else {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), $controller$$.loaded()) : $controller$$.pause();
    }
  }
}, goog.Es6ModuleDependency = function $goog$Es6ModuleDependency$($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$) {
  goog.Dependency.call(this, $path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$);
}, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function $goog$Es6ModuleDependency$$load$($controller$$) {
  function $write$$($script$jscomp$5_src$$, $contents$$) {
    var $nonceAttr$$ = "", $nonce$$ = goog.getScriptNonce_();
    $nonce$$ && ($nonceAttr$$ = ' nonce="' + $nonce$$ + '"');
    $script$jscomp$5_src$$ = $contents$$ ? '<script type="module" crossorigin' + $nonceAttr$$ + ">" + $contents$$ + "\x3c/script>" : '<script type="module" crossorigin src="' + $script$jscomp$5_src$$ + '"' + $nonceAttr$$ + ">\x3c/script>";
    $doc$$.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML($script$jscomp$5_src$$) : $script$jscomp$5_src$$);
  }
  function $append$$($src$$, $contents$$) {
    var $scriptEl$$ = $doc$$.createElement("script");
    $scriptEl$$.defer = !0;
    $scriptEl$$.async = !1;
    $scriptEl$$.type = "module";
    $scriptEl$$.setAttribute("crossorigin", !0);
    var $nonce$$ = goog.getScriptNonce_();
    $nonce$$ && ($scriptEl$$.nonce = $nonce$$);
    $contents$$ ? $scriptEl$$.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript($contents$$) : $contents$$ : $scriptEl$$.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL($src$$) : $src$$;
    $doc$$.head.appendChild($scriptEl$$);
  }
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? $controller$$.loaded() : $controller$$.pause();
  } else {
    if (goog.inHtmlDocument_()) {
      var $doc$$ = goog.global.document, $dep$$ = this;
      if (goog.isDocumentLoading_()) {
        var $create$$ = $write$$;
        goog.Dependency.defer_ = !0;
      } else {
        $create$$ = $append$$;
      }
      var $beforeKey$$ = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_($beforeKey$$);
        $controller$$.setModuleState(goog.ModuleType.ES6);
      });
      $create$$(void 0, 'goog.Dependency.callback_("' + $beforeKey$$ + '")');
      $create$$(this.path, void 0);
      var $registerKey$$ = goog.Dependency.registerCallback_(function($exports$$) {
        goog.Dependency.unregisterCallback_($registerKey$$);
        $controller$$.registerEs6ModuleExports($dep$$.path, $exports$$, goog.moduleLoaderState_.moduleName);
      });
      $create$$(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + $registerKey$$ + '", m)');
      var $afterKey$$ = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_($afterKey$$);
        $controller$$.clearModuleState();
        $controller$$.loaded();
      });
      $create$$(void 0, 'goog.Dependency.callback_("' + $afterKey$$ + '")');
    } else {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), $controller$$.pause();
    }
  }
}, goog.TransformedDependency = function $goog$TransformedDependency$($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$) {
  goog.Dependency.call(this, $path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$);
  this.contents_ = null;
  this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
}, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function $goog$TransformedDependency$$load$($controller$$) {
  function $fetch$$() {
    $dep$$.contents_ = goog.loadFileSync_($dep$$.path);
    $dep$$.contents_ && ($dep$$.contents_ = $dep$$.transform($dep$$.contents_), $dep$$.contents_ && ($dep$$.contents_ += "\n//# sourceURL=" + $dep$$.path));
  }
  function $load$$() {
    $dep$$.lazyFetch_ && $fetch$$();
    if ($dep$$.contents_) {
      $isEs6$$ && $controller$$.setModuleState(goog.ModuleType.ES6);
      try {
        var $contents$$ = $dep$$.contents_;
        $dep$$.contents_ = null;
        goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript($contents$$));
        if ($isEs6$$) {
          var $namespace$$ = goog.moduleLoaderState_.moduleName;
        }
      } finally {
        $isEs6$$ && $controller$$.clearModuleState();
      }
      $isEs6$$ && goog.global.$jscomp.require.ensure([$dep$$.getPathName()], function() {
        $controller$$.registerEs6ModuleExports($dep$$.path, goog.global.$jscomp.require($dep$$.getPathName()), $namespace$$);
      });
      $controller$$.loaded();
    }
  }
  function $fetchInOwnScriptThenLoad$$() {
    var $doc$$ = goog.global.document, $key$$ = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_($key$$);
      $load$$();
    }), $nonce$jscomp$4_script$$ = goog.getScriptNonce_();
    $nonce$jscomp$4_script$$ = "<script" + ($nonce$jscomp$4_script$$ ? ' nonce="' + $nonce$jscomp$4_script$$ + '"' : "") + ">" + goog.protectScriptTag_('goog.Dependency.callback_("' + $key$$ + '");') + "\x3c/script>";
    $doc$$.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML($nonce$jscomp$4_script$$) : $nonce$jscomp$4_script$$);
  }
  var $dep$$ = this;
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    $fetch$$(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, $controller$$.loaded()) : $controller$$.pause();
  } else {
    var $isEs6$$ = this.loadFlags.module == goog.ModuleType.ES6;
    this.lazyFetch_ || $fetch$$();
    var $anythingElsePending_needsAsyncLoading$$ = 1 < $controller$$.pending().length, $isInternetExplorerOrEdge_useOldIeWorkAround$$ = $anythingElsePending_needsAsyncLoading$$ && goog.DebugLoader_.IS_OLD_IE_;
    $anythingElsePending_needsAsyncLoading$$ = goog.Dependency.defer_ && ($anythingElsePending_needsAsyncLoading$$ || goog.isDocumentLoading_());
    if ($isInternetExplorerOrEdge_useOldIeWorkAround$$ || $anythingElsePending_needsAsyncLoading$$) {
      $controller$$.defer(function() {
        $load$$();
      });
    } else {
      var $doc$jscomp$0$$ = goog.global.document;
      $isInternetExplorerOrEdge_useOldIeWorkAround$$ = goog.inHtmlDocument_() && ("ActiveXObject" in goog.global || goog.isEdge_());
      if ($isEs6$$ && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !$isInternetExplorerOrEdge_useOldIeWorkAround$$) {
        goog.Dependency.defer_ = !0;
        $controller$$.pause();
        var $oldCallback$$ = $doc$jscomp$0$$.onreadystatechange;
        $doc$jscomp$0$$.onreadystatechange = function $$doc$jscomp$0$$$onreadystatechange$() {
          "interactive" == $doc$jscomp$0$$.readyState && ($doc$jscomp$0$$.onreadystatechange = $oldCallback$$, $load$$(), $controller$$.resume());
          "function" === typeof $oldCallback$$ && $oldCallback$$.apply(void 0, arguments);
        };
      } else {
        !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? $fetchInOwnScriptThenLoad$$() : $load$$();
      }
    }
  }
}, goog.TransformedDependency.prototype.transform = function $goog$TransformedDependency$$transform$($contents$$) {
}, goog.TranspiledDependency = function $goog$TranspiledDependency$($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$, $transpiler$$) {
  goog.TransformedDependency.call(this, $path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$);
  this.transpiler = $transpiler$$;
}, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function $goog$TranspiledDependency$$transform$($contents$$) {
  return this.transpiler.transpile($contents$$, this.getPathName());
}, goog.PreTranspiledEs6ModuleDependency = function $goog$PreTranspiledEs6ModuleDependency$($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$) {
  goog.TransformedDependency.call(this, $path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$);
}, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function $goog$PreTranspiledEs6ModuleDependency$$transform$($contents$$) {
  return $contents$$;
}, goog.GoogModuleDependency = function $goog$GoogModuleDependency$($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$, $needsTranspile$$, $transpiler$$) {
  goog.TransformedDependency.call(this, $path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$);
  this.needsTranspile_ = $needsTranspile$$;
  this.transpiler_ = $transpiler$$;
}, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function $goog$GoogModuleDependency$$transform$($contents$$) {
  this.needsTranspile_ && ($contents$$ = this.transpiler_.transpile($contents$$, this.getPathName()));
  return goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify($contents$$ + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + $contents$$ + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
}, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function $goog$DebugLoader_$$addDependency$($relPath$$, $provides$$, $dep$jscomp$6_i$jscomp$30_requires$$, $opt_loadFlags$$) {
  $provides$$ = $provides$$ || [];
  $relPath$$ = $relPath$$.replace(/\\/g, "/");
  var $path$$ = goog.normalizePath_(goog.basePath + $relPath$$);
  $opt_loadFlags$$ && "boolean" !== typeof $opt_loadFlags$$ || ($opt_loadFlags$$ = $opt_loadFlags$$ ? {module:goog.ModuleType.GOOG} : {});
  $dep$jscomp$6_i$jscomp$30_requires$$ = this.factory_.createDependency($path$$, $relPath$$, $provides$$, $dep$jscomp$6_i$jscomp$30_requires$$, $opt_loadFlags$$, goog.transpiler_.needsTranspile($opt_loadFlags$$.lang || "es3", $opt_loadFlags$$.module));
  this.dependencies_[$path$$] = $dep$jscomp$6_i$jscomp$30_requires$$;
  for ($dep$jscomp$6_i$jscomp$30_requires$$ = 0; $dep$jscomp$6_i$jscomp$30_requires$$ < $provides$$.length; $dep$jscomp$6_i$jscomp$30_requires$$++) {
    this.idToPath_[$provides$$[$dep$jscomp$6_i$jscomp$30_requires$$]] = $path$$;
  }
  this.idToPath_[$relPath$$] = $path$$;
}, goog.DependencyFactory = function $goog$DependencyFactory$($transpiler$$) {
  this.transpiler = $transpiler$$;
}, goog.DependencyFactory.prototype.createDependency = function $goog$DependencyFactory$$createDependency$($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$, $needsTranspile$$) {
  return $loadFlags$$.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$, $needsTranspile$$, this.transpiler) : $needsTranspile$$ ? new goog.TranspiledDependency($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$, this.transpiler) : $loadFlags$$.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency($path$$, $relativePath$$, 
  $provides$$, $requires$$, $loadFlags$$) : new goog.Es6ModuleDependency($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$) : new goog.Dependency($path$$, $relativePath$$, $provides$$, $requires$$, $loadFlags$$);
}, goog.debugLoader_ = new goog.DebugLoader_, goog.loadClosureDeps = function $goog$loadClosureDeps$() {
  goog.debugLoader_.loadClosureDeps();
}, goog.setDependencyFactory = function $goog$setDependencyFactory$($factory$$) {
  goog.debugLoader_.setDependencyFactory($factory$$);
}, goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function $goog$bootstrap$($namespaces$$, $callback$$) {
  goog.debugLoader_.bootstrap($namespaces$$, $callback$$);
});
if (!COMPILED) {
  var isChrome87 = !1;
  try {
    isChrome87 = eval(goog.global.trustedTypes.emptyScript) !== goog.global.trustedTypes.emptyScript;
  } catch ($err$$) {
  }
  goog.CLOSURE_EVAL_PREFILTER_ = goog.global.trustedTypes && isChrome87 && goog.createTrustedTypesPolicy("goog#base#devonly#eval") || {createScript:goog.identity_};
}
;var grpc = {web:{}}, module$contents$grpc$web$CallOptions_CallOptions = function $module$contents$grpc$web$CallOptions_CallOptions$($options$$) {
  this.properties_ = $options$$ || {};
};
module$contents$grpc$web$CallOptions_CallOptions.prototype.setOption = function $module$contents$grpc$web$CallOptions_CallOptions$$setOption$($name$$, $value$$) {
  this.properties_[$name$$] = $value$$;
};
module$contents$grpc$web$CallOptions_CallOptions.prototype.get = function $module$contents$grpc$web$CallOptions_CallOptions$$get$($name$$) {
  return this.properties_[$name$$];
};
module$contents$grpc$web$CallOptions_CallOptions.prototype.removeOption = function $module$contents$grpc$web$CallOptions_CallOptions$$removeOption$($name$$) {
  delete this.properties_[$name$$];
};
module$contents$grpc$web$CallOptions_CallOptions.prototype.getKeys = function $module$contents$grpc$web$CallOptions_CallOptions$$getKeys$() {
  return Object.keys(this.properties_);
};
grpc.web.CallOptions = module$contents$grpc$web$CallOptions_CallOptions;
var module$contents$grpc$web$Metadata_Metadata;
grpc.web.Metadata = module$contents$grpc$web$Metadata_Metadata;
var module$contents$grpc$web$Request_Request = function $module$contents$grpc$web$Request_Request$() {
};
module$contents$grpc$web$Request_Request.prototype.getRequestMessage = function $module$contents$grpc$web$Request_Request$$getRequestMessage$() {
};
module$contents$grpc$web$Request_Request.prototype.getMethodDescriptor = function $module$contents$grpc$web$Request_Request$$getMethodDescriptor$() {
};
module$contents$grpc$web$Request_Request.prototype.getMetadata = function $module$contents$grpc$web$Request_Request$$getMetadata$() {
};
module$contents$grpc$web$Request_Request.prototype.getCallOptions = function $module$contents$grpc$web$Request_Request$$getCallOptions$() {
};
module$contents$grpc$web$Request_Request.prototype.withMetadata = function $module$contents$grpc$web$Request_Request$$withMetadata$($key$$, $value$$) {
};
module$contents$grpc$web$Request_Request.prototype.withGrpcCallOption = function $module$contents$grpc$web$Request_Request$$withGrpcCallOption$($name$$, $value$$) {
};
goog.exportProperty(module$contents$grpc$web$Request_Request.prototype, "getCallOptions", module$contents$grpc$web$Request_Request.prototype.getCallOptions);
goog.exportProperty(module$contents$grpc$web$Request_Request.prototype, "getMetadata", module$contents$grpc$web$Request_Request.prototype.getMetadata);
goog.exportProperty(module$contents$grpc$web$Request_Request.prototype, "getMethodDescriptor", module$contents$grpc$web$Request_Request.prototype.getMethodDescriptor);
goog.exportProperty(module$contents$grpc$web$Request_Request.prototype, "getRequestMessage", module$contents$grpc$web$Request_Request.prototype.getRequestMessage);
grpc.web.Request = module$contents$grpc$web$Request_Request;
var module$contents$grpc$web$RequestInternal_RequestInternal = function $module$contents$grpc$web$RequestInternal_RequestInternal$($requestMessage$$, $methodDescriptor$$, $metadata$$, $callOptions$$) {
  this.requestMessage_ = $requestMessage$$;
  this.methodDescriptor_ = $methodDescriptor$$;
  this.metadata_ = $metadata$$;
  this.callOptions_ = $callOptions$$;
};
module$contents$grpc$web$RequestInternal_RequestInternal.prototype.getRequestMessage = function $module$contents$grpc$web$RequestInternal_RequestInternal$$getRequestMessage$() {
  return this.requestMessage_;
};
module$contents$grpc$web$RequestInternal_RequestInternal.prototype.getMethodDescriptor = function $module$contents$grpc$web$RequestInternal_RequestInternal$$getMethodDescriptor$() {
  return this.methodDescriptor_;
};
module$contents$grpc$web$RequestInternal_RequestInternal.prototype.getMetadata = function $module$contents$grpc$web$RequestInternal_RequestInternal$$getMetadata$() {
  return this.metadata_;
};
module$contents$grpc$web$RequestInternal_RequestInternal.prototype.getCallOptions = function $module$contents$grpc$web$RequestInternal_RequestInternal$$getCallOptions$() {
  return this.callOptions_;
};
module$contents$grpc$web$RequestInternal_RequestInternal.prototype.withMetadata = function $module$contents$grpc$web$RequestInternal_RequestInternal$$withMetadata$($key$$, $value$$) {
  this.metadata_[$key$$] = $value$$;
  return this;
};
module$contents$grpc$web$RequestInternal_RequestInternal.prototype.withGrpcCallOption = function $module$contents$grpc$web$RequestInternal_RequestInternal$$withGrpcCallOption$($name$$, $value$$) {
  this.callOptions_.setOption($name$$, $value$$);
  return this;
};
grpc.web.RequestInternal = module$contents$grpc$web$RequestInternal_RequestInternal;
var module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal = function $module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal$($responseMessage$$, $methodDescriptor$$, $metadata$$, $status$$) {
  $metadata$$ = void 0 === $metadata$$ ? {} : $metadata$$;
  this.responseMessage_ = $responseMessage$$;
  this.metadata_ = $metadata$$;
  this.methodDescriptor_ = $methodDescriptor$$;
  this.status_ = void 0 === $status$$ ? null : $status$$;
};
module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal.prototype.getResponseMessage = function $module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal$$getResponseMessage$() {
  return this.responseMessage_;
};
module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal.prototype.getMetadata = function $module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal$$getMetadata$() {
  return this.metadata_;
};
module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal.prototype.getMethodDescriptor = function $module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal$$getMethodDescriptor$() {
  return this.methodDescriptor_;
};
module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal.prototype.getStatus = function $module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal$$getStatus$() {
  return this.status_;
};
grpc.web.UnaryResponseInternal = module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal;
var module$contents$grpc$web$MethodDescriptor_MethodDescriptor = function $module$contents$grpc$web$MethodDescriptor_MethodDescriptor$($name$$, $methodType$$, $requestType$$, $responseType$$, $requestSerializeFn$$, $responseDeserializeFn$$) {
  this.name = $name$$;
  this.methodType = $methodType$$;
  this.requestType = $requestType$$;
  this.responseType = $responseType$$;
  this.requestSerializeFn = $requestSerializeFn$$;
  this.responseDeserializeFn = $responseDeserializeFn$$;
};
module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype.createRequest = function $module$contents$grpc$web$MethodDescriptor_MethodDescriptor$$createRequest$($requestMessage$$, $metadata$$, $callOptions$$) {
  $metadata$$ = void 0 === $metadata$$ ? {} : $metadata$$;
  $callOptions$$ = void 0 === $callOptions$$ ? new module$contents$grpc$web$CallOptions_CallOptions : $callOptions$$;
  return new module$contents$grpc$web$RequestInternal_RequestInternal($requestMessage$$, this, $metadata$$, $callOptions$$);
};
module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype.createUnaryResponse = function $module$contents$grpc$web$MethodDescriptor_MethodDescriptor$$createUnaryResponse$($responseMessage$$, $metadata$$, $status$$) {
  $metadata$$ = void 0 === $metadata$$ ? {} : $metadata$$;
  return new module$contents$grpc$web$UnaryResponseInternal_UnaryResponseInternal($responseMessage$$, this, $metadata$$, void 0 === $status$$ ? null : $status$$);
};
module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype.getName = function $module$contents$grpc$web$MethodDescriptor_MethodDescriptor$$getName$() {
  return this.name;
};
module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype.getMethodType = function $module$contents$grpc$web$MethodDescriptor_MethodDescriptor$$getMethodType$() {
  return this.methodType;
};
module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype.getResponseMessageCtor = function $module$contents$grpc$web$MethodDescriptor_MethodDescriptor$$getResponseMessageCtor$() {
  return this.responseType;
};
module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype.getRequestMessageCtor = function $module$contents$grpc$web$MethodDescriptor_MethodDescriptor$$getRequestMessageCtor$() {
  return this.requestType;
};
module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype.getResponseDeserializeFn = function $module$contents$grpc$web$MethodDescriptor_MethodDescriptor$$getResponseDeserializeFn$() {
  return this.responseDeserializeFn;
};
module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype.getRequestSerializeFn = function $module$contents$grpc$web$MethodDescriptor_MethodDescriptor$$getRequestSerializeFn$() {
  return this.requestSerializeFn;
};
goog.exportProperty(module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype, "getName", module$contents$grpc$web$MethodDescriptor_MethodDescriptor.prototype.getName);
grpc.web.MethodDescriptor = module$contents$grpc$web$MethodDescriptor_MethodDescriptor;
var module$contents$grpc$web$ClientReadableStream_ClientReadableStream = function $module$contents$grpc$web$ClientReadableStream_ClientReadableStream$() {
};
module$contents$grpc$web$ClientReadableStream_ClientReadableStream.prototype.on = goog.abstractMethod;
module$contents$grpc$web$ClientReadableStream_ClientReadableStream.prototype.removeListener = goog.abstractMethod;
module$contents$grpc$web$ClientReadableStream_ClientReadableStream.prototype.cancel = goog.abstractMethod;
grpc.web.ClientReadableStream = module$contents$grpc$web$ClientReadableStream_ClientReadableStream;
var module$exports$grpc$web$StatusCode = {OK:0, CANCELLED:1, UNKNOWN:2, INVALID_ARGUMENT:3, DEADLINE_EXCEEDED:4, NOT_FOUND:5, ALREADY_EXISTS:6, PERMISSION_DENIED:7, UNAUTHENTICATED:16, RESOURCE_EXHAUSTED:8, FAILED_PRECONDITION:9, ABORTED:10, OUT_OF_RANGE:11, UNIMPLEMENTED:12, INTERNAL:13, UNAVAILABLE:14, DATA_LOSS:15, fromHttpStatus:function($httpStatus$$) {
  switch($httpStatus$$) {
    case 200:
      return module$exports$grpc$web$StatusCode.OK;
    case 400:
      return module$exports$grpc$web$StatusCode.INVALID_ARGUMENT;
    case 401:
      return module$exports$grpc$web$StatusCode.UNAUTHENTICATED;
    case 403:
      return module$exports$grpc$web$StatusCode.PERMISSION_DENIED;
    case 404:
      return module$exports$grpc$web$StatusCode.NOT_FOUND;
    case 409:
      return module$exports$grpc$web$StatusCode.ABORTED;
    case 412:
      return module$exports$grpc$web$StatusCode.FAILED_PRECONDITION;
    case 429:
      return module$exports$grpc$web$StatusCode.RESOURCE_EXHAUSTED;
    case 499:
      return module$exports$grpc$web$StatusCode.CANCELLED;
    case 500:
      return module$exports$grpc$web$StatusCode.UNKNOWN;
    case 501:
      return module$exports$grpc$web$StatusCode.UNIMPLEMENTED;
    case 503:
      return module$exports$grpc$web$StatusCode.UNAVAILABLE;
    case 504:
      return module$exports$grpc$web$StatusCode.DEADLINE_EXCEEDED;
    default:
      return module$exports$grpc$web$StatusCode.UNKNOWN;
  }
}, getHttpStatus:function($statusCode$$) {
  switch($statusCode$$) {
    case module$exports$grpc$web$StatusCode.OK:
      return 200;
    case module$exports$grpc$web$StatusCode.INVALID_ARGUMENT:
      return 400;
    case module$exports$grpc$web$StatusCode.UNAUTHENTICATED:
      return 401;
    case module$exports$grpc$web$StatusCode.PERMISSION_DENIED:
      return 403;
    case module$exports$grpc$web$StatusCode.NOT_FOUND:
      return 404;
    case module$exports$grpc$web$StatusCode.ABORTED:
      return 409;
    case module$exports$grpc$web$StatusCode.FAILED_PRECONDITION:
      return 412;
    case module$exports$grpc$web$StatusCode.RESOURCE_EXHAUSTED:
      return 429;
    case module$exports$grpc$web$StatusCode.CANCELLED:
      return 499;
    case module$exports$grpc$web$StatusCode.UNKNOWN:
      return 500;
    case module$exports$grpc$web$StatusCode.UNIMPLEMENTED:
      return 501;
    case module$exports$grpc$web$StatusCode.UNAVAILABLE:
      return 503;
    case module$exports$grpc$web$StatusCode.DEADLINE_EXCEEDED:
      return 504;
    default:
      return 0;
  }
}, statusCodeName:function($statusCode$$) {
  switch($statusCode$$) {
    case module$exports$grpc$web$StatusCode.OK:
      return "OK";
    case module$exports$grpc$web$StatusCode.CANCELLED:
      return "CANCELLED";
    case module$exports$grpc$web$StatusCode.UNKNOWN:
      return "UNKNOWN";
    case module$exports$grpc$web$StatusCode.INVALID_ARGUMENT:
      return "INVALID_ARGUMENT";
    case module$exports$grpc$web$StatusCode.DEADLINE_EXCEEDED:
      return "DEADLINE_EXCEEDED";
    case module$exports$grpc$web$StatusCode.NOT_FOUND:
      return "NOT_FOUND";
    case module$exports$grpc$web$StatusCode.ALREADY_EXISTS:
      return "ALREADY_EXISTS";
    case module$exports$grpc$web$StatusCode.PERMISSION_DENIED:
      return "PERMISSION_DENIED";
    case module$exports$grpc$web$StatusCode.UNAUTHENTICATED:
      return "UNAUTHENTICATED";
    case module$exports$grpc$web$StatusCode.RESOURCE_EXHAUSTED:
      return "RESOURCE_EXHAUSTED";
    case module$exports$grpc$web$StatusCode.FAILED_PRECONDITION:
      return "FAILED_PRECONDITION";
    case module$exports$grpc$web$StatusCode.ABORTED:
      return "ABORTED";
    case module$exports$grpc$web$StatusCode.OUT_OF_RANGE:
      return "OUT_OF_RANGE";
    case module$exports$grpc$web$StatusCode.UNIMPLEMENTED:
      return "UNIMPLEMENTED";
    case module$exports$grpc$web$StatusCode.INTERNAL:
      return "INTERNAL";
    case module$exports$grpc$web$StatusCode.UNAVAILABLE:
      return "UNAVAILABLE";
    case module$exports$grpc$web$StatusCode.DATA_LOSS:
      return "DATA_LOSS";
    default:
      return "";
  }
}};
var module$exports$grpc$web$RpcError = function $module$exports$grpc$web$RpcError$($code$$, $$jscomp$tmp$error_message$$, $metadata$$) {
  $metadata$$ = void 0 === $metadata$$ ? {} : $metadata$$;
  $$jscomp$tmp$error_message$$ = Error.call(this, $$jscomp$tmp$error_message$$);
  this.message = $$jscomp$tmp$error_message$$.message;
  "stack" in $$jscomp$tmp$error_message$$ && (this.stack = $$jscomp$tmp$error_message$$.stack);
  this.code = $code$$;
  this.metadata = $metadata$$;
};
$jscomp.inherits(module$exports$grpc$web$RpcError, Error);
module$exports$grpc$web$RpcError.prototype.name = "RpcError";
var module$contents$grpc$web$AbstractClientBase_AbstractClientBase = function $module$contents$grpc$web$AbstractClientBase_AbstractClientBase$() {
};
module$contents$grpc$web$AbstractClientBase_AbstractClientBase.prototype.rpcCall = function $module$contents$grpc$web$AbstractClientBase_AbstractClientBase$$rpcCall$($method$$, $requestMessage$$, $metadata$$, $methodDescriptor$$, $callback$$) {
};
module$contents$grpc$web$AbstractClientBase_AbstractClientBase.prototype.thenableCall = function $module$contents$grpc$web$AbstractClientBase_AbstractClientBase$$thenableCall$($method$$, $requestMessage$$, $metadata$$, $methodDescriptor$$) {
};
module$contents$grpc$web$AbstractClientBase_AbstractClientBase.prototype.serverStreaming = function $module$contents$grpc$web$AbstractClientBase_AbstractClientBase$$serverStreaming$($method$$, $requestMessage$$, $metadata$$, $methodDescriptor$$) {
};
module$contents$grpc$web$AbstractClientBase_AbstractClientBase.getHostname = function $module$contents$grpc$web$AbstractClientBase_AbstractClientBase$getHostname$($method$$, $methodDescriptor$$) {
  return $method$$.substr(0, $method$$.length - $methodDescriptor$$.name.length);
};
grpc.web.AbstractClientBase = module$contents$grpc$web$AbstractClientBase_AbstractClientBase;
var module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl = function $module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl$($stream$$) {
  this.stream = $stream$$;
};
module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl.prototype.on = function $module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl$$on$($eventType$$, $callback$$) {
  return "data" == $eventType$$ || "error" == $eventType$$ ? this : this.stream.on($eventType$$, $callback$$);
};
module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl.prototype.removeListener = function $module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl$$removeListener$($eventType$$, $callback$$) {
  return this.stream.removeListener($eventType$$, $callback$$);
};
module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl.prototype.cancel = function $module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl$$cancel$() {
  this.stream.cancel();
};
grpc.web.ClientUnaryCallImpl = module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl;
goog.net = {};
goog.net.ErrorCode = {NO_ERROR:0, ACCESS_DENIED:1, FILE_NOT_FOUND:2, FF_SILENT_ERROR:3, CUSTOM_ERROR:4, EXCEPTION:5, HTTP_ERROR:6, ABORT:7, TIMEOUT:8, OFFLINE:9};
goog.net.ErrorCode.getDebugMessage = function $goog$net$ErrorCode$getDebugMessage$($errorCode$$) {
  switch($errorCode$$) {
    case goog.net.ErrorCode.NO_ERROR:
      return "No Error";
    case goog.net.ErrorCode.ACCESS_DENIED:
      return "Access denied to content document";
    case goog.net.ErrorCode.FILE_NOT_FOUND:
      return "File not found";
    case goog.net.ErrorCode.FF_SILENT_ERROR:
      return "Firefox silently errored";
    case goog.net.ErrorCode.CUSTOM_ERROR:
      return "Application custom error";
    case goog.net.ErrorCode.EXCEPTION:
      return "An exception occurred";
    case goog.net.ErrorCode.HTTP_ERROR:
      return "Http response at 400 or 500 level";
    case goog.net.ErrorCode.ABORT:
      return "Request was aborted";
    case goog.net.ErrorCode.TIMEOUT:
      return "Request timed out";
    case goog.net.ErrorCode.OFFLINE:
      return "The resource is not available offline";
    default:
      return "Unrecognized error code";
  }
};
goog.net.EventType = {COMPLETE:"complete", SUCCESS:"success", ERROR:"error", ABORT:"abort", READY:"ready", READY_STATE_CHANGE:"readystatechange", TIMEOUT:"timeout", INCREMENTAL_DATA:"incrementaldata", PROGRESS:"progress", DOWNLOAD_PROGRESS:"downloadprogress", UPLOAD_PROGRESS:"uploadprogress"};
goog.net.streams = {};
goog.net.streams.StreamParser = function $goog$net$streams$StreamParser$() {
};
goog.net.streams.StreamParser.prototype.isInputValid = function $goog$net$streams$StreamParser$$isInputValid$() {
};
goog.net.streams.StreamParser.prototype.acceptsBinaryInput = function $goog$net$streams$StreamParser$$acceptsBinaryInput$() {
};
goog.net.streams.StreamParser.prototype.getErrorMessage = function $goog$net$streams$StreamParser$$getErrorMessage$() {
};
goog.net.streams.StreamParser.prototype.parse = function $goog$net$streams$StreamParser$$parse$($input$$) {
};
goog.debug = {};
function module$contents$goog$debug$Error_DebugError($msg$$, $cause$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, module$contents$goog$debug$Error_DebugError);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $msg$$ && (this.message = String($msg$$));
  void 0 !== $cause$$ && (this.cause = $cause$$);
  this.reportErrorToServer = !0;
}
goog.inherits(module$contents$goog$debug$Error_DebugError, Error);
module$contents$goog$debug$Error_DebugError.prototype.name = "CustomError";
goog.debug.Error = module$contents$goog$debug$Error_DebugError;
goog.dom = {};
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function $goog$asserts$AssertionError$($messagePattern$$, $messageArgs$$) {
  module$contents$goog$debug$Error_DebugError.call(this, goog.asserts.subs_($messagePattern$$, $messageArgs$$));
  this.messagePattern = $messagePattern$$;
};
goog.inherits(goog.asserts.AssertionError, module$contents$goog$debug$Error_DebugError);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function $goog$asserts$DEFAULT_ERROR_HANDLER$($e$$) {
  throw $e$$;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.subs_ = function $goog$asserts$subs_$($pattern$$, $subs$$) {
  $pattern$$ = $pattern$$.split("%s");
  for (var $returnString$$ = "", $subLast$$ = $pattern$$.length - 1, $i$$ = 0; $i$$ < $subLast$$; $i$$++) {
    $returnString$$ += $pattern$$[$i$$] + ($i$$ < $subs$$.length ? $subs$$[$i$$] : "%s");
  }
  return $returnString$$ + $pattern$$[$subLast$$];
};
goog.asserts.doAssertFailure_ = function $goog$asserts$doAssertFailure_$($defaultMessage_e$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$$ = "Assertion failed";
  if ($givenMessage$$) {
    $message$$ += ": " + $givenMessage$$;
    var $args$$ = $givenArgs$$;
  } else {
    $defaultMessage_e$$ && ($message$$ += ": " + $defaultMessage_e$$, $args$$ = $defaultArgs$$);
  }
  $defaultMessage_e$$ = new goog.asserts.AssertionError("" + $message$$, $args$$ || []);
  goog.asserts.errorHandler_($defaultMessage_e$$);
};
goog.asserts.setErrorHandler = function $goog$asserts$setErrorHandler$($errorHandler$$) {
  goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = $errorHandler$$);
};
goog.asserts.assert = function $goog$asserts$assert$($condition$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !$condition$$ && goog.asserts.doAssertFailure_("", null, $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $condition$$;
};
goog.asserts.assertExists = function $goog$asserts$assertExists$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && null == $value$$ && goog.asserts.doAssertFailure_("Expected to exist: %s.", [$value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.fail = function $goog$asserts$fail$($opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + ($opt_message$$ ? ": " + $opt_message$$ : ""), Array.prototype.slice.call(arguments, 1)));
};
goog.asserts.assertNumber = function $goog$asserts$assertNumber$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && "number" !== typeof $value$$ && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertString = function $goog$asserts$assertString$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && "string" !== typeof $value$$ && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertFunction = function $goog$asserts$assertFunction$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && "function" !== typeof $value$$ && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertObject = function $goog$asserts$assertObject$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject($value$$) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertArray = function $goog$asserts$assertArray$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !Array.isArray($value$$) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertBoolean = function $goog$asserts$assertBoolean$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && "boolean" !== typeof $value$$ && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertElement = function $goog$asserts$assertElement$($value$$, $opt_message$$, $var_args$$) {
  !goog.asserts.ENABLE_ASSERTS || goog.isObject($value$$) && $value$$.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertInstanceof = function $goog$asserts$assertInstanceof$($value$$, $type$$, $opt_message$$, $var_args$$) {
  !goog.asserts.ENABLE_ASSERTS || $value$$ instanceof $type$$ || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_($type$$), goog.asserts.getType_($value$$)], $opt_message$$, Array.prototype.slice.call(arguments, 3));
  return $value$$;
};
goog.asserts.assertFinite = function $goog$asserts$assertFinite$($value$$, $opt_message$$, $var_args$$) {
  !goog.asserts.ENABLE_ASSERTS || "number" == typeof $value$$ && isFinite($value$$) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [$value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.getType_ = function $goog$asserts$getType_$($value$$) {
  return $value$$ instanceof Function ? $value$$.displayName || $value$$.name || "unknown type name" : $value$$ instanceof Object ? $value$$.constructor.displayName || $value$$.constructor.name || Object.prototype.toString.call($value$$) : null === $value$$ ? "null" : typeof $value$$;
};
var module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser = function $module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser$() {
  this.errorMessage_ = null;
  this.result_ = [];
  this.streamPos_ = 0;
  this.state_ = module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.INIT;
  this.countLengthBytes_ = this.length_ = this.frame_ = 0;
  this.messageBuffer_ = null;
  this.countMessageBytes_ = 0;
};
module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.prototype.isInputValid = function $module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser$$isInputValid$() {
  return this.state_ != module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.INVALID;
};
module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.prototype.getErrorMessage = function $module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser$$getErrorMessage$() {
  return this.errorMessage_;
};
module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.prototype.acceptsBinaryInput = function $module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser$$acceptsBinaryInput$() {
  return !0;
};
module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.prototype.parse = function $module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser$$parse$($input$$) {
  function $processFrameByte$$($b$$) {
    $b$$ == module$contents$grpc$web$GrpcWebStreamParser_FrameType.DATA ? $parser$$.frame_ = $b$$ : $b$$ == module$contents$grpc$web$GrpcWebStreamParser_FrameType.TRAILER ? $parser$$.frame_ = $b$$ : $parser$$.error_($inputBytes$$, $pos$$, "invalid frame byte");
    $parser$$.state_ = module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.LENGTH;
    $parser$$.length_ = 0;
    $parser$$.countLengthBytes_ = 0;
  }
  function $processLengthByte$$($b$$) {
    $parser$$.countLengthBytes_++;
    $parser$$.length_ = ($parser$$.length_ << 8) + $b$$;
    4 == $parser$$.countLengthBytes_ && ($parser$$.state_ = module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.MESSAGE, $parser$$.countMessageBytes_ = 0, $parser$$.messageBuffer_ = "undefined" !== typeof Uint8Array ? new Uint8Array($parser$$.length_) : Array($parser$$.length_), 0 == $parser$$.length_ && $finishMessage$$());
  }
  function $processMessageByte$$($b$$) {
    $parser$$.messageBuffer_[$parser$$.countMessageBytes_++] = $b$$;
    $parser$$.countMessageBytes_ == $parser$$.length_ && $finishMessage$$();
  }
  function $finishMessage$$() {
    var $message$$ = {};
    $message$$[$parser$$.frame_] = $parser$$.messageBuffer_;
    $parser$$.result_.push($message$$);
    $parser$$.state_ = module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.INIT;
  }
  goog.asserts.assert($input$$ instanceof Array || $input$$ instanceof ArrayBuffer || $input$$ instanceof Uint8Array);
  var $parser$$ = this, $inputBytes$$, $pos$$ = 0;
  for ($inputBytes$$ = $input$$ instanceof Uint8Array || $input$$ instanceof Array ? $input$$ : new Uint8Array($input$$); $pos$$ < $inputBytes$$.length;) {
    switch($parser$$.state_) {
      case module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.INVALID:
        $parser$$.error_($inputBytes$$, $pos$$, "stream already broken");
        break;
      case module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.INIT:
        $processFrameByte$$($inputBytes$$[$pos$$]);
        break;
      case module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.LENGTH:
        $processLengthByte$$($inputBytes$$[$pos$$]);
        break;
      case module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.MESSAGE:
        $processMessageByte$$($inputBytes$$[$pos$$]);
        break;
      default:
        throw Error("unexpected parser state: " + $parser$$.state_);
    }
    $parser$$.streamPos_++;
    $pos$$++;
  }
  $input$$ = $parser$$.result_;
  $parser$$.result_ = [];
  return 0 < $input$$.length ? $input$$ : null;
};
var module$contents$grpc$web$GrpcWebStreamParser_Parser = module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser;
module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_ = {INIT:0, LENGTH:1, MESSAGE:2, INVALID:3};
module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.FrameType = {DATA:0, TRAILER:128};
var module$contents$grpc$web$GrpcWebStreamParser_FrameType = module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.FrameType;
module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.prototype.error_ = function $module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser$$error_$($inputBytes$$, $pos$$, $errorMsg$$) {
  this.state_ = module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.State_.INVALID;
  this.errorMessage_ = "The stream is broken @" + this.streamPos_ + "/" + $pos$$ + ". Error: " + $errorMsg$$ + ". With input:\n" + $inputBytes$$;
  throw Error(this.errorMessage_);
};
grpc.web.GrpcWebStreamParser = module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser;
goog.Thenable = function $goog$Thenable$() {
};
goog.Thenable.prototype.then = function $goog$Thenable$$then$($opt_onFulfilled$$, $opt_onRejected$$, $opt_context$$) {
};
goog.Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable";
goog.Thenable.addImplementation = function $goog$Thenable$addImplementation$($ctor$$) {
  COMPILED ? $ctor$$.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = !0 : $ctor$$.prototype.$goog_Thenable = !0;
};
goog.Thenable.isImplementedBy = function $goog$Thenable$isImplementedBy$($object$$) {
  if (!$object$$) {
    return !1;
  }
  try {
    return COMPILED ? !!$object$$[goog.Thenable.IMPLEMENTED_BY_PROP] : !!$object$$.$goog_Thenable;
  } catch ($e$$) {
    return !1;
  }
};
goog.async = {};
goog.async.FreeList = function $goog$async$FreeList$($create$$, $reset$$, $limit$$) {
  this.limit_ = $limit$$;
  this.create_ = $create$$;
  this.reset_ = $reset$$;
  this.occupants_ = 0;
  this.head_ = null;
};
goog.async.FreeList.prototype.get = function $goog$async$FreeList$$get$() {
  if (0 < this.occupants_) {
    this.occupants_--;
    var $item$$ = this.head_;
    this.head_ = $item$$.next;
    $item$$.next = null;
  } else {
    $item$$ = this.create_();
  }
  return $item$$;
};
goog.async.FreeList.prototype.put = function $goog$async$FreeList$$put$($item$$) {
  this.reset_($item$$);
  this.occupants_ < this.limit_ && (this.occupants_++, $item$$.next = this.head_, this.head_ = $item$$);
};
goog.async.FreeList.prototype.occupants = function $goog$async$FreeList$$occupants$() {
  return this.occupants_;
};
var module$contents$goog$async$WorkQueue_WorkQueue = function $module$contents$goog$async$WorkQueue_WorkQueue$() {
  this.workTail_ = this.workHead_ = null;
};
module$contents$goog$async$WorkQueue_WorkQueue.prototype.add = function $module$contents$goog$async$WorkQueue_WorkQueue$$add$($fn$$, $scope$$) {
  var $item$$ = this.getUnusedItem_();
  $item$$.set($fn$$, $scope$$);
  this.workTail_ ? this.workTail_.next = $item$$ : ((0,goog.asserts.assert)(!this.workHead_), this.workHead_ = $item$$);
  this.workTail_ = $item$$;
};
module$contents$goog$async$WorkQueue_WorkQueue.prototype.remove = function $module$contents$goog$async$WorkQueue_WorkQueue$$remove$() {
  var $item$$ = null;
  this.workHead_ && ($item$$ = this.workHead_, this.workHead_ = this.workHead_.next, this.workHead_ || (this.workTail_ = null), $item$$.next = null);
  return $item$$;
};
module$contents$goog$async$WorkQueue_WorkQueue.prototype.returnUnused = function $module$contents$goog$async$WorkQueue_WorkQueue$$returnUnused$($item$$) {
  module$contents$goog$async$WorkQueue_WorkQueue.freelist_.put($item$$);
};
module$contents$goog$async$WorkQueue_WorkQueue.prototype.getUnusedItem_ = function $module$contents$goog$async$WorkQueue_WorkQueue$$getUnusedItem_$() {
  return module$contents$goog$async$WorkQueue_WorkQueue.freelist_.get();
};
module$contents$goog$async$WorkQueue_WorkQueue.DEFAULT_MAX_UNUSED = 100;
module$contents$goog$async$WorkQueue_WorkQueue.freelist_ = new goog.async.FreeList(function() {
  return new module$contents$goog$async$WorkQueue_WorkItem;
}, function($item$$) {
  return $item$$.reset();
}, module$contents$goog$async$WorkQueue_WorkQueue.DEFAULT_MAX_UNUSED);
var module$contents$goog$async$WorkQueue_WorkItem = function $module$contents$goog$async$WorkQueue_WorkItem$() {
  this.next = this.scope = this.fn = null;
};
module$contents$goog$async$WorkQueue_WorkItem.prototype.set = function $module$contents$goog$async$WorkQueue_WorkItem$$set$($fn$$, $scope$$) {
  this.fn = $fn$$;
  this.scope = $scope$$;
  this.next = null;
};
module$contents$goog$async$WorkQueue_WorkItem.prototype.reset = function $module$contents$goog$async$WorkQueue_WorkItem$$reset$() {
  this.next = this.scope = this.fn = null;
};
goog.async.WorkQueue = module$contents$goog$async$WorkQueue_WorkQueue;
goog.debug.entryPointRegistry = {};
goog.debug.entryPointRegistry.EntryPointMonitor = function $goog$debug$entryPointRegistry$EntryPointMonitor$() {
};
goog.debug.EntryPointMonitor = goog.debug.entryPointRegistry.EntryPointMonitor;
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.monitors_ = [];
goog.debug.entryPointRegistry.monitorsMayExist_ = !1;
goog.debug.entryPointRegistry.register = function $goog$debug$entryPointRegistry$register$($callback$$) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = $callback$$;
  if (goog.debug.entryPointRegistry.monitorsMayExist_) {
    for (var $monitors$$ = goog.debug.entryPointRegistry.monitors_, $i$$ = 0; $i$$ < $monitors$$.length; $i$$++) {
      $callback$$(goog.bind($monitors$$[$i$$].wrap, $monitors$$[$i$$]));
    }
  }
};
goog.debug.entryPointRegistry.monitorAll = function $goog$debug$entryPointRegistry$monitorAll$($monitor$$) {
  goog.debug.entryPointRegistry.monitorsMayExist_ = !0;
  for (var $transformer$$ = goog.bind($monitor$$.wrap, $monitor$$), $i$$ = 0; $i$$ < goog.debug.entryPointRegistry.refList_.length; $i$$++) {
    goog.debug.entryPointRegistry.refList_[$i$$]($transformer$$);
  }
  goog.debug.entryPointRegistry.monitors_.push($monitor$$);
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function $goog$debug$entryPointRegistry$unmonitorAllIfPossible$($monitor$jscomp$1_transformer$$) {
  var $monitors$$ = goog.debug.entryPointRegistry.monitors_;
  goog.asserts.assert($monitor$jscomp$1_transformer$$ == $monitors$$[$monitors$$.length - 1], "Only the most recent monitor can be unwrapped.");
  $monitor$jscomp$1_transformer$$ = goog.bind($monitor$jscomp$1_transformer$$.unwrap, $monitor$jscomp$1_transformer$$);
  for (var $i$$ = 0; $i$$ < goog.debug.entryPointRegistry.refList_.length; $i$$++) {
    goog.debug.entryPointRegistry.refList_[$i$$]($monitor$jscomp$1_transformer$$);
  }
  $monitors$$.length--;
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
var module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
goog.array.ASSUME_NATIVE_FUNCTIONS = module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS;
function module$contents$goog$array_peek($array$$) {
  return $array$$[$array$$.length - 1];
}
goog.array.peek = module$contents$goog$array_peek;
goog.array.last = module$contents$goog$array_peek;
var module$contents$goog$array_indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function($arr$$, $obj$$, $opt_fromIndex$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.indexOf.call($arr$$, $obj$$, $opt_fromIndex$$);
} : function($arr$$, $obj$$, $fromIndex_i$jscomp$35_opt_fromIndex$$) {
  $fromIndex_i$jscomp$35_opt_fromIndex$$ = null == $fromIndex_i$jscomp$35_opt_fromIndex$$ ? 0 : 0 > $fromIndex_i$jscomp$35_opt_fromIndex$$ ? Math.max(0, $arr$$.length + $fromIndex_i$jscomp$35_opt_fromIndex$$) : $fromIndex_i$jscomp$35_opt_fromIndex$$;
  if ("string" === typeof $arr$$) {
    return "string" !== typeof $obj$$ || 1 != $obj$$.length ? -1 : $arr$$.indexOf($obj$$, $fromIndex_i$jscomp$35_opt_fromIndex$$);
  }
  for (; $fromIndex_i$jscomp$35_opt_fromIndex$$ < $arr$$.length; $fromIndex_i$jscomp$35_opt_fromIndex$$++) {
    if ($fromIndex_i$jscomp$35_opt_fromIndex$$ in $arr$$ && $arr$$[$fromIndex_i$jscomp$35_opt_fromIndex$$] === $obj$$) {
      return $fromIndex_i$jscomp$35_opt_fromIndex$$;
    }
  }
  return -1;
};
goog.array.indexOf = module$contents$goog$array_indexOf;
var module$contents$goog$array_lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function($arr$$, $obj$$, $opt_fromIndex$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.lastIndexOf.call($arr$$, $obj$$, null == $opt_fromIndex$$ ? $arr$$.length - 1 : $opt_fromIndex$$);
} : function($arr$$, $obj$$, $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$) {
  $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$ = null == $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$ ? $arr$$.length - 1 : $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$;
  0 > $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$ && ($fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$ = Math.max(0, $arr$$.length + $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$));
  if ("string" === typeof $arr$$) {
    return "string" !== typeof $obj$$ || 1 != $obj$$.length ? -1 : $arr$$.lastIndexOf($obj$$, $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$);
  }
  for (; 0 <= $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$; $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$--) {
    if ($fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$ in $arr$$ && $arr$$[$fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$] === $obj$$) {
      return $fromIndex$jscomp$2_i$jscomp$36_opt_fromIndex$$;
    }
  }
  return -1;
};
goog.array.lastIndexOf = module$contents$goog$array_lastIndexOf;
var module$contents$goog$array_forEach = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  Array.prototype.forEach.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = "string" === typeof $arr$$ ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    $i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$);
  }
};
goog.array.forEach = module$contents$goog$array_forEach;
function module$contents$goog$array_forEachRight($arr$$, $f$$, $opt_obj$$) {
  var $i$jscomp$38_l$$ = $arr$$.length, $arr2$$ = "string" === typeof $arr$$ ? $arr$$.split("") : $arr$$;
  for (--$i$jscomp$38_l$$; 0 <= $i$jscomp$38_l$$; --$i$jscomp$38_l$$) {
    $i$jscomp$38_l$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$jscomp$38_l$$], $i$jscomp$38_l$$, $arr$$);
  }
}
goog.array.forEachRight = module$contents$goog$array_forEachRight;
var module$contents$goog$array_filter = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.filter.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $res$$ = [], $resLength$$ = 0, $arr2$$ = "string" === typeof $arr$$ ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($i$$ in $arr2$$) {
      var $val$$ = $arr2$$[$i$$];
      $f$$.call($opt_obj$$, $val$$, $i$$, $arr$$) && ($res$$[$resLength$$++] = $val$$);
    }
  }
  return $res$$;
};
goog.array.filter = module$contents$goog$array_filter;
var module$contents$goog$array_map = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.map.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $res$$ = Array($l$$), $arr2$$ = "string" === typeof $arr$$ ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    $i$$ in $arr2$$ && ($res$$[$i$$] = $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$));
  }
  return $res$$;
};
goog.array.map = module$contents$goog$array_map;
var module$contents$goog$array_reduce = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function($arr$$, $f$$, $val$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  $opt_obj$$ && ($f$$ = goog.bind($f$$, $opt_obj$$));
  return Array.prototype.reduce.call($arr$$, $f$$, $val$$);
} : function($arr$$, $f$$, $val$jscomp$0$$, $opt_obj$$) {
  var $rval$$ = $val$jscomp$0$$;
  module$contents$goog$array_forEach($arr$$, function($val$$, $index$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$, $index$$, $arr$$);
  });
  return $rval$$;
};
goog.array.reduce = module$contents$goog$array_reduce;
var module$contents$goog$array_reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function($arr$$, $f$$, $val$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  goog.asserts.assert(null != $f$$);
  $opt_obj$$ && ($f$$ = goog.bind($f$$, $opt_obj$$));
  return Array.prototype.reduceRight.call($arr$$, $f$$, $val$$);
} : function($arr$$, $f$$, $val$jscomp$0$$, $opt_obj$$) {
  var $rval$$ = $val$jscomp$0$$;
  module$contents$goog$array_forEachRight($arr$$, function($val$$, $index$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$, $index$$, $arr$$);
  });
  return $rval$$;
};
goog.array.reduceRight = module$contents$goog$array_reduceRight;
var module$contents$goog$array_some = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.some.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = "string" === typeof $arr$$ ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return !0;
    }
  }
  return !1;
};
goog.array.some = module$contents$goog$array_some;
var module$contents$goog$array_every = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.every.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = "string" === typeof $arr$$ ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($i$$ in $arr2$$ && !$f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return !1;
    }
  }
  return !0;
};
goog.array.every = module$contents$goog$array_every;
function module$contents$goog$array_count($arr$jscomp$0$$, $f$$, $opt_obj$$) {
  var $count$$ = 0;
  module$contents$goog$array_forEach($arr$jscomp$0$$, function($element$$, $index$$, $arr$$) {
    $f$$.call($opt_obj$$, $element$$, $index$$, $arr$$) && ++$count$$;
  }, $opt_obj$$);
  return $count$$;
}
goog.array.count = module$contents$goog$array_count;
function module$contents$goog$array_find($arr$$, $f$jscomp$20_i$$, $opt_obj$$) {
  $f$jscomp$20_i$$ = module$contents$goog$array_findIndex($arr$$, $f$jscomp$20_i$$, $opt_obj$$);
  return 0 > $f$jscomp$20_i$$ ? null : "string" === typeof $arr$$ ? $arr$$.charAt($f$jscomp$20_i$$) : $arr$$[$f$jscomp$20_i$$];
}
goog.array.find = module$contents$goog$array_find;
function module$contents$goog$array_findIndex($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = "string" === typeof $arr$$ ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return $i$$;
    }
  }
  return -1;
}
goog.array.findIndex = module$contents$goog$array_findIndex;
function module$contents$goog$array_findRight($arr$$, $f$jscomp$22_i$$, $opt_obj$$) {
  $f$jscomp$22_i$$ = module$contents$goog$array_findIndexRight($arr$$, $f$jscomp$22_i$$, $opt_obj$$);
  return 0 > $f$jscomp$22_i$$ ? null : "string" === typeof $arr$$ ? $arr$$.charAt($f$jscomp$22_i$$) : $arr$$[$f$jscomp$22_i$$];
}
goog.array.findRight = module$contents$goog$array_findRight;
function module$contents$goog$array_findIndexRight($arr$$, $f$$, $opt_obj$$) {
  var $i$jscomp$46_l$$ = $arr$$.length, $arr2$$ = "string" === typeof $arr$$ ? $arr$$.split("") : $arr$$;
  for (--$i$jscomp$46_l$$; 0 <= $i$jscomp$46_l$$; $i$jscomp$46_l$$--) {
    if ($i$jscomp$46_l$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$jscomp$46_l$$], $i$jscomp$46_l$$, $arr$$)) {
      return $i$jscomp$46_l$$;
    }
  }
  return -1;
}
goog.array.findIndexRight = module$contents$goog$array_findIndexRight;
function module$contents$goog$array_contains($arr$$, $obj$$) {
  return 0 <= module$contents$goog$array_indexOf($arr$$, $obj$$);
}
goog.array.contains = module$contents$goog$array_contains;
function module$contents$goog$array_isEmpty($arr$$) {
  return 0 == $arr$$.length;
}
goog.array.isEmpty = module$contents$goog$array_isEmpty;
function module$contents$goog$array_clear($arr$$) {
  if (!Array.isArray($arr$$)) {
    for (var $i$$ = $arr$$.length - 1; 0 <= $i$$; $i$$--) {
      delete $arr$$[$i$$];
    }
  }
  $arr$$.length = 0;
}
goog.array.clear = module$contents$goog$array_clear;
function module$contents$goog$array_insert($arr$$, $obj$$) {
  module$contents$goog$array_contains($arr$$, $obj$$) || $arr$$.push($obj$$);
}
goog.array.insert = module$contents$goog$array_insert;
function module$contents$goog$array_insertAt($arr$$, $obj$$, $opt_i$$) {
  module$contents$goog$array_splice($arr$$, $opt_i$$, 0, $obj$$);
}
goog.array.insertAt = module$contents$goog$array_insertAt;
function module$contents$goog$array_insertArrayAt($arr$$, $elementsToAdd$$, $opt_i$$) {
  goog.partial(module$contents$goog$array_splice, $arr$$, $opt_i$$, 0).apply(null, $elementsToAdd$$);
}
goog.array.insertArrayAt = module$contents$goog$array_insertArrayAt;
function module$contents$goog$array_insertBefore($arr$$, $obj$$, $opt_obj2$$) {
  var $i$$;
  2 == arguments.length || 0 > ($i$$ = module$contents$goog$array_indexOf($arr$$, $opt_obj2$$)) ? $arr$$.push($obj$$) : module$contents$goog$array_insertAt($arr$$, $obj$$, $i$$);
}
goog.array.insertBefore = module$contents$goog$array_insertBefore;
function module$contents$goog$array_remove($arr$$, $i$jscomp$49_obj$$) {
  $i$jscomp$49_obj$$ = module$contents$goog$array_indexOf($arr$$, $i$jscomp$49_obj$$);
  var $rv$$;
  ($rv$$ = 0 <= $i$jscomp$49_obj$$) && module$contents$goog$array_removeAt($arr$$, $i$jscomp$49_obj$$);
  return $rv$$;
}
goog.array.remove = module$contents$goog$array_remove;
function module$contents$goog$array_removeLast($arr$$, $i$jscomp$50_obj$$) {
  $i$jscomp$50_obj$$ = module$contents$goog$array_lastIndexOf($arr$$, $i$jscomp$50_obj$$);
  return 0 <= $i$jscomp$50_obj$$ ? (module$contents$goog$array_removeAt($arr$$, $i$jscomp$50_obj$$), !0) : !1;
}
goog.array.removeLast = module$contents$goog$array_removeLast;
function module$contents$goog$array_removeAt($arr$$, $i$$) {
  goog.asserts.assert(null != $arr$$.length);
  return 1 == Array.prototype.splice.call($arr$$, $i$$, 1).length;
}
goog.array.removeAt = module$contents$goog$array_removeAt;
function module$contents$goog$array_removeIf($arr$$, $f$jscomp$24_i$$, $opt_obj$$) {
  $f$jscomp$24_i$$ = module$contents$goog$array_findIndex($arr$$, $f$jscomp$24_i$$, $opt_obj$$);
  return 0 <= $f$jscomp$24_i$$ ? (module$contents$goog$array_removeAt($arr$$, $f$jscomp$24_i$$), !0) : !1;
}
goog.array.removeIf = module$contents$goog$array_removeIf;
function module$contents$goog$array_removeAllIf($arr$$, $f$$, $opt_obj$$) {
  var $removedCount$$ = 0;
  module$contents$goog$array_forEachRight($arr$$, function($val$$, $index$$) {
    $f$$.call($opt_obj$$, $val$$, $index$$, $arr$$) && module$contents$goog$array_removeAt($arr$$, $index$$) && $removedCount$$++;
  });
  return $removedCount$$;
}
goog.array.removeAllIf = module$contents$goog$array_removeAllIf;
function module$contents$goog$array_concat($var_args$$) {
  return Array.prototype.concat.apply([], arguments);
}
goog.array.concat = module$contents$goog$array_concat;
function module$contents$goog$array_join($var_args$$) {
  return Array.prototype.concat.apply([], arguments);
}
goog.array.join = module$contents$goog$array_join;
function module$contents$goog$array_toArray($object$$) {
  var $length$$ = $object$$.length;
  if (0 < $length$$) {
    for (var $rv$$ = Array($length$$), $i$$ = 0; $i$$ < $length$$; $i$$++) {
      $rv$$[$i$$] = $object$$[$i$$];
    }
    return $rv$$;
  }
  return [];
}
var module$contents$goog$array_clone = goog.array.toArray = module$contents$goog$array_toArray;
goog.array.clone = module$contents$goog$array_clone;
function module$contents$goog$array_extend($arr1$$, $var_args$$) {
  for (var $i$$ = 1; $i$$ < arguments.length; $i$$++) {
    var $arr2$$ = arguments[$i$$];
    if (goog.isArrayLike($arr2$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$$ = 0; $j$$ < $len2$$; $j$$++) {
        $arr1$$[$len1$$ + $j$$] = $arr2$$[$j$$];
      }
    } else {
      $arr1$$.push($arr2$$);
    }
  }
}
goog.array.extend = module$contents$goog$array_extend;
function module$contents$goog$array_splice($arr$$, $index$$, $howMany$$, $var_args$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.splice.apply($arr$$, module$contents$goog$array_slice(arguments, 1));
}
goog.array.splice = module$contents$goog$array_splice;
function module$contents$goog$array_slice($arr$$, $start$$, $opt_end$$) {
  goog.asserts.assert(null != $arr$$.length);
  return 2 >= arguments.length ? Array.prototype.slice.call($arr$$, $start$$) : Array.prototype.slice.call($arr$$, $start$$, $opt_end$$);
}
goog.array.slice = module$contents$goog$array_slice;
function module$contents$goog$array_removeDuplicates($arr$$, $opt_rv_returnArray$$, $hashFn_opt_hashFn$$) {
  $opt_rv_returnArray$$ = $opt_rv_returnArray$$ || $arr$$;
  var $cursorInsert_defaultHashFn$$ = function $$cursorInsert_defaultHashFn$$$($item$$) {
    return goog.isObject($item$$) ? "o" + goog.getUid($item$$) : (typeof $item$$).charAt(0) + $item$$;
  };
  $hashFn_opt_hashFn$$ = $hashFn_opt_hashFn$$ || $cursorInsert_defaultHashFn$$;
  for (var $cursorRead$$ = $cursorInsert_defaultHashFn$$ = 0, $seen$$ = {}; $cursorRead$$ < $arr$$.length;) {
    var $current$$ = $arr$$[$cursorRead$$++], $key$$ = $hashFn_opt_hashFn$$($current$$);
    Object.prototype.hasOwnProperty.call($seen$$, $key$$) || ($seen$$[$key$$] = !0, $opt_rv_returnArray$$[$cursorInsert_defaultHashFn$$++] = $current$$);
  }
  $opt_rv_returnArray$$.length = $cursorInsert_defaultHashFn$$;
}
goog.array.removeDuplicates = module$contents$goog$array_removeDuplicates;
function module$contents$goog$array_binarySearch($arr$$, $target$$, $opt_compareFn$$) {
  return module$contents$goog$array_binarySearch_($arr$$, $opt_compareFn$$ || module$contents$goog$array_defaultCompare, !1, $target$$);
}
goog.array.binarySearch = module$contents$goog$array_binarySearch;
function module$contents$goog$array_binarySelect($arr$$, $evaluator$$, $opt_obj$$) {
  return module$contents$goog$array_binarySearch_($arr$$, $evaluator$$, !0, void 0, $opt_obj$$);
}
goog.array.binarySelect = module$contents$goog$array_binarySelect;
function module$contents$goog$array_binarySearch_($arr$$, $compareFn$$, $isEvaluator$$, $opt_target$$, $opt_selfObj$$) {
  for (var $left$$ = 0, $right$$ = $arr$$.length, $found$$; $left$$ < $right$$;) {
    var $middle$$ = $left$$ + ($right$$ - $left$$ >>> 1);
    var $compareResult$$ = $isEvaluator$$ ? $compareFn$$.call($opt_selfObj$$, $arr$$[$middle$$], $middle$$, $arr$$) : $compareFn$$($opt_target$$, $arr$$[$middle$$]);
    0 < $compareResult$$ ? $left$$ = $middle$$ + 1 : ($right$$ = $middle$$, $found$$ = !$compareResult$$);
  }
  return $found$$ ? $left$$ : -$left$$ - 1;
}
function module$contents$goog$array_sort($arr$$, $opt_compareFn$$) {
  $arr$$.sort($opt_compareFn$$ || module$contents$goog$array_defaultCompare);
}
goog.array.sort = module$contents$goog$array_sort;
function module$contents$goog$array_stableSort($arr$$, $i$6_opt_compareFn$$) {
  for (var $compArr$$ = Array($arr$$.length), $i$$ = 0; $i$$ < $arr$$.length; $i$$++) {
    $compArr$$[$i$$] = {index:$i$$, value:$arr$$[$i$$]};
  }
  var $valueCompareFn$$ = $i$6_opt_compareFn$$ || module$contents$goog$array_defaultCompare;
  module$contents$goog$array_sort($compArr$$, function stableCompareFn($obj1$$, $obj2$$) {
    return $valueCompareFn$$($obj1$$.value, $obj2$$.value) || $obj1$$.index - $obj2$$.index;
  });
  for ($i$6_opt_compareFn$$ = 0; $i$6_opt_compareFn$$ < $arr$$.length; $i$6_opt_compareFn$$++) {
    $arr$$[$i$6_opt_compareFn$$] = $compArr$$[$i$6_opt_compareFn$$].value;
  }
}
goog.array.stableSort = module$contents$goog$array_stableSort;
function module$contents$goog$array_sortByKey($arr$$, $keyFn$$, $opt_compareFn$$) {
  var $keyCompareFn$$ = $opt_compareFn$$ || module$contents$goog$array_defaultCompare;
  module$contents$goog$array_sort($arr$$, function($a$$, $b$$) {
    return $keyCompareFn$$($keyFn$$($a$$), $keyFn$$($b$$));
  });
}
goog.array.sortByKey = module$contents$goog$array_sortByKey;
function module$contents$goog$array_sortObjectsByKey($arr$$, $key$$, $opt_compareFn$$) {
  module$contents$goog$array_sortByKey($arr$$, function($obj$$) {
    return $obj$$[$key$$];
  }, $opt_compareFn$$);
}
goog.array.sortObjectsByKey = module$contents$goog$array_sortObjectsByKey;
function module$contents$goog$array_isSorted($arr$$, $compare_opt_compareFn$$, $opt_strict$$) {
  $compare_opt_compareFn$$ = $compare_opt_compareFn$$ || module$contents$goog$array_defaultCompare;
  for (var $i$$ = 1; $i$$ < $arr$$.length; $i$$++) {
    var $compareResult$$ = $compare_opt_compareFn$$($arr$$[$i$$ - 1], $arr$$[$i$$]);
    if (0 < $compareResult$$ || 0 == $compareResult$$ && $opt_strict$$) {
      return !1;
    }
  }
  return !0;
}
goog.array.isSorted = module$contents$goog$array_isSorted;
function module$contents$goog$array_equals($arr1$$, $arr2$$, $equalsFn_opt_equalsFn$$) {
  if (!goog.isArrayLike($arr1$$) || !goog.isArrayLike($arr2$$) || $arr1$$.length != $arr2$$.length) {
    return !1;
  }
  var $l$$ = $arr1$$.length;
  $equalsFn_opt_equalsFn$$ = $equalsFn_opt_equalsFn$$ || module$contents$goog$array_defaultCompareEquality;
  for (var $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if (!$equalsFn_opt_equalsFn$$($arr1$$[$i$$], $arr2$$[$i$$])) {
      return !1;
    }
  }
  return !0;
}
goog.array.equals = module$contents$goog$array_equals;
function module$contents$goog$array_compare3($arr1$$, $arr2$$, $compare$jscomp$1_opt_compareFn$$) {
  $compare$jscomp$1_opt_compareFn$$ = $compare$jscomp$1_opt_compareFn$$ || module$contents$goog$array_defaultCompare;
  for (var $l$$ = Math.min($arr1$$.length, $arr2$$.length), $i$$ = 0; $i$$ < $l$$; $i$$++) {
    var $result$$ = $compare$jscomp$1_opt_compareFn$$($arr1$$[$i$$], $arr2$$[$i$$]);
    if (0 != $result$$) {
      return $result$$;
    }
  }
  return module$contents$goog$array_defaultCompare($arr1$$.length, $arr2$$.length);
}
goog.array.compare3 = module$contents$goog$array_compare3;
function module$contents$goog$array_defaultCompare($a$$, $b$$) {
  return $a$$ > $b$$ ? 1 : $a$$ < $b$$ ? -1 : 0;
}
goog.array.defaultCompare = module$contents$goog$array_defaultCompare;
function module$contents$goog$array_inverseDefaultCompare($a$$, $b$$) {
  return -module$contents$goog$array_defaultCompare($a$$, $b$$);
}
goog.array.inverseDefaultCompare = module$contents$goog$array_inverseDefaultCompare;
function module$contents$goog$array_defaultCompareEquality($a$$, $b$$) {
  return $a$$ === $b$$;
}
goog.array.defaultCompareEquality = module$contents$goog$array_defaultCompareEquality;
function module$contents$goog$array_binaryInsert($array$$, $value$$, $index$jscomp$75_opt_compareFn$$) {
  $index$jscomp$75_opt_compareFn$$ = module$contents$goog$array_binarySearch($array$$, $value$$, $index$jscomp$75_opt_compareFn$$);
  return 0 > $index$jscomp$75_opt_compareFn$$ ? (module$contents$goog$array_insertAt($array$$, $value$$, -($index$jscomp$75_opt_compareFn$$ + 1)), !0) : !1;
}
goog.array.binaryInsert = module$contents$goog$array_binaryInsert;
function module$contents$goog$array_binaryRemove($array$$, $index$jscomp$76_value$$, $opt_compareFn$$) {
  $index$jscomp$76_value$$ = module$contents$goog$array_binarySearch($array$$, $index$jscomp$76_value$$, $opt_compareFn$$);
  return 0 <= $index$jscomp$76_value$$ ? module$contents$goog$array_removeAt($array$$, $index$jscomp$76_value$$) : !1;
}
goog.array.binaryRemove = module$contents$goog$array_binaryRemove;
function module$contents$goog$array_bucket($array$$, $sorter$$, $opt_obj$$) {
  for (var $buckets$$ = {}, $i$$ = 0; $i$$ < $array$$.length; $i$$++) {
    var $value$$ = $array$$[$i$$], $key$$ = $sorter$$.call($opt_obj$$, $value$$, $i$$, $array$$);
    void 0 !== $key$$ && ($buckets$$[$key$$] || ($buckets$$[$key$$] = [])).push($value$$);
  }
  return $buckets$$;
}
goog.array.bucket = module$contents$goog$array_bucket;
function module$contents$goog$array_bucketToMap($array$$, $sorter$$) {
  for (var $buckets$$ = new Map, $i$$ = 0; $i$$ < $array$$.length; $i$$++) {
    var $value$$ = $array$$[$i$$], $key$$ = $sorter$$($value$$, $i$$, $array$$);
    if (void 0 !== $key$$) {
      var $bucket$$ = $buckets$$.get($key$$);
      $bucket$$ || ($bucket$$ = [], $buckets$$.set($key$$, $bucket$$));
      $bucket$$.push($value$$);
    }
  }
  return $buckets$$;
}
goog.array.bucketToMap = module$contents$goog$array_bucketToMap;
function module$contents$goog$array_toObject($arr$$, $keyFunc$$, $opt_obj$$) {
  var $ret$$ = {};
  module$contents$goog$array_forEach($arr$$, function($element$$, $index$$) {
    $ret$$[$keyFunc$$.call($opt_obj$$, $element$$, $index$$, $arr$$)] = $element$$;
  });
  return $ret$$;
}
goog.array.toObject = module$contents$goog$array_toObject;
function module$contents$goog$array_toMap($arr$$, $keyFunc$$) {
  for (var $map$$ = new Map, $i$$ = 0; $i$$ < $arr$$.length; $i$$++) {
    var $element$$ = $arr$$[$i$$];
    $map$$.set($keyFunc$$($element$$, $i$$, $arr$$), $element$$);
  }
  return $map$$;
}
goog.array.toMap = module$contents$goog$array_toMap;
function module$contents$goog$array_range($i$7_i$$, $opt_end$$, $opt_step_step$$) {
  var $array$$ = [], $start$$ = 0, $end$$ = $i$7_i$$;
  $opt_step_step$$ = $opt_step_step$$ || 1;
  void 0 !== $opt_end$$ && ($start$$ = $i$7_i$$, $end$$ = $opt_end$$);
  if (0 > $opt_step_step$$ * ($end$$ - $start$$)) {
    return [];
  }
  if (0 < $opt_step_step$$) {
    for ($i$7_i$$ = $start$$; $i$7_i$$ < $end$$; $i$7_i$$ += $opt_step_step$$) {
      $array$$.push($i$7_i$$);
    }
  } else {
    for ($i$7_i$$ = $start$$; $i$7_i$$ > $end$$; $i$7_i$$ += $opt_step_step$$) {
      $array$$.push($i$7_i$$);
    }
  }
  return $array$$;
}
goog.array.range = module$contents$goog$array_range;
function module$contents$goog$array_repeat($value$$, $n$$) {
  for (var $array$$ = [], $i$$ = 0; $i$$ < $n$$; $i$$++) {
    $array$$[$i$$] = $value$$;
  }
  return $array$$;
}
goog.array.repeat = module$contents$goog$array_repeat;
function module$contents$goog$array_flatten($var_args$$) {
  for (var $result$$ = [], $i$$ = 0; $i$$ < arguments.length; $i$$++) {
    var $element$$ = arguments[$i$$];
    if (Array.isArray($element$$)) {
      for (var $c$$ = 0; $c$$ < $element$$.length; $c$$ += 8192) {
        var $chunk$$ = module$contents$goog$array_slice($element$$, $c$$, $c$$ + 8192);
        $chunk$$ = module$contents$goog$array_flatten.apply(null, $chunk$$);
        for (var $r$$ = 0; $r$$ < $chunk$$.length; $r$$++) {
          $result$$.push($chunk$$[$r$$]);
        }
      }
    } else {
      $result$$.push($element$$);
    }
  }
  return $result$$;
}
goog.array.flatten = module$contents$goog$array_flatten;
function module$contents$goog$array_rotate($array$$, $n$$) {
  goog.asserts.assert(null != $array$$.length);
  $array$$.length && ($n$$ %= $array$$.length, 0 < $n$$ ? Array.prototype.unshift.apply($array$$, $array$$.splice(-$n$$, $n$$)) : 0 > $n$$ && Array.prototype.push.apply($array$$, $array$$.splice(0, -$n$$)));
  return $array$$;
}
goog.array.rotate = module$contents$goog$array_rotate;
function module$contents$goog$array_moveItem($arr$$, $fromIndex$$, $toIndex$$) {
  goog.asserts.assert(0 <= $fromIndex$$ && $fromIndex$$ < $arr$$.length);
  goog.asserts.assert(0 <= $toIndex$$ && $toIndex$$ < $arr$$.length);
  $fromIndex$$ = Array.prototype.splice.call($arr$$, $fromIndex$$, 1);
  Array.prototype.splice.call($arr$$, $toIndex$$, 0, $fromIndex$$[0]);
}
goog.array.moveItem = module$contents$goog$array_moveItem;
function module$contents$goog$array_zip($var_args$$) {
  if (!arguments.length) {
    return [];
  }
  for (var $result$$ = [], $minLen$$ = arguments[0].length, $i$8_i$$ = 1; $i$8_i$$ < arguments.length; $i$8_i$$++) {
    arguments[$i$8_i$$].length < $minLen$$ && ($minLen$$ = arguments[$i$8_i$$].length);
  }
  for ($i$8_i$$ = 0; $i$8_i$$ < $minLen$$; $i$8_i$$++) {
    for (var $value$$ = [], $j$$ = 0; $j$$ < arguments.length; $j$$++) {
      $value$$.push(arguments[$j$$][$i$8_i$$]);
    }
    $result$$.push($value$$);
  }
  return $result$$;
}
goog.array.zip = module$contents$goog$array_zip;
function module$contents$goog$array_shuffle($arr$$, $opt_randFn_randFn$$) {
  $opt_randFn_randFn$$ = $opt_randFn_randFn$$ || Math.random;
  for (var $i$$ = $arr$$.length - 1; 0 < $i$$; $i$$--) {
    var $j$$ = Math.floor($opt_randFn_randFn$$() * ($i$$ + 1)), $tmp$$ = $arr$$[$i$$];
    $arr$$[$i$$] = $arr$$[$j$$];
    $arr$$[$j$$] = $tmp$$;
  }
}
goog.array.shuffle = module$contents$goog$array_shuffle;
function module$contents$goog$array_copyByIndex($arr$$, $index_arr$$) {
  var $result$$ = [];
  module$contents$goog$array_forEach($index_arr$$, function($index$$) {
    $result$$.push($arr$$[$index$$]);
  });
  return $result$$;
}
goog.array.copyByIndex = module$contents$goog$array_copyByIndex;
function module$contents$goog$array_concatMap($arr$$, $f$$, $opt_obj$$) {
  return module$contents$goog$array_concat.apply([], module$contents$goog$array_map($arr$$, $f$$, $opt_obj$$));
}
goog.array.concatMap = module$contents$goog$array_concatMap;
goog.string = {};
goog.string.internal = {};
goog.string.internal.startsWith = function $goog$string$internal$startsWith$($str$$, $prefix$$) {
  return 0 == $str$$.lastIndexOf($prefix$$, 0);
};
goog.string.internal.endsWith = function $goog$string$internal$endsWith$($str$$, $suffix$$) {
  var $l$$ = $str$$.length - $suffix$$.length;
  return 0 <= $l$$ && $str$$.indexOf($suffix$$, $l$$) == $l$$;
};
goog.string.internal.caseInsensitiveStartsWith = function $goog$string$internal$caseInsensitiveStartsWith$($str$$, $prefix$$) {
  return 0 == goog.string.internal.caseInsensitiveCompare($prefix$$, $str$$.substr(0, $prefix$$.length));
};
goog.string.internal.caseInsensitiveEndsWith = function $goog$string$internal$caseInsensitiveEndsWith$($str$$, $suffix$$) {
  return 0 == goog.string.internal.caseInsensitiveCompare($suffix$$, $str$$.substr($str$$.length - $suffix$$.length, $suffix$$.length));
};
goog.string.internal.caseInsensitiveEquals = function $goog$string$internal$caseInsensitiveEquals$($str1$$, $str2$$) {
  return $str1$$.toLowerCase() == $str2$$.toLowerCase();
};
goog.string.internal.isEmptyOrWhitespace = function $goog$string$internal$isEmptyOrWhitespace$($str$$) {
  return /^[\s\xa0]*$/.test($str$$);
};
goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function($str$$) {
  return $str$$.trim();
} : function($str$$) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec($str$$)[1];
};
goog.string.internal.caseInsensitiveCompare = function $goog$string$internal$caseInsensitiveCompare$($str1$$, $str2$$) {
  $str1$$ = String($str1$$).toLowerCase();
  $str2$$ = String($str2$$).toLowerCase();
  return $str1$$ < $str2$$ ? -1 : $str1$$ == $str2$$ ? 0 : 1;
};
goog.string.internal.newLineToBr = function $goog$string$internal$newLineToBr$($str$$, $opt_xml$$) {
  return $str$$.replace(/(\r\n|\r|\n)/g, $opt_xml$$ ? "<br />" : "<br>");
};
goog.string.internal.htmlEscape = function $goog$string$internal$htmlEscape$($str$$, $opt_isLikelyToContainHtmlChars$$) {
  if ($opt_isLikelyToContainHtmlChars$$) {
    $str$$ = $str$$.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
  } else {
    if (!goog.string.internal.ALL_RE_.test($str$$)) {
      return $str$$;
    }
    -1 != $str$$.indexOf("&") && ($str$$ = $str$$.replace(goog.string.internal.AMP_RE_, "&amp;"));
    -1 != $str$$.indexOf("<") && ($str$$ = $str$$.replace(goog.string.internal.LT_RE_, "&lt;"));
    -1 != $str$$.indexOf(">") && ($str$$ = $str$$.replace(goog.string.internal.GT_RE_, "&gt;"));
    -1 != $str$$.indexOf('"') && ($str$$ = $str$$.replace(goog.string.internal.QUOT_RE_, "&quot;"));
    -1 != $str$$.indexOf("'") && ($str$$ = $str$$.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
    -1 != $str$$.indexOf("\x00") && ($str$$ = $str$$.replace(goog.string.internal.NULL_RE_, "&#0;"));
  }
  return $str$$;
};
goog.string.internal.AMP_RE_ = /&/g;
goog.string.internal.LT_RE_ = /</g;
goog.string.internal.GT_RE_ = />/g;
goog.string.internal.QUOT_RE_ = /"/g;
goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
goog.string.internal.NULL_RE_ = /\x00/g;
goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
goog.string.internal.whitespaceEscape = function $goog$string$internal$whitespaceEscape$($str$$, $opt_xml$$) {
  return goog.string.internal.newLineToBr($str$$.replace(/  /g, " &#160;"), $opt_xml$$);
};
goog.string.internal.contains = function $goog$string$internal$contains$($str$$, $subString$$) {
  return -1 != $str$$.indexOf($subString$$);
};
goog.string.internal.caseInsensitiveContains = function $goog$string$internal$caseInsensitiveContains$($str$$, $subString$$) {
  return goog.string.internal.contains($str$$.toLowerCase(), $subString$$.toLowerCase());
};
goog.string.internal.compareVersions = function $goog$string$internal$compareVersions$($v1Subs_version1$$, $v2Subs_version2$$) {
  var $order_v1CompNum$$ = 0;
  $v1Subs_version1$$ = goog.string.internal.trim(String($v1Subs_version1$$)).split(".");
  $v2Subs_version2$$ = goog.string.internal.trim(String($v2Subs_version2$$)).split(".");
  for (var $subCount$$ = Math.max($v1Subs_version1$$.length, $v2Subs_version2$$.length), $subIdx$$ = 0; 0 == $order_v1CompNum$$ && $subIdx$$ < $subCount$$; $subIdx$$++) {
    var $v1Comp_v1Sub$$ = $v1Subs_version1$$[$subIdx$$] || "", $v2Comp_v2Sub$$ = $v2Subs_version2$$[$subIdx$$] || "";
    do {
      $v1Comp_v1Sub$$ = /(\d*)(\D*)(.*)/.exec($v1Comp_v1Sub$$) || ["", "", "", ""];
      $v2Comp_v2Sub$$ = /(\d*)(\D*)(.*)/.exec($v2Comp_v2Sub$$) || ["", "", "", ""];
      if (0 == $v1Comp_v1Sub$$[0].length && 0 == $v2Comp_v2Sub$$[0].length) {
        break;
      }
      $order_v1CompNum$$ = 0 == $v1Comp_v1Sub$$[1].length ? 0 : parseInt($v1Comp_v1Sub$$[1], 10);
      var $v2CompNum$$ = 0 == $v2Comp_v2Sub$$[1].length ? 0 : parseInt($v2Comp_v2Sub$$[1], 10);
      $order_v1CompNum$$ = goog.string.internal.compareElements_($order_v1CompNum$$, $v2CompNum$$) || goog.string.internal.compareElements_(0 == $v1Comp_v1Sub$$[2].length, 0 == $v2Comp_v2Sub$$[2].length) || goog.string.internal.compareElements_($v1Comp_v1Sub$$[2], $v2Comp_v2Sub$$[2]);
      $v1Comp_v1Sub$$ = $v1Comp_v1Sub$$[3];
      $v2Comp_v2Sub$$ = $v2Comp_v2Sub$$[3];
    } while (0 == $order_v1CompNum$$);
  }
  return $order_v1CompNum$$;
};
goog.string.internal.compareElements_ = function $goog$string$internal$compareElements_$($left$$, $right$$) {
  return $left$$ < $right$$ ? -1 : $left$$ > $right$$ ? 1 : 0;
};
goog.labs = {};
goog.labs.userAgent = {};
goog.labs.userAgent.util = {};
goog.labs.userAgent.util.getNativeUserAgentString_ = function $goog$labs$userAgent$util$getNativeUserAgentString_$() {
  var $navigator$jscomp$1_userAgent$$ = goog.labs.userAgent.util.getNavigator_();
  return $navigator$jscomp$1_userAgent$$ && ($navigator$jscomp$1_userAgent$$ = $navigator$jscomp$1_userAgent$$.userAgent) ? $navigator$jscomp$1_userAgent$$ : "";
};
goog.labs.userAgent.util.getNavigator_ = function $goog$labs$userAgent$util$getNavigator_$() {
  return goog.global.navigator;
};
goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
goog.labs.userAgent.util.setUserAgent = function $goog$labs$userAgent$util$setUserAgent$($opt_userAgent$$) {
  goog.labs.userAgent.util.userAgent_ = $opt_userAgent$$ || goog.labs.userAgent.util.getNativeUserAgentString_();
};
goog.labs.userAgent.util.getUserAgent = function $goog$labs$userAgent$util$getUserAgent$() {
  return goog.labs.userAgent.util.userAgent_;
};
goog.labs.userAgent.util.matchUserAgent = function $goog$labs$userAgent$util$matchUserAgent$($str$$) {
  var $userAgent$$ = goog.labs.userAgent.util.getUserAgent();
  return goog.string.internal.contains($userAgent$$, $str$$);
};
goog.labs.userAgent.util.matchUserAgentIgnoreCase = function $goog$labs$userAgent$util$matchUserAgentIgnoreCase$($str$$) {
  var $userAgent$$ = goog.labs.userAgent.util.getUserAgent();
  return goog.string.internal.caseInsensitiveContains($userAgent$$, $str$$);
};
goog.labs.userAgent.util.extractVersionTuples = function $goog$labs$userAgent$util$extractVersionTuples$($userAgent$$) {
  for (var $versionRegExp$$ = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, $data$$ = [], $match$$; $match$$ = $versionRegExp$$.exec($userAgent$$);) {
    $data$$.push([$match$$[1], $match$$[2], $match$$[3] || void 0]);
  }
  return $data$$;
};
goog.object = {};
function module$contents$goog$object_forEach($obj$$, $f$$, $opt_obj$$) {
  for (var $key$$ in $obj$$) {
    $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$);
  }
}
function module$contents$goog$object_filter($obj$$, $f$$, $opt_obj$$) {
  var $res$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$) && ($res$$[$key$$] = $obj$$[$key$$]);
  }
  return $res$$;
}
function module$contents$goog$object_map($obj$$, $f$$, $opt_obj$$) {
  var $res$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$key$$] = $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$);
  }
  return $res$$;
}
function module$contents$goog$object_some($obj$$, $f$$, $opt_obj$$) {
  for (var $key$$ in $obj$$) {
    if ($f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return !0;
    }
  }
  return !1;
}
function module$contents$goog$object_every($obj$$, $f$$, $opt_obj$$) {
  for (var $key$$ in $obj$$) {
    if (!$f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return !1;
    }
  }
  return !0;
}
function module$contents$goog$object_getCount($obj$$) {
  var $rv$$ = 0, $key$$;
  for ($key$$ in $obj$$) {
    $rv$$++;
  }
  return $rv$$;
}
function module$contents$goog$object_getAnyKey($obj$$) {
  for (var $key$$ in $obj$$) {
    return $key$$;
  }
}
function module$contents$goog$object_getAnyValue($obj$$) {
  for (var $key$$ in $obj$$) {
    return $obj$$[$key$$];
  }
}
function module$contents$goog$object_contains($obj$$, $val$$) {
  return module$contents$goog$object_containsValue($obj$$, $val$$);
}
function module$contents$goog$object_getValues($obj$$) {
  var $res$$ = [], $i$$ = 0, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$i$$++] = $obj$$[$key$$];
  }
  return $res$$;
}
function module$contents$goog$object_getKeys($obj$$) {
  var $res$$ = [], $i$$ = 0, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$i$$++] = $key$$;
  }
  return $res$$;
}
function module$contents$goog$object_getValueByKeys($obj$$, $var_args$$) {
  var $i$$ = goog.isArrayLike($var_args$$), $keys$$ = $i$$ ? $var_args$$ : arguments;
  for ($i$$ = $i$$ ? 0 : 1; $i$$ < $keys$$.length; $i$$++) {
    if (null == $obj$$) {
      return;
    }
    $obj$$ = $obj$$[$keys$$[$i$$]];
  }
  return $obj$$;
}
function module$contents$goog$object_containsKey($obj$$, $key$$) {
  return null !== $obj$$ && $key$$ in $obj$$;
}
function module$contents$goog$object_containsValue($obj$$, $val$$) {
  for (var $key$$ in $obj$$) {
    if ($obj$$[$key$$] == $val$$) {
      return !0;
    }
  }
  return !1;
}
function module$contents$goog$object_findKey($obj$$, $f$$, $thisObj$$) {
  for (var $key$$ in $obj$$) {
    if ($f$$.call($thisObj$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return $key$$;
    }
  }
}
function module$contents$goog$object_findValue($obj$$, $f$jscomp$33_key$$, $thisObj$$) {
  return ($f$jscomp$33_key$$ = module$contents$goog$object_findKey($obj$$, $f$jscomp$33_key$$, $thisObj$$)) && $obj$$[$f$jscomp$33_key$$];
}
function module$contents$goog$object_isEmpty($obj$$) {
  for (var $key$$ in $obj$$) {
    return !1;
  }
  return !0;
}
function module$contents$goog$object_clear($obj$$) {
  for (var $i$$ in $obj$$) {
    delete $obj$$[$i$$];
  }
}
function module$contents$goog$object_remove($obj$$, $key$$) {
  var $rv$$;
  ($rv$$ = $key$$ in $obj$$) && delete $obj$$[$key$$];
  return $rv$$;
}
function module$contents$goog$object_add($obj$$, $key$$, $val$$) {
  if (null !== $obj$$ && $key$$ in $obj$$) {
    throw Error('The object already contains the key "' + $key$$ + '"');
  }
  module$contents$goog$object_set($obj$$, $key$$, $val$$);
}
function module$contents$goog$object_get($obj$$, $key$$, $val$$) {
  return null !== $obj$$ && $key$$ in $obj$$ ? $obj$$[$key$$] : $val$$;
}
function module$contents$goog$object_set($obj$$, $key$$, $value$$) {
  $obj$$[$key$$] = $value$$;
}
function module$contents$goog$object_setIfUndefined($obj$$, $key$$, $value$$) {
  return $key$$ in $obj$$ ? $obj$$[$key$$] : $obj$$[$key$$] = $value$$;
}
function module$contents$goog$object_setWithReturnValueIfNotSet($obj$$, $key$$, $f$jscomp$34_val$$) {
  if ($key$$ in $obj$$) {
    return $obj$$[$key$$];
  }
  $f$jscomp$34_val$$ = $f$jscomp$34_val$$();
  return $obj$$[$key$$] = $f$jscomp$34_val$$;
}
function module$contents$goog$object_equals($a$$, $b$$) {
  for (var $k$$ in $a$$) {
    if (!($k$$ in $b$$) || $a$$[$k$$] !== $b$$[$k$$]) {
      return !1;
    }
  }
  for (var $k$9$$ in $b$$) {
    if (!($k$9$$ in $a$$)) {
      return !1;
    }
  }
  return !0;
}
function module$contents$goog$object_clone($obj$$) {
  var $res$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$key$$] = $obj$$[$key$$];
  }
  return $res$$;
}
function module$contents$goog$object_unsafeClone($obj$$) {
  if (!$obj$$ || "object" !== typeof $obj$$) {
    return $obj$$;
  }
  if ("function" === typeof $obj$$.clone) {
    return $obj$$.clone();
  }
  if ("undefined" !== typeof Map && $obj$$ instanceof Map) {
    return new Map($obj$$);
  }
  if ("undefined" !== typeof Set && $obj$$ instanceof Set) {
    return new Set($obj$$);
  }
  var $clone$$ = Array.isArray($obj$$) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView($obj$$) || $obj$$ instanceof DataView ? {} : new $obj$$.constructor($obj$$.length), $key$$;
  for ($key$$ in $obj$$) {
    $clone$$[$key$$] = module$contents$goog$object_unsafeClone($obj$$[$key$$]);
  }
  return $clone$$;
}
function module$contents$goog$object_transpose($obj$$) {
  var $transposed$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $transposed$$[$obj$$[$key$$]] = $key$$;
  }
  return $transposed$$;
}
var module$contents$goog$object_PROTOTYPE_FIELDS = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function module$contents$goog$object_extend($target$$, $var_args$$) {
  for (var $key$$, $source$$, $i$$ = 1; $i$$ < arguments.length; $i$$++) {
    $source$$ = arguments[$i$$];
    for ($key$$ in $source$$) {
      $target$$[$key$$] = $source$$[$key$$];
    }
    for (var $j$$ = 0; $j$$ < module$contents$goog$object_PROTOTYPE_FIELDS.length; $j$$++) {
      $key$$ = module$contents$goog$object_PROTOTYPE_FIELDS[$j$$], Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$]);
    }
  }
}
function module$contents$goog$object_create($var_args$$) {
  var $argLength$$ = arguments.length;
  if (1 == $argLength$$ && Array.isArray(arguments[0])) {
    return module$contents$goog$object_create.apply(null, arguments[0]);
  }
  if ($argLength$$ % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var $rv$$ = {}, $i$$ = 0; $i$$ < $argLength$$; $i$$ += 2) {
    $rv$$[arguments[$i$$]] = arguments[$i$$ + 1];
  }
  return $rv$$;
}
function module$contents$goog$object_createSet($var_args$$) {
  var $argLength$$ = arguments.length;
  if (1 == $argLength$$ && Array.isArray(arguments[0])) {
    return module$contents$goog$object_createSet.apply(null, arguments[0]);
  }
  for (var $rv$$ = {}, $i$$ = 0; $i$$ < $argLength$$; $i$$++) {
    $rv$$[arguments[$i$$]] = !0;
  }
  return $rv$$;
}
function module$contents$goog$object_createImmutableView($obj$$) {
  var $result$$ = $obj$$;
  Object.isFrozen && !Object.isFrozen($obj$$) && ($result$$ = Object.create($obj$$), Object.freeze($result$$));
  return $result$$;
}
function module$contents$goog$object_isImmutableView($obj$$) {
  return !!Object.isFrozen && Object.isFrozen($obj$$);
}
function module$contents$goog$object_getAllPropertyNames($obj$jscomp$79_proto$$, $includeObjectPrototype$$, $includeFunctionPrototype$$) {
  if (!$obj$jscomp$79_proto$$) {
    return [];
  }
  if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
    return module$contents$goog$object_getKeys($obj$jscomp$79_proto$$);
  }
  for (var $visitedSet$$ = {}; $obj$jscomp$79_proto$$ && ($obj$jscomp$79_proto$$ !== Object.prototype || $includeObjectPrototype$$) && ($obj$jscomp$79_proto$$ !== Function.prototype || $includeFunctionPrototype$$);) {
    for (var $names$$ = Object.getOwnPropertyNames($obj$jscomp$79_proto$$), $i$$ = 0; $i$$ < $names$$.length; $i$$++) {
      $visitedSet$$[$names$$[$i$$]] = !0;
    }
    $obj$jscomp$79_proto$$ = Object.getPrototypeOf($obj$jscomp$79_proto$$);
  }
  return module$contents$goog$object_getKeys($visitedSet$$);
}
function module$contents$goog$object_getSuperClass($constructor$jscomp$1_proto$$) {
  return ($constructor$jscomp$1_proto$$ = Object.getPrototypeOf($constructor$jscomp$1_proto$$.prototype)) && $constructor$jscomp$1_proto$$.constructor;
}
goog.object.add = module$contents$goog$object_add;
goog.object.clear = module$contents$goog$object_clear;
goog.object.clone = module$contents$goog$object_clone;
goog.object.contains = module$contents$goog$object_contains;
goog.object.containsKey = module$contents$goog$object_containsKey;
goog.object.containsValue = module$contents$goog$object_containsValue;
goog.object.create = module$contents$goog$object_create;
goog.object.createImmutableView = module$contents$goog$object_createImmutableView;
goog.object.createSet = module$contents$goog$object_createSet;
goog.object.equals = module$contents$goog$object_equals;
goog.object.every = module$contents$goog$object_every;
goog.object.extend = module$contents$goog$object_extend;
goog.object.filter = module$contents$goog$object_filter;
goog.object.findKey = module$contents$goog$object_findKey;
goog.object.findValue = module$contents$goog$object_findValue;
goog.object.forEach = module$contents$goog$object_forEach;
goog.object.get = module$contents$goog$object_get;
goog.object.getAllPropertyNames = module$contents$goog$object_getAllPropertyNames;
goog.object.getAnyKey = module$contents$goog$object_getAnyKey;
goog.object.getAnyValue = module$contents$goog$object_getAnyValue;
goog.object.getCount = module$contents$goog$object_getCount;
goog.object.getKeys = module$contents$goog$object_getKeys;
goog.object.getSuperClass = module$contents$goog$object_getSuperClass;
goog.object.getValueByKeys = module$contents$goog$object_getValueByKeys;
goog.object.getValues = module$contents$goog$object_getValues;
goog.object.isEmpty = module$contents$goog$object_isEmpty;
goog.object.isImmutableView = module$contents$goog$object_isImmutableView;
goog.object.map = module$contents$goog$object_map;
goog.object.remove = module$contents$goog$object_remove;
goog.object.set = module$contents$goog$object_set;
goog.object.setIfUndefined = module$contents$goog$object_setIfUndefined;
goog.object.setWithReturnValueIfNotSet = module$contents$goog$object_setWithReturnValueIfNotSet;
goog.object.some = module$contents$goog$object_some;
goog.object.transpose = module$contents$goog$object_transpose;
goog.object.unsafeClone = module$contents$goog$object_unsafeClone;
goog.labs.userAgent.browser = {};
goog.labs.userAgent.browser.matchOpera_ = function $goog$labs$userAgent$browser$matchOpera_$() {
  return goog.labs.userAgent.util.matchUserAgent("Opera");
};
goog.labs.userAgent.browser.matchIE_ = function $goog$labs$userAgent$browser$matchIE_$() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.browser.matchEdgeHtml_ = function $goog$labs$userAgent$browser$matchEdgeHtml_$() {
  return goog.labs.userAgent.util.matchUserAgent("Edge");
};
goog.labs.userAgent.browser.matchEdgeChromium_ = function $goog$labs$userAgent$browser$matchEdgeChromium_$() {
  return goog.labs.userAgent.util.matchUserAgent("Edg/");
};
goog.labs.userAgent.browser.matchOperaChromium_ = function $goog$labs$userAgent$browser$matchOperaChromium_$() {
  return goog.labs.userAgent.util.matchUserAgent("OPR");
};
goog.labs.userAgent.browser.matchFirefox_ = function $goog$labs$userAgent$browser$matchFirefox_$() {
  return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
};
goog.labs.userAgent.browser.matchSafari_ = function $goog$labs$userAgent$browser$matchSafari_$() {
  return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
};
goog.labs.userAgent.browser.matchCoast_ = function $goog$labs$userAgent$browser$matchCoast_$() {
  return goog.labs.userAgent.util.matchUserAgent("Coast");
};
goog.labs.userAgent.browser.matchIosWebview_ = function $goog$labs$userAgent$browser$matchIosWebview_$() {
  return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
};
goog.labs.userAgent.browser.matchChrome_ = function $goog$labs$userAgent$browser$matchChrome_$() {
  return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
};
goog.labs.userAgent.browser.matchAndroidBrowser_ = function $goog$labs$userAgent$browser$matchAndroidBrowser_$() {
  return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
};
goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
goog.labs.userAgent.browser.isSilk = function $goog$labs$userAgent$browser$isSilk$() {
  return goog.labs.userAgent.util.matchUserAgent("Silk");
};
goog.labs.userAgent.browser.getVersion = function $goog$labs$userAgent$browser$getVersion$() {
  function $lookUpValueWithKeys$$($key$jscomp$90_keys$$) {
    $key$jscomp$90_keys$$ = module$contents$goog$array_find($key$jscomp$90_keys$$, $versionMapHasKey$$);
    return $versionMap$$[$key$jscomp$90_keys$$] || "";
  }
  var $tuple_userAgentString_versionTuples$$ = goog.labs.userAgent.util.getUserAgent();
  if (goog.labs.userAgent.browser.isIE()) {
    return goog.labs.userAgent.browser.getIEVersion_($tuple_userAgentString_versionTuples$$);
  }
  $tuple_userAgentString_versionTuples$$ = goog.labs.userAgent.util.extractVersionTuples($tuple_userAgentString_versionTuples$$);
  var $versionMap$$ = {};
  $tuple_userAgentString_versionTuples$$.forEach(function($tuple$$) {
    $versionMap$$[$tuple$$[0]] = $tuple$$[1];
  });
  var $versionMapHasKey$$ = goog.partial(module$contents$goog$object_containsKey, $versionMap$$);
  return goog.labs.userAgent.browser.isOpera() ? $lookUpValueWithKeys$$(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? $lookUpValueWithKeys$$(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? $lookUpValueWithKeys$$(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? $lookUpValueWithKeys$$(["Chrome", "CriOS", "HeadlessChrome"]) : ($tuple_userAgentString_versionTuples$$ = $tuple_userAgentString_versionTuples$$[2]) && $tuple_userAgentString_versionTuples$$[1] || "";
};
goog.labs.userAgent.browser.isVersionOrHigher = function $goog$labs$userAgent$browser$isVersionOrHigher$($version$$) {
  return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), $version$$);
};
goog.labs.userAgent.browser.getIEVersion_ = function $goog$labs$userAgent$browser$getIEVersion_$($tridentVersion_userAgent$$) {
  var $rv$jscomp$6_version$$ = /rv: *([\d\.]*)/.exec($tridentVersion_userAgent$$);
  if ($rv$jscomp$6_version$$ && $rv$jscomp$6_version$$[1]) {
    return $rv$jscomp$6_version$$[1];
  }
  $rv$jscomp$6_version$$ = "";
  var $msie$$ = /MSIE +([\d\.]+)/.exec($tridentVersion_userAgent$$);
  if ($msie$$ && $msie$$[1]) {
    if ($tridentVersion_userAgent$$ = /Trident\/(\d.\d)/.exec($tridentVersion_userAgent$$), "7.0" == $msie$$[1]) {
      if ($tridentVersion_userAgent$$ && $tridentVersion_userAgent$$[1]) {
        switch($tridentVersion_userAgent$$[1]) {
          case "4.0":
            $rv$jscomp$6_version$$ = "8.0";
            break;
          case "5.0":
            $rv$jscomp$6_version$$ = "9.0";
            break;
          case "6.0":
            $rv$jscomp$6_version$$ = "10.0";
            break;
          case "7.0":
            $rv$jscomp$6_version$$ = "11.0";
        }
      } else {
        $rv$jscomp$6_version$$ = "7.0";
      }
    } else {
      $rv$jscomp$6_version$$ = $msie$$[1];
    }
  }
  return $rv$jscomp$6_version$$;
};
goog.dom.asserts = {};
goog.dom.asserts.assertIsLocation = function $goog$dom$asserts$assertIsLocation$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    $win$$ && (!$o$$ || !($o$$ instanceof $win$$.Location) && $o$$ instanceof $win$$.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.assertIsElementType_ = function $goog$dom$asserts$assertIsElementType_$($o$$, $typename$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    $win$$ && "undefined" != typeof $win$$[$typename$$] && ($o$$ && ($o$$ instanceof $win$$[$typename$$] || !($o$$ instanceof $win$$.Location || $o$$ instanceof $win$$.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", $typename$$, goog.dom.asserts.debugStringForType_($o$$)));
  }
  return $o$$;
};
goog.dom.asserts.assertIsHTMLAnchorElement = function $goog$dom$asserts$assertIsHTMLAnchorElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLAnchorElement");
};
goog.dom.asserts.assertIsHTMLButtonElement = function $goog$dom$asserts$assertIsHTMLButtonElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLButtonElement");
};
goog.dom.asserts.assertIsHTMLLinkElement = function $goog$dom$asserts$assertIsHTMLLinkElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLLinkElement");
};
goog.dom.asserts.assertIsHTMLImageElement = function $goog$dom$asserts$assertIsHTMLImageElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLImageElement");
};
goog.dom.asserts.assertIsHTMLAudioElement = function $goog$dom$asserts$assertIsHTMLAudioElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLAudioElement");
};
goog.dom.asserts.assertIsHTMLVideoElement = function $goog$dom$asserts$assertIsHTMLVideoElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLVideoElement");
};
goog.dom.asserts.assertIsHTMLInputElement = function $goog$dom$asserts$assertIsHTMLInputElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLInputElement");
};
goog.dom.asserts.assertIsHTMLTextAreaElement = function $goog$dom$asserts$assertIsHTMLTextAreaElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLTextAreaElement");
};
goog.dom.asserts.assertIsHTMLCanvasElement = function $goog$dom$asserts$assertIsHTMLCanvasElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLCanvasElement");
};
goog.dom.asserts.assertIsHTMLEmbedElement = function $goog$dom$asserts$assertIsHTMLEmbedElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLEmbedElement");
};
goog.dom.asserts.assertIsHTMLFormElement = function $goog$dom$asserts$assertIsHTMLFormElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLFormElement");
};
goog.dom.asserts.assertIsHTMLFrameElement = function $goog$dom$asserts$assertIsHTMLFrameElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLFrameElement");
};
goog.dom.asserts.assertIsHTMLIFrameElement = function $goog$dom$asserts$assertIsHTMLIFrameElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLIFrameElement");
};
goog.dom.asserts.assertIsHTMLObjectElement = function $goog$dom$asserts$assertIsHTMLObjectElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLObjectElement");
};
goog.dom.asserts.assertIsHTMLScriptElement = function $goog$dom$asserts$assertIsHTMLScriptElement$($o$$) {
  return goog.dom.asserts.assertIsElementType_($o$$, "HTMLScriptElement");
};
goog.dom.asserts.debugStringForType_ = function $goog$dom$asserts$debugStringForType_$($value$$) {
  if (goog.isObject($value$$)) {
    try {
      return $value$$.constructor.displayName || $value$$.constructor.name || Object.prototype.toString.call($value$$);
    } catch ($e$$) {
      return "<object could not be stringified>";
    }
  } else {
    return void 0 === $value$$ ? "undefined" : null === $value$$ ? "null" : typeof $value$$;
  }
};
goog.dom.asserts.getWindow_ = function $goog$dom$asserts$getWindow_$($o$$) {
  try {
    var $doc$$ = $o$$ && $o$$.ownerDocument, $win$$ = $doc$$ && ($doc$$.defaultView || $doc$$.parentWindow);
    $win$$ = $win$$ || goog.global;
    if ($win$$.Element && $win$$.Location) {
      return $win$$;
    }
  } catch ($ex$$) {
  }
  return null;
};
goog.functions = {};
goog.functions.constant = function $goog$functions$constant$($retValue$$) {
  return function() {
    return $retValue$$;
  };
};
goog.functions.FALSE = function $goog$functions$FALSE$() {
  return !1;
};
goog.functions.TRUE = function $goog$functions$TRUE$() {
  return !0;
};
goog.functions.NULL = function $goog$functions$NULL$() {
  return null;
};
goog.functions.UNDEFINED = function $goog$functions$UNDEFINED$() {
};
goog.functions.EMPTY = goog.functions.UNDEFINED;
goog.functions.identity = function $goog$functions$identity$($opt_returnValue$$, $var_args$$) {
  return $opt_returnValue$$;
};
goog.functions.error = function $goog$functions$error$($message$$) {
  return function() {
    throw Error($message$$);
  };
};
goog.functions.fail = function $goog$functions$fail$($err$$) {
  return function() {
    throw $err$$;
  };
};
goog.functions.lock = function $goog$functions$lock$($f$$, $opt_numArgs$$) {
  $opt_numArgs$$ = $opt_numArgs$$ || 0;
  return function() {
    return $f$$.apply(this, Array.prototype.slice.call(arguments, 0, $opt_numArgs$$));
  };
};
goog.functions.nth = function $goog$functions$nth$($n$$) {
  return function() {
    return arguments[$n$$];
  };
};
goog.functions.partialRight = function $goog$functions$partialRight$($fn$$, $var_args$$) {
  var $rightArgs$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $self$$ = this;
    $self$$ === goog.global && ($self$$ = void 0);
    var $newArgs$$ = Array.prototype.slice.call(arguments);
    $newArgs$$.push.apply($newArgs$$, $rightArgs$$);
    return $fn$$.apply($self$$, $newArgs$$);
  };
};
goog.functions.withReturnValue = function $goog$functions$withReturnValue$($f$$, $retValue$$) {
  return goog.functions.sequence($f$$, goog.functions.constant($retValue$$));
};
goog.functions.equalTo = function $goog$functions$equalTo$($value$$, $opt_useLooseComparison$$) {
  return function($other$$) {
    return $opt_useLooseComparison$$ ? $value$$ == $other$$ : $value$$ === $other$$;
  };
};
goog.functions.compose = function $goog$functions$compose$($fn$$, $var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    var $result$$;
    $length$$ && ($result$$ = $functions$$[$length$$ - 1].apply(this, arguments));
    for (var $i$$ = $length$$ - 2; 0 <= $i$$; $i$$--) {
      $result$$ = $functions$$[$i$$].call(this, $result$$);
    }
    return $result$$;
  };
};
goog.functions.sequence = function $goog$functions$sequence$($var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    for (var $result$$, $i$$ = 0; $i$$ < $length$$; $i$$++) {
      $result$$ = $functions$$[$i$$].apply(this, arguments);
    }
    return $result$$;
  };
};
goog.functions.and = function $goog$functions$and$($var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    for (var $i$$ = 0; $i$$ < $length$$; $i$$++) {
      if (!$functions$$[$i$$].apply(this, arguments)) {
        return !1;
      }
    }
    return !0;
  };
};
goog.functions.or = function $goog$functions$or$($var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    for (var $i$$ = 0; $i$$ < $length$$; $i$$++) {
      if ($functions$$[$i$$].apply(this, arguments)) {
        return !0;
      }
    }
    return !1;
  };
};
goog.functions.not = function $goog$functions$not$($f$$) {
  return function() {
    return !$f$$.apply(this, arguments);
  };
};
goog.functions.create = function $goog$functions$create$($constructor$$, $var_args$$) {
  var $obj$$ = function $$obj$$$() {
  };
  $obj$$.prototype = $constructor$$.prototype;
  $obj$$ = new $obj$$;
  $constructor$$.apply($obj$$, Array.prototype.slice.call(arguments, 1));
  return $obj$$;
};
goog.functions.CACHE_RETURN_VALUE = !0;
goog.functions.cacheReturnValue = function $goog$functions$cacheReturnValue$($fn$$) {
  var $called$$ = !1, $value$$;
  return function() {
    if (!goog.functions.CACHE_RETURN_VALUE) {
      return $fn$$();
    }
    $called$$ || ($value$$ = $fn$$(), $called$$ = !0);
    return $value$$;
  };
};
goog.functions.once = function $goog$functions$once$($f$$) {
  var $inner$$ = $f$$;
  return function() {
    if ($inner$$) {
      var $tmp$$ = $inner$$;
      $inner$$ = null;
      $tmp$$();
    }
  };
};
goog.functions.debounce = function $goog$functions$debounce$($f$$, $interval$$, $opt_scope$$) {
  var $timeout$$ = 0;
  return function($var_args$$) {
    goog.global.clearTimeout($timeout$$);
    var $args$$ = arguments;
    $timeout$$ = goog.global.setTimeout(function() {
      $f$$.apply($opt_scope$$, $args$$);
    }, $interval$$);
  };
};
goog.functions.throttle = function $goog$functions$throttle$($f$$, $interval$$, $opt_scope$$) {
  var $timeout$$ = 0, $shouldFire$$ = !1, $storedArgs$$ = [], $handleTimeout$$ = function $$handleTimeout$$$() {
    $timeout$$ = 0;
    $shouldFire$$ && ($shouldFire$$ = !1, $fire$$());
  }, $fire$$ = function $$fire$$$() {
    $timeout$$ = goog.global.setTimeout($handleTimeout$$, $interval$$);
    var $args$$ = $storedArgs$$;
    $storedArgs$$ = [];
    $f$$.apply($opt_scope$$, $args$$);
  };
  return function($var_args$$) {
    $storedArgs$$ = arguments;
    $timeout$$ ? $shouldFire$$ = !0 : $fire$$();
  };
};
goog.functions.rateLimit = function $goog$functions$rateLimit$($f$$, $interval$$, $opt_scope$$) {
  var $timeout$$ = 0, $handleTimeout$$ = function $$handleTimeout$$$() {
    $timeout$$ = 0;
  };
  return function($var_args$$) {
    $timeout$$ || ($timeout$$ = goog.global.setTimeout($handleTimeout$$, $interval$$), $f$$.apply($opt_scope$$, arguments));
  };
};
goog.functions.isFunction = function $goog$functions$isFunction$($val$$) {
  return "function" === typeof $val$$;
};
goog.string.TypedString = function $goog$string$TypedString$() {
};
goog.string.Const = function $goog$string$Const$($opt_token$$, $opt_content$$) {
  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = $opt_token$$ === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && $opt_content$$ || "";
  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
};
goog.string.Const.prototype.implementsGoogStringTypedString = !0;
goog.string.Const.prototype.getTypedStringValue = function $goog$string$Const$$getTypedStringValue$() {
  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
};
goog.DEBUG && (goog.string.Const.prototype.toString = function $goog$string$Const$$toString$() {
  return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
});
goog.string.Const.unwrap = function $goog$string$Const$unwrap$($stringConst$$) {
  if ($stringConst$$ instanceof goog.string.Const && $stringConst$$.constructor === goog.string.Const && $stringConst$$.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_) {
    return $stringConst$$.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
  }
  goog.asserts.fail("expected object of type Const, got '" + $stringConst$$ + "'");
  return "type_error:Const";
};
goog.string.Const.from = function $goog$string$Const$from$($s$$) {
  return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, $s$$);
};
goog.string.Const.TYPE_MARKER_ = {};
goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.string.Const.EMPTY = goog.string.Const.from("");
goog.i18n = {};
goog.i18n.bidi = {};
goog.i18n.bidi.FORCE_RTL = !1;
goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 
2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 
7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || 
"nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase());
goog.i18n.bidi.Format = {LRE:"\u202a", RLE:"\u202b", PDF:"\u202c", LRM:"\u200e", RLM:"\u200f"};
goog.i18n.bidi.Dir = {LTR:1, RTL:-1, NEUTRAL:0};
goog.i18n.bidi.RIGHT = "right";
goog.i18n.bidi.LEFT = "left";
goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
goog.i18n.bidi.toDir = function $goog$i18n$bidi$toDir$($givenDir$$, $opt_noNeutral$$) {
  return "number" == typeof $givenDir$$ ? 0 < $givenDir$$ ? goog.i18n.bidi.Dir.LTR : 0 > $givenDir$$ ? goog.i18n.bidi.Dir.RTL : $opt_noNeutral$$ ? null : goog.i18n.bidi.Dir.NEUTRAL : null == $givenDir$$ ? null : $givenDir$$ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
};
goog.i18n.bidi.ltrChars_ = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
goog.i18n.bidi.rtlChars_ = "\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
goog.i18n.bidi.stripHtmlIfNeeded_ = function $goog$i18n$bidi$stripHtmlIfNeeded_$($str$$, $opt_isStripNeeded$$) {
  return $opt_isStripNeeded$$ ? $str$$.replace(goog.i18n.bidi.htmlSkipReg_, "") : $str$$;
};
goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.hasAnyRtl = function $goog$i18n$bidi$hasAnyRtl$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
goog.i18n.bidi.hasAnyLtr = function $goog$i18n$bidi$hasAnyLtr$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.isRtlChar = function $goog$i18n$bidi$isRtlChar$($str$$) {
  return goog.i18n.bidi.rtlRe_.test($str$$);
};
goog.i18n.bidi.isLtrChar = function $goog$i18n$bidi$isLtrChar$($str$$) {
  return goog.i18n.bidi.ltrRe_.test($str$$);
};
goog.i18n.bidi.isNeutralChar = function $goog$i18n$bidi$isNeutralChar$($str$$) {
  return !goog.i18n.bidi.isLtrChar($str$$) && !goog.i18n.bidi.isRtlChar($str$$);
};
goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.startsWithRtl = function $goog$i18n$bidi$startsWithRtl$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
goog.i18n.bidi.startsWithLtr = function $goog$i18n$bidi$startsWithLtr$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
goog.i18n.bidi.isNeutralText = function $goog$i18n$bidi$isNeutralText$($str$$, $opt_isHtml$$) {
  $str$$ = goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$);
  return goog.i18n.bidi.isRequiredLtrRe_.test($str$$) || !goog.i18n.bidi.hasAnyLtr($str$$) && !goog.i18n.bidi.hasAnyRtl($str$$);
};
goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
goog.i18n.bidi.endsWithLtr = function $goog$i18n$bidi$endsWithLtr$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
goog.i18n.bidi.endsWithRtl = function $goog$i18n$bidi$endsWithRtl$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
goog.i18n.bidi.isRtlLanguage = function $goog$i18n$bidi$isRtlLanguage$($lang$$) {
  return goog.i18n.bidi.rtlLocalesRe_.test($lang$$);
};
goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
goog.i18n.bidi.guardBracketInText = function $goog$i18n$bidi$guardBracketInText$($s$$, $mark_opt_isRtlContext$$) {
  $mark_opt_isRtlContext$$ = (void 0 === $mark_opt_isRtlContext$$ ? goog.i18n.bidi.hasAnyRtl($s$$) : $mark_opt_isRtlContext$$) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
  return $s$$.replace(goog.i18n.bidi.bracketGuardTextRe_, $mark_opt_isRtlContext$$ + "$&" + $mark_opt_isRtlContext$$);
};
goog.i18n.bidi.enforceRtlInHtml = function $goog$i18n$bidi$enforceRtlInHtml$($html$$) {
  return "<" == $html$$.charAt(0) ? $html$$.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + $html$$ + "</span>";
};
goog.i18n.bidi.enforceRtlInText = function $goog$i18n$bidi$enforceRtlInText$($text$$) {
  return goog.i18n.bidi.Format.RLE + $text$$ + goog.i18n.bidi.Format.PDF;
};
goog.i18n.bidi.enforceLtrInHtml = function $goog$i18n$bidi$enforceLtrInHtml$($html$$) {
  return "<" == $html$$.charAt(0) ? $html$$.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + $html$$ + "</span>";
};
goog.i18n.bidi.enforceLtrInText = function $goog$i18n$bidi$enforceLtrInText$($text$$) {
  return goog.i18n.bidi.Format.LRE + $text$$ + goog.i18n.bidi.Format.PDF;
};
goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
goog.i18n.bidi.leftRe_ = /left/gi;
goog.i18n.bidi.rightRe_ = /right/gi;
goog.i18n.bidi.tempRe_ = /%%%%/g;
goog.i18n.bidi.mirrorCSS = function $goog$i18n$bidi$mirrorCSS$($cssStr$$) {
  return $cssStr$$.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
};
goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
goog.i18n.bidi.normalizeHebrewQuote = function $goog$i18n$bidi$normalizeHebrewQuote$($str$$) {
  return $str$$.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05f3");
};
goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
goog.i18n.bidi.rtlDetectionThreshold_ = 0.40;
goog.i18n.bidi.estimateDirection = function $goog$i18n$bidi$estimateDirection$($str$$, $i$jscomp$79_opt_isHtml$$) {
  var $rtlCount$$ = 0, $totalCount$$ = 0, $hasWeaklyLtr$$ = !1;
  $str$$ = goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $i$jscomp$79_opt_isHtml$$).split(goog.i18n.bidi.wordSeparatorRe_);
  for ($i$jscomp$79_opt_isHtml$$ = 0; $i$jscomp$79_opt_isHtml$$ < $str$$.length; $i$jscomp$79_opt_isHtml$$++) {
    var $token$$ = $str$$[$i$jscomp$79_opt_isHtml$$];
    goog.i18n.bidi.startsWithRtl($token$$) ? ($rtlCount$$++, $totalCount$$++) : goog.i18n.bidi.isRequiredLtrRe_.test($token$$) ? $hasWeaklyLtr$$ = !0 : goog.i18n.bidi.hasAnyLtr($token$$) ? $totalCount$$++ : goog.i18n.bidi.hasNumeralsRe_.test($token$$) && ($hasWeaklyLtr$$ = !0);
  }
  return 0 == $totalCount$$ ? $hasWeaklyLtr$$ ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : $rtlCount$$ / $totalCount$$ > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
};
goog.i18n.bidi.detectRtlDirectionality = function $goog$i18n$bidi$detectRtlDirectionality$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.estimateDirection($str$$, $opt_isHtml$$) == goog.i18n.bidi.Dir.RTL;
};
goog.i18n.bidi.setElementDirAndAlign = function $goog$i18n$bidi$setElementDirAndAlign$($element$$, $dir$$) {
  $element$$ && ($dir$$ = goog.i18n.bidi.toDir($dir$$)) && ($element$$.style.textAlign = $dir$$ == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, $element$$.dir = $dir$$ == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
};
goog.i18n.bidi.setElementDirByTextDirectionality = function $goog$i18n$bidi$setElementDirByTextDirectionality$($element$$, $text$$) {
  switch(goog.i18n.bidi.estimateDirection($text$$)) {
    case goog.i18n.bidi.Dir.LTR:
      "ltr" !== $element$$.dir && ($element$$.dir = "ltr");
      break;
    case goog.i18n.bidi.Dir.RTL:
      "rtl" !== $element$$.dir && ($element$$.dir = "rtl");
      break;
    default:
      $element$$.removeAttribute("dir");
  }
};
goog.i18n.bidi.DirectionalString = function $goog$i18n$bidi$DirectionalString$() {
};
goog.html = {};
goog.html.trustedtypes = {};
goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function $goog$html$trustedtypes$getPolicyPrivateDoNotAccessOrElse$() {
  if (!goog.TRUSTED_TYPES_POLICY_NAME) {
    return null;
  }
  void 0 === goog.html.trustedtypes.cachedPolicy_ && (goog.html.trustedtypes.cachedPolicy_ = goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html"));
  return goog.html.trustedtypes.cachedPolicy_;
};
var module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeScript_SafeScript = function $module$contents$goog$html$SafeScript_SafeScript$($value$$, $token$$) {
  this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = $token$$ === module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE ? $value$$ : "";
  this.implementsGoogStringTypedString = !0;
};
module$contents$goog$html$SafeScript_SafeScript.fromConstant = function $module$contents$goog$html$SafeScript_SafeScript$fromConstant$($script$$) {
  $script$$ = goog.string.Const.unwrap($script$$);
  return 0 === $script$$.length ? module$contents$goog$html$SafeScript_SafeScript.EMPTY : module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse($script$$);
};
module$contents$goog$html$SafeScript_SafeScript.fromJson = function $module$contents$goog$html$SafeScript_SafeScript$fromJson$($val$$) {
  return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(module$contents$goog$html$SafeScript_SafeScript.stringify_($val$$));
};
module$contents$goog$html$SafeScript_SafeScript.prototype.getTypedStringValue = function $module$contents$goog$html$SafeScript_SafeScript$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
};
module$contents$goog$html$SafeScript_SafeScript.unwrap = function $module$contents$goog$html$SafeScript_SafeScript$unwrap$($safeScript$$) {
  return module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript($safeScript$$).toString();
};
module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript = function $module$contents$goog$html$SafeScript_SafeScript$unwrapTrustedScript$($safeScript$$) {
  if ($safeScript$$ instanceof module$contents$goog$html$SafeScript_SafeScript && $safeScript$$.constructor === module$contents$goog$html$SafeScript_SafeScript) {
    return $safeScript$$.privateDoNotAccessOrElseSafeScriptWrappedValue_;
  }
  (0,goog.asserts.fail)("expected object of type SafeScript, got '" + $safeScript$$ + "' of type " + goog.typeOf($safeScript$$));
  return "type_error:SafeScript";
};
module$contents$goog$html$SafeScript_SafeScript.stringify_ = function $module$contents$goog$html$SafeScript_SafeScript$stringify_$($val$$) {
  return JSON.stringify($val$$).replace(/</g, "\\x3c");
};
module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function $module$contents$goog$html$SafeScript_SafeScript$createSafeScriptSecurityPrivateDoNotAccessOrElse$($script$$) {
  var $policy$$ = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
  $script$$ = $policy$$ ? $policy$$.createScript($script$$) : $script$$;
  return new module$contents$goog$html$SafeScript_SafeScript($script$$, module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE);
};
module$contents$goog$html$SafeScript_SafeScript.prototype.toString = function $module$contents$goog$html$SafeScript_SafeScript$$toString$() {
  return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
};
module$contents$goog$html$SafeScript_SafeScript.EMPTY = function() {
  return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
}();
goog.html.SafeScript = module$contents$goog$html$SafeScript_SafeScript;
goog.fs = {};
goog.fs.url = {};
goog.fs.url.createObjectUrl = function $goog$fs$url$createObjectUrl$($obj$$) {
  return goog.fs.url.getUrlObject_().createObjectURL($obj$$);
};
goog.fs.url.revokeObjectUrl = function $goog$fs$url$revokeObjectUrl$($url$$) {
  goog.fs.url.getUrlObject_().revokeObjectURL($url$$);
};
goog.fs.url.UrlObject_ = function $goog$fs$url$UrlObject_$() {
};
goog.fs.url.UrlObject_.prototype.createObjectURL = function $goog$fs$url$UrlObject_$$createObjectURL$($arg$$) {
};
goog.fs.url.UrlObject_.prototype.revokeObjectURL = function $goog$fs$url$UrlObject_$$revokeObjectURL$($s$$) {
};
goog.fs.url.getUrlObject_ = function $goog$fs$url$getUrlObject_$() {
  var $urlObject$$ = goog.fs.url.findUrlObject_();
  if (null != $urlObject$$) {
    return $urlObject$$;
  }
  throw Error("This browser doesn't seem to support blob URLs");
};
goog.fs.url.findUrlObject_ = function $goog$fs$url$findUrlObject_$() {
  return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL ? goog.global.URL : void 0 !== goog.global.createObjectURL ? goog.global : null;
};
goog.fs.url.browserSupportsObjectUrls = function $goog$fs$url$browserSupportsObjectUrls$() {
  return null != goog.fs.url.findUrlObject_();
};
goog.fs.blob = {};
goog.fs.blob.getBlob = function $goog$fs$blob$getBlob$($var_args$$) {
  var $BlobBuilder$$ = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (void 0 !== $BlobBuilder$$) {
    $BlobBuilder$$ = new $BlobBuilder$$;
    for (var $i$$ = 0; $i$$ < arguments.length; $i$$++) {
      $BlobBuilder$$.append(arguments[$i$$]);
    }
    return $BlobBuilder$$.getBlob();
  }
  return goog.fs.blob.getBlobWithProperties(Array.prototype.slice.call(arguments));
};
goog.fs.blob.getBlobWithProperties = function $goog$fs$blob$getBlobWithProperties$($parts$$, $opt_type$$, $opt_endings$$) {
  var $BlobBuilder$jscomp$2_bb$jscomp$1_properties$$ = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (void 0 !== $BlobBuilder$jscomp$2_bb$jscomp$1_properties$$) {
    $BlobBuilder$jscomp$2_bb$jscomp$1_properties$$ = new $BlobBuilder$jscomp$2_bb$jscomp$1_properties$$;
    for (var $i$$ = 0; $i$$ < $parts$$.length; $i$$++) {
      $BlobBuilder$jscomp$2_bb$jscomp$1_properties$$.append($parts$$[$i$$], $opt_endings$$);
    }
    return $BlobBuilder$jscomp$2_bb$jscomp$1_properties$$.getBlob($opt_type$$);
  }
  if (void 0 !== goog.global.Blob) {
    return $BlobBuilder$jscomp$2_bb$jscomp$1_properties$$ = {}, $opt_type$$ && ($BlobBuilder$jscomp$2_bb$jscomp$1_properties$$.type = $opt_type$$), $opt_endings$$ && ($BlobBuilder$jscomp$2_bb$jscomp$1_properties$$.endings = $opt_endings$$), new Blob($parts$$, $BlobBuilder$jscomp$2_bb$jscomp$1_properties$$);
  }
  throw Error("This browser doesn't seem to support creating Blobs");
};
goog.html.TrustedResourceUrl = function $goog$html$TrustedResourceUrl$($value$$, $token$$) {
  this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = $token$$ === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? $value$$ : "";
};
goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0;
goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function $goog$html$TrustedResourceUrl$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
};
goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
goog.html.TrustedResourceUrl.prototype.getDirection = function $goog$html$TrustedResourceUrl$$getDirection$() {
  return goog.i18n.bidi.Dir.LTR;
};
goog.html.TrustedResourceUrl.prototype.cloneWithParams = function $goog$html$TrustedResourceUrl$$cloneWithParams$($searchParams$$, $opt_hashParams$$) {
  var $parts$jscomp$4_url$$ = goog.html.TrustedResourceUrl.unwrap(this);
  $parts$jscomp$4_url$$ = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec($parts$jscomp$4_url$$);
  var $urlHash$$ = $parts$jscomp$4_url$$[3] || "";
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse($parts$jscomp$4_url$$[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", $parts$jscomp$4_url$$[2] || "", $searchParams$$) + goog.html.TrustedResourceUrl.stringifyParams_("#", $urlHash$$, $opt_hashParams$$));
};
goog.html.TrustedResourceUrl.prototype.toString = function $goog$html$TrustedResourceUrl$$toString$() {
  return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "";
};
goog.html.TrustedResourceUrl.unwrap = function $goog$html$TrustedResourceUrl$unwrap$($trustedResourceUrl$$) {
  return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL($trustedResourceUrl$$).toString();
};
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$($trustedResourceUrl$$) {
  if ($trustedResourceUrl$$ instanceof goog.html.TrustedResourceUrl && $trustedResourceUrl$$.constructor === goog.html.TrustedResourceUrl) {
    return $trustedResourceUrl$$.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
  }
  goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + $trustedResourceUrl$$ + "' of type " + goog.typeOf($trustedResourceUrl$$));
  return "type_error:TrustedResourceUrl";
};
goog.html.TrustedResourceUrl.format = function $goog$html$TrustedResourceUrl$format$($format$jscomp$16_result$$, $args$$) {
  var $formatStr$$ = goog.string.Const.unwrap($format$jscomp$16_result$$);
  if (!goog.html.TrustedResourceUrl.BASE_URL_.test($formatStr$$)) {
    throw Error("Invalid TrustedResourceUrl format: " + $formatStr$$);
  }
  $format$jscomp$16_result$$ = $formatStr$$.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function($arg$jscomp$8_match$$, $id$$) {
    if (!Object.prototype.hasOwnProperty.call($args$$, $id$$)) {
      throw Error('Found marker, "' + $id$$ + '", in format string, "' + $formatStr$$ + '", but no valid label mapping found in args: ' + JSON.stringify($args$$));
    }
    $arg$jscomp$8_match$$ = $args$$[$id$$];
    return $arg$jscomp$8_match$$ instanceof goog.string.Const ? goog.string.Const.unwrap($arg$jscomp$8_match$$) : encodeURIComponent(String($arg$jscomp$8_match$$));
  });
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse($format$jscomp$16_result$$);
};
goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams = function $goog$html$TrustedResourceUrl$formatWithParams$($format$$, $args$$, $searchParams$$, $opt_hashParams$$) {
  return goog.html.TrustedResourceUrl.format($format$$, $args$$).cloneWithParams($searchParams$$, $opt_hashParams$$);
};
goog.html.TrustedResourceUrl.fromConstant = function $goog$html$TrustedResourceUrl$fromConstant$($url$$) {
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap($url$$));
};
goog.html.TrustedResourceUrl.fromConstants = function $goog$html$TrustedResourceUrl$fromConstants$($parts$$) {
  for (var $unwrapped$$ = "", $i$$ = 0; $i$$ < $parts$$.length; $i$$++) {
    $unwrapped$$ += goog.string.Const.unwrap($parts$$[$i$$]);
  }
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse($unwrapped$$);
};
goog.html.TrustedResourceUrl.fromSafeScript = function $goog$html$TrustedResourceUrl$fromSafeScript$($blob$jscomp$12_safeScript$jscomp$2_url$$) {
  $blob$jscomp$12_safeScript$jscomp$2_url$$ = goog.fs.blob.getBlobWithProperties([module$contents$goog$html$SafeScript_SafeScript.unwrap($blob$jscomp$12_safeScript$jscomp$2_url$$)], "text/javascript");
  $blob$jscomp$12_safeScript$jscomp$2_url$$ = goog.fs.url.createObjectUrl($blob$jscomp$12_safeScript$jscomp$2_url$$);
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse($blob$jscomp$12_safeScript$jscomp$2_url$$);
};
goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function $goog$html$TrustedResourceUrl$createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse$($url$jscomp$27_value$$) {
  var $policy$$ = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
  $url$jscomp$27_value$$ = $policy$$ ? $policy$$.createScriptURL($url$jscomp$27_value$$) : $url$jscomp$27_value$$;
  return new goog.html.TrustedResourceUrl($url$jscomp$27_value$$, goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
};
goog.html.TrustedResourceUrl.stringifyParams_ = function $goog$html$TrustedResourceUrl$stringifyParams_$($prefix$$, $currentString$$, $params$$) {
  if (null == $params$$) {
    return $currentString$$;
  }
  if ("string" === typeof $params$$) {
    return $params$$ ? $prefix$$ + encodeURIComponent($params$$) : "";
  }
  for (var $key$$ in $params$$) {
    if (Object.prototype.hasOwnProperty.call($params$$, $key$$)) {
      var $outputValues_value$$ = $params$$[$key$$];
      $outputValues_value$$ = Array.isArray($outputValues_value$$) ? $outputValues_value$$ : [$outputValues_value$$];
      for (var $i$$ = 0; $i$$ < $outputValues_value$$.length; $i$$++) {
        var $outputValue$$ = $outputValues_value$$[$i$$];
        null != $outputValue$$ && ($currentString$$ || ($currentString$$ = $prefix$$), $currentString$$ += ($currentString$$.length > $prefix$$.length ? "&" : "") + encodeURIComponent($key$$) + "=" + encodeURIComponent(String($outputValue$$)));
      }
    }
  }
  return $currentString$$;
};
goog.html.SafeUrl = function $goog$html$SafeUrl$($value$$, $token$$) {
  this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = $token$$ === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? $value$$ : "";
};
goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0;
goog.html.SafeUrl.prototype.getTypedStringValue = function $goog$html$SafeUrl$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
goog.html.SafeUrl.prototype.getDirection = function $goog$html$SafeUrl$$getDirection$() {
  return goog.i18n.bidi.Dir.LTR;
};
goog.html.SafeUrl.prototype.toString = function $goog$html$SafeUrl$$toString$() {
  return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog.html.SafeUrl.unwrap = function $goog$html$SafeUrl$unwrap$($safeUrl$$) {
  if ($safeUrl$$ instanceof goog.html.SafeUrl && $safeUrl$$.constructor === goog.html.SafeUrl) {
    return $safeUrl$$.privateDoNotAccessOrElseSafeUrlWrappedValue_;
  }
  goog.asserts.fail("expected object of type SafeUrl, got '" + $safeUrl$$ + "' of type " + goog.typeOf($safeUrl$$));
  return "type_error:SafeUrl";
};
goog.html.SafeUrl.fromConstant = function $goog$html$SafeUrl$fromConstant$($url$$) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap($url$$));
};
goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;
goog.html.SafeUrl.isSafeMimeType = function $goog$html$SafeUrl$isSafeMimeType$($mimeType$$) {
  return goog.html.SAFE_MIME_TYPE_PATTERN_.test($mimeType$$);
};
goog.html.SafeUrl.fromBlob = function $goog$html$SafeUrl$fromBlob$($blob$jscomp$13_url$$) {
  $blob$jscomp$13_url$$ = goog.html.SafeUrl.isSafeMimeType($blob$jscomp$13_url$$.type) ? goog.fs.url.createObjectUrl($blob$jscomp$13_url$$) : goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($blob$jscomp$13_url$$);
};
goog.html.SafeUrl.revokeObjectUrl = function $goog$html$SafeUrl$revokeObjectUrl$($safeUrl$jscomp$1_url$$) {
  $safeUrl$jscomp$1_url$$ = $safeUrl$jscomp$1_url$$.getTypedStringValue();
  $safeUrl$jscomp$1_url$$ !== goog.html.SafeUrl.INNOCUOUS_STRING && goog.fs.url.revokeObjectUrl($safeUrl$jscomp$1_url$$);
};
goog.html.SafeUrl.fromMediaSource = function $goog$html$SafeUrl$fromMediaSource$($mediaSource_url$$) {
  goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource");
  $mediaSource_url$$ = $mediaSource_url$$ instanceof MediaSource ? goog.fs.url.createObjectUrl($mediaSource_url$$) : goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($mediaSource_url$$);
};
goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
goog.html.SafeUrl.tryFromDataUrl = function $goog$html$SafeUrl$tryFromDataUrl$($dataUrl_filteredDataUrl$$) {
  $dataUrl_filteredDataUrl$$ = String($dataUrl_filteredDataUrl$$);
  $dataUrl_filteredDataUrl$$ = $dataUrl_filteredDataUrl$$.replace(/(%0A|%0D)/g, "");
  var $match$$ = $dataUrl_filteredDataUrl$$.match(goog.html.DATA_URL_PATTERN_);
  return $match$$ && goog.html.SafeUrl.isSafeMimeType($match$$[1]) ? goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($dataUrl_filteredDataUrl$$) : null;
};
goog.html.SafeUrl.fromDataUrl = function $goog$html$SafeUrl$fromDataUrl$($dataUrl$$) {
  return goog.html.SafeUrl.tryFromDataUrl($dataUrl$$) || goog.html.SafeUrl.INNOCUOUS_URL;
};
goog.html.SafeUrl.fromTelUrl = function $goog$html$SafeUrl$fromTelUrl$($telUrl$$) {
  goog.string.internal.caseInsensitiveStartsWith($telUrl$$, "tel:") || ($telUrl$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($telUrl$$);
};
goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
goog.html.SafeUrl.fromSipUrl = function $goog$html$SafeUrl$fromSipUrl$($sipUrl$$) {
  goog.html.SIP_URL_PATTERN_.test(decodeURIComponent($sipUrl$$)) || ($sipUrl$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($sipUrl$$);
};
goog.html.SafeUrl.fromFacebookMessengerUrl = function $goog$html$SafeUrl$fromFacebookMessengerUrl$($facebookMessengerUrl$$) {
  goog.string.internal.caseInsensitiveStartsWith($facebookMessengerUrl$$, "fb-messenger://share") || ($facebookMessengerUrl$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($facebookMessengerUrl$$);
};
goog.html.SafeUrl.fromWhatsAppUrl = function $goog$html$SafeUrl$fromWhatsAppUrl$($whatsAppUrl$$) {
  goog.string.internal.caseInsensitiveStartsWith($whatsAppUrl$$, "whatsapp://send") || ($whatsAppUrl$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($whatsAppUrl$$);
};
goog.html.SafeUrl.fromSmsUrl = function $goog$html$SafeUrl$fromSmsUrl$($smsUrl$$) {
  goog.string.internal.caseInsensitiveStartsWith($smsUrl$$, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_($smsUrl$$) || ($smsUrl$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($smsUrl$$);
};
goog.html.SafeUrl.isSmsUrlBodyValid_ = function $goog$html$SafeUrl$isSmsUrlBodyValid_$($bodyValue_smsUrl$$) {
  var $bodyParams_hash$$ = $bodyValue_smsUrl$$.indexOf("#");
  0 < $bodyParams_hash$$ && ($bodyValue_smsUrl$$ = $bodyValue_smsUrl$$.substring(0, $bodyParams_hash$$));
  $bodyParams_hash$$ = $bodyValue_smsUrl$$.match(/[?&]body=/gi);
  if (!$bodyParams_hash$$) {
    return !0;
  }
  if (1 < $bodyParams_hash$$.length) {
    return !1;
  }
  $bodyValue_smsUrl$$ = $bodyValue_smsUrl$$.match(/[?&]body=([^&]*)/)[1];
  if (!$bodyValue_smsUrl$$) {
    return !0;
  }
  try {
    decodeURIComponent($bodyValue_smsUrl$$);
  } catch ($error$$) {
    return !1;
  }
  return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test($bodyValue_smsUrl$$);
};
goog.html.SafeUrl.fromSshUrl = function $goog$html$SafeUrl$fromSshUrl$($sshUrl$$) {
  goog.string.internal.caseInsensitiveStartsWith($sshUrl$$, "ssh://") || ($sshUrl$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($sshUrl$$);
};
goog.html.SafeUrl.sanitizeChromeExtensionUrl = function $goog$html$SafeUrl$sanitizeChromeExtensionUrl$($url$$, $extensionId$$) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, $url$$, $extensionId$$);
};
goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function $goog$html$SafeUrl$sanitizeFirefoxExtensionUrl$($url$$, $extensionId$$) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, $url$$, $extensionId$$);
};
goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function $goog$html$SafeUrl$sanitizeEdgeExtensionUrl$($url$$, $extensionId$$) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, $url$$, $extensionId$$);
};
goog.html.SafeUrl.sanitizeExtensionUrl_ = function $goog$html$SafeUrl$sanitizeExtensionUrl_$($extractedExtensionId_matches_scheme$$, $url$$, $extensionId$$) {
  ($extractedExtensionId_matches_scheme$$ = $extractedExtensionId_matches_scheme$$.exec($url$$)) ? ($extractedExtensionId_matches_scheme$$ = $extractedExtensionId_matches_scheme$$[1], -1 == ($extensionId$$ instanceof goog.string.Const ? [goog.string.Const.unwrap($extensionId$$)] : $extensionId$$.map(function unwrap($x$$) {
    return goog.string.Const.unwrap($x$$);
  })).indexOf($extractedExtensionId_matches_scheme$$) && ($url$$ = goog.html.SafeUrl.INNOCUOUS_STRING)) : $url$$ = goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($url$$);
};
goog.html.SafeUrl.fromTrustedResourceUrl = function $goog$html$SafeUrl$fromTrustedResourceUrl$($trustedResourceUrl$$) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap($trustedResourceUrl$$));
};
goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
goog.html.SafeUrl.trySanitize = function $goog$html$SafeUrl$trySanitize$($url$$) {
  if ($url$$ instanceof goog.html.SafeUrl) {
    return $url$$;
  }
  $url$$ = "object" == typeof $url$$ && $url$$.implementsGoogStringTypedString ? $url$$.getTypedStringValue() : String($url$$);
  return goog.html.SAFE_URL_PATTERN_.test($url$$) ? goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($url$$) : goog.html.SafeUrl.tryFromDataUrl($url$$);
};
goog.html.SafeUrl.sanitize = function $goog$html$SafeUrl$sanitize$($url$$) {
  return goog.html.SafeUrl.trySanitize($url$$) || goog.html.SafeUrl.INNOCUOUS_URL;
};
goog.html.SafeUrl.sanitizeAssertUnchanged = function $goog$html$SafeUrl$sanitizeAssertUnchanged$($url$$, $opt_allowDataUrl_safeUrl$$) {
  if ($url$$ instanceof goog.html.SafeUrl) {
    return $url$$;
  }
  $url$$ = "object" == typeof $url$$ && $url$$.implementsGoogStringTypedString ? $url$$.getTypedStringValue() : String($url$$);
  if ($opt_allowDataUrl_safeUrl$$ && /^data:/i.test($url$$) && ($opt_allowDataUrl_safeUrl$$ = goog.html.SafeUrl.fromDataUrl($url$$), $opt_allowDataUrl_safeUrl$$.getTypedStringValue() == $url$$)) {
    return $opt_allowDataUrl_safeUrl$$;
  }
  goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test($url$$), "%s does not match the safe URL pattern", $url$$) || ($url$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($url$$);
};
goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function $goog$html$SafeUrl$createSafeUrlSecurityPrivateDoNotAccessOrElse$($url$$) {
  return new goog.html.SafeUrl($url$$, goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
};
goog.html.SafeUrl.INNOCUOUS_URL = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.SafeUrl.INNOCUOUS_STRING);
goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
var module$contents$goog$html$SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeStyle_SafeStyle = function $module$contents$goog$html$SafeStyle_SafeStyle$($value$$, $token$$) {
  this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = $token$$ === module$contents$goog$html$SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE ? $value$$ : "";
  this.implementsGoogStringTypedString = !0;
};
module$contents$goog$html$SafeStyle_SafeStyle.fromConstant = function $module$contents$goog$html$SafeStyle_SafeStyle$fromConstant$($style_styleString$$) {
  $style_styleString$$ = goog.string.Const.unwrap($style_styleString$$);
  if (0 === $style_styleString$$.length) {
    return module$contents$goog$html$SafeStyle_SafeStyle.EMPTY;
  }
  (0,goog.asserts.assert)((0,goog.string.internal.endsWith)($style_styleString$$, ";"), "Last character of style string is not ';': " + $style_styleString$$);
  (0,goog.asserts.assert)((0,goog.string.internal.contains)($style_styleString$$, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + $style_styleString$$);
  return module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse($style_styleString$$);
};
module$contents$goog$html$SafeStyle_SafeStyle.prototype.getTypedStringValue = function $module$contents$goog$html$SafeStyle_SafeStyle$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
};
module$contents$goog$html$SafeStyle_SafeStyle.prototype.toString = function $module$contents$goog$html$SafeStyle_SafeStyle$$toString$() {
  return this.privateDoNotAccessOrElseSafeStyleWrappedValue_.toString();
};
module$contents$goog$html$SafeStyle_SafeStyle.unwrap = function $module$contents$goog$html$SafeStyle_SafeStyle$unwrap$($safeStyle$$) {
  if ($safeStyle$$ instanceof module$contents$goog$html$SafeStyle_SafeStyle && $safeStyle$$.constructor === module$contents$goog$html$SafeStyle_SafeStyle) {
    return $safeStyle$$.privateDoNotAccessOrElseSafeStyleWrappedValue_;
  }
  (0,goog.asserts.fail)("expected object of type SafeStyle, got '" + $safeStyle$$ + "' of type " + goog.typeOf($safeStyle$$));
  return "type_error:SafeStyle";
};
module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function $module$contents$goog$html$SafeStyle_SafeStyle$createSafeStyleSecurityPrivateDoNotAccessOrElse$($style$$) {
  return new module$contents$goog$html$SafeStyle_SafeStyle($style$$, module$contents$goog$html$SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE);
};
module$contents$goog$html$SafeStyle_SafeStyle.create = function $module$contents$goog$html$SafeStyle_SafeStyle$create$($map$$) {
  var $style$$ = "", $name$$;
  for ($name$$ in $map$$) {
    if (Object.prototype.hasOwnProperty.call($map$$, $name$$)) {
      if (!/^[-_a-zA-Z0-9]+$/.test($name$$)) {
        throw Error("Name allows only [-_a-zA-Z0-9], got: " + $name$$);
      }
      var $value$$ = $map$$[$name$$];
      null != $value$$ && ($value$$ = Array.isArray($value$$) ? $value$$.map(module$contents$goog$html$SafeStyle_sanitizePropertyValue).join(" ") : module$contents$goog$html$SafeStyle_sanitizePropertyValue($value$$), $style$$ += $name$$ + ":" + $value$$ + ";");
    }
  }
  return $style$$ ? module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse($style$$) : module$contents$goog$html$SafeStyle_SafeStyle.EMPTY;
};
module$contents$goog$html$SafeStyle_SafeStyle.concat = function $module$contents$goog$html$SafeStyle_SafeStyle$concat$($var_args$$) {
  var $style$$ = "", $addArgument$$ = function $$addArgument$$$($argument$$) {
    Array.isArray($argument$$) ? $argument$$.forEach($addArgument$$) : $style$$ += module$contents$goog$html$SafeStyle_SafeStyle.unwrap($argument$$);
  };
  Array.prototype.forEach.call(arguments, $addArgument$$);
  return $style$$ ? module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse($style$$) : module$contents$goog$html$SafeStyle_SafeStyle.EMPTY;
};
module$contents$goog$html$SafeStyle_SafeStyle.EMPTY = module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING = "zClosurez";
function module$contents$goog$html$SafeStyle_sanitizePropertyValue($result$jscomp$12_value$$) {
  if ($result$jscomp$12_value$$ instanceof goog.html.SafeUrl) {
    return 'url("' + goog.html.SafeUrl.unwrap($result$jscomp$12_value$$).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
  }
  $result$jscomp$12_value$$ = $result$jscomp$12_value$$ instanceof goog.string.Const ? goog.string.Const.unwrap($result$jscomp$12_value$$) : module$contents$goog$html$SafeStyle_sanitizePropertyValueString(String($result$jscomp$12_value$$));
  if (/[{;}]/.test($result$jscomp$12_value$$)) {
    throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [$result$jscomp$12_value$$]);
  }
  return $result$jscomp$12_value$$;
}
function module$contents$goog$html$SafeStyle_sanitizePropertyValueString($value$$) {
  var $valueWithoutFunctions$$ = $value$$.replace(module$contents$goog$html$SafeStyle_FUNCTIONS_RE, "$1").replace(module$contents$goog$html$SafeStyle_FUNCTIONS_RE, "$1").replace(module$contents$goog$html$SafeStyle_URL_RE, "url");
  if (module$contents$goog$html$SafeStyle_VALUE_RE.test($valueWithoutFunctions$$)) {
    if (module$contents$goog$html$SafeStyle_COMMENT_RE.test($value$$)) {
      return (0,goog.asserts.fail)("String value disallows comments, got: " + $value$$), module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING;
    }
    if (!module$contents$goog$html$SafeStyle_hasBalancedQuotes($value$$)) {
      return (0,goog.asserts.fail)("String value requires balanced quotes, got: " + $value$$), module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING;
    }
    if (!module$contents$goog$html$SafeStyle_hasBalancedSquareBrackets($value$$)) {
      return (0,goog.asserts.fail)("String value requires balanced square brackets and one identifier per pair of brackets, got: " + $value$$), module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING;
    }
  } else {
    return (0,goog.asserts.fail)("String value allows only " + module$contents$goog$html$SafeStyle_VALUE_ALLOWED_CHARS + " and simple functions, got: " + $value$$), module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING;
  }
  return module$contents$goog$html$SafeStyle_sanitizeUrl($value$$);
}
function module$contents$goog$html$SafeStyle_hasBalancedQuotes($value$$) {
  for (var $outsideSingle$$ = !0, $outsideDouble$$ = !0, $i$$ = 0; $i$$ < $value$$.length; $i$$++) {
    var $c$$ = $value$$.charAt($i$$);
    "'" == $c$$ && $outsideDouble$$ ? $outsideSingle$$ = !$outsideSingle$$ : '"' == $c$$ && $outsideSingle$$ && ($outsideDouble$$ = !$outsideDouble$$);
  }
  return $outsideSingle$$ && $outsideDouble$$;
}
function module$contents$goog$html$SafeStyle_hasBalancedSquareBrackets($value$$) {
  for (var $outside$$ = !0, $tokenRe$$ = /^[-_a-zA-Z0-9]$/, $i$$ = 0; $i$$ < $value$$.length; $i$$++) {
    var $c$$ = $value$$.charAt($i$$);
    if ("]" == $c$$) {
      if ($outside$$) {
        return !1;
      }
      $outside$$ = !0;
    } else {
      if ("[" == $c$$) {
        if (!$outside$$) {
          return !1;
        }
        $outside$$ = !1;
      } else {
        if (!$outside$$ && !$tokenRe$$.test($c$$)) {
          return !1;
        }
      }
    }
  }
  return $outside$$;
}
var module$contents$goog$html$SafeStyle_VALUE_ALLOWED_CHARS = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]", module$contents$goog$html$SafeStyle_VALUE_RE = new RegExp("^" + module$contents$goog$html$SafeStyle_VALUE_ALLOWED_CHARS + "+$"), module$contents$goog$html$SafeStyle_URL_RE = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g, module$contents$goog$html$SafeStyle_ALLOWED_FUNCTIONS = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)? var".split(" "), 
module$contents$goog$html$SafeStyle_FUNCTIONS_RE = new RegExp("\\b(" + module$contents$goog$html$SafeStyle_ALLOWED_FUNCTIONS.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g"), module$contents$goog$html$SafeStyle_COMMENT_RE = /\/\*/;
function module$contents$goog$html$SafeStyle_sanitizeUrl($value$$) {
  return $value$$.replace(module$contents$goog$html$SafeStyle_URL_RE, function($match$jscomp$0$$, $before$$, $url$$, $after$$) {
    var $quote$$ = "";
    $url$$ = $url$$.replace(/^(['"])(.*)\1$/, function($match$$, $start$$, $inside$$) {
      $quote$$ = $start$$;
      return $inside$$;
    });
    $match$jscomp$0$$ = goog.html.SafeUrl.sanitize($url$$).getTypedStringValue();
    return $before$$ + $quote$$ + $match$jscomp$0$$ + $quote$$ + $after$$;
  });
}
goog.html.SafeStyle = module$contents$goog$html$SafeStyle_SafeStyle;
var module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeStyleSheet_SafeStyleSheet = function $module$contents$goog$html$SafeStyleSheet_SafeStyleSheet$($value$$, $token$$) {
  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = $token$$ === module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE ? $value$$ : "";
  this.implementsGoogStringTypedString = !0;
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createRule = function $module$contents$goog$html$SafeStyleSheet_SafeStyleSheet$createRule$($selector$$, $style$$) {
  if ((0,goog.string.internal.contains)($selector$$, "<")) {
    throw Error("Selector does not allow '<', got: " + $selector$$);
  }
  var $selectorToCheck$$ = $selector$$.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
  if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test($selectorToCheck$$)) {
    throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + $selector$$);
  }
  if (!module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.hasBalancedBrackets_($selectorToCheck$$)) {
    throw Error("() and [] in selector must be balanced, got: " + $selector$$);
  }
  $style$$ instanceof module$contents$goog$html$SafeStyle_SafeStyle || ($style$$ = module$contents$goog$html$SafeStyle_SafeStyle.create($style$$));
  $selector$$ = $selector$$ + "{" + module$contents$goog$html$SafeStyle_SafeStyle.unwrap($style$$).replace(/</g, "\\3C ") + "}";
  return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse($selector$$);
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.hasBalancedBrackets_ = function $module$contents$goog$html$SafeStyleSheet_SafeStyleSheet$hasBalancedBrackets_$($s$$) {
  for (var $brackets$$ = {"(":")", "[":"]"}, $expectedBrackets$$ = [], $i$$ = 0; $i$$ < $s$$.length; $i$$++) {
    var $ch$$ = $s$$[$i$$];
    if ($brackets$$[$ch$$]) {
      $expectedBrackets$$.push($brackets$$[$ch$$]);
    } else {
      if (module$contents$goog$object_contains($brackets$$, $ch$$) && $expectedBrackets$$.pop() != $ch$$) {
        return !1;
      }
    }
  }
  return 0 == $expectedBrackets$$.length;
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.concat = function $module$contents$goog$html$SafeStyleSheet_SafeStyleSheet$concat$($var_args$$) {
  var $result$$ = "", $addArgument$$ = function $$addArgument$$$($argument$$) {
    Array.isArray($argument$$) ? $argument$$.forEach($addArgument$$) : $result$$ += module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap($argument$$);
  };
  Array.prototype.forEach.call(arguments, $addArgument$$);
  return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse($result$$);
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.fromConstant = function $module$contents$goog$html$SafeStyleSheet_SafeStyleSheet$fromConstant$($styleSheet$$) {
  $styleSheet$$ = goog.string.Const.unwrap($styleSheet$$);
  if (0 === $styleSheet$$.length) {
    return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.EMPTY;
  }
  (0,goog.asserts.assert)(!(0,goog.string.internal.contains)($styleSheet$$, "<"), "Forbidden '<' character in style sheet string: " + $styleSheet$$);
  return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse($styleSheet$$);
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.prototype.getTypedStringValue = function $module$contents$goog$html$SafeStyleSheet_SafeStyleSheet$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap = function $module$contents$goog$html$SafeStyleSheet_SafeStyleSheet$unwrap$($safeStyleSheet$$) {
  if ($safeStyleSheet$$ instanceof module$contents$goog$html$SafeStyleSheet_SafeStyleSheet && $safeStyleSheet$$.constructor === module$contents$goog$html$SafeStyleSheet_SafeStyleSheet) {
    return $safeStyleSheet$$.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
  }
  (0,goog.asserts.fail)("expected object of type SafeStyleSheet, got '" + $safeStyleSheet$$ + "' of type " + goog.typeOf($safeStyleSheet$$));
  return "type_error:SafeStyleSheet";
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function $module$contents$goog$html$SafeStyleSheet_SafeStyleSheet$createSafeStyleSheetSecurityPrivateDoNotAccessOrElse$($styleSheet$$) {
  return new module$contents$goog$html$SafeStyleSheet_SafeStyleSheet($styleSheet$$, module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE);
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.prototype.toString = function $module$contents$goog$html$SafeStyleSheet_SafeStyleSheet$$toString$() {
  return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_.toString();
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.EMPTY = module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
goog.html.SafeStyleSheet = module$contents$goog$html$SafeStyleSheet_SafeStyleSheet;
goog.dom.HtmlElement = function $goog$dom$HtmlElement$() {
};
goog.dom.TagName = function $goog$dom$TagName$() {
};
goog.dom.TagName.cast = function $goog$dom$TagName$cast$($name$$, $type$$) {
  return $name$$;
};
goog.dom.TagName.prototype.toString = function $goog$dom$TagName$$toString$() {
};
goog.dom.TagName.A = "A";
goog.dom.TagName.ABBR = "ABBR";
goog.dom.TagName.ACRONYM = "ACRONYM";
goog.dom.TagName.ADDRESS = "ADDRESS";
goog.dom.TagName.APPLET = "APPLET";
goog.dom.TagName.AREA = "AREA";
goog.dom.TagName.ARTICLE = "ARTICLE";
goog.dom.TagName.ASIDE = "ASIDE";
goog.dom.TagName.AUDIO = "AUDIO";
goog.dom.TagName.B = "B";
goog.dom.TagName.BASE = "BASE";
goog.dom.TagName.BASEFONT = "BASEFONT";
goog.dom.TagName.BDI = "BDI";
goog.dom.TagName.BDO = "BDO";
goog.dom.TagName.BIG = "BIG";
goog.dom.TagName.BLOCKQUOTE = "BLOCKQUOTE";
goog.dom.TagName.BODY = "BODY";
goog.dom.TagName.BR = "BR";
goog.dom.TagName.BUTTON = "BUTTON";
goog.dom.TagName.CANVAS = "CANVAS";
goog.dom.TagName.CAPTION = "CAPTION";
goog.dom.TagName.CENTER = "CENTER";
goog.dom.TagName.CITE = "CITE";
goog.dom.TagName.CODE = "CODE";
goog.dom.TagName.COL = "COL";
goog.dom.TagName.COLGROUP = "COLGROUP";
goog.dom.TagName.COMMAND = "COMMAND";
goog.dom.TagName.DATA = "DATA";
goog.dom.TagName.DATALIST = "DATALIST";
goog.dom.TagName.DD = "DD";
goog.dom.TagName.DEL = "DEL";
goog.dom.TagName.DETAILS = "DETAILS";
goog.dom.TagName.DFN = "DFN";
goog.dom.TagName.DIALOG = "DIALOG";
goog.dom.TagName.DIR = "DIR";
goog.dom.TagName.DIV = "DIV";
goog.dom.TagName.DL = "DL";
goog.dom.TagName.DT = "DT";
goog.dom.TagName.EM = "EM";
goog.dom.TagName.EMBED = "EMBED";
goog.dom.TagName.FIELDSET = "FIELDSET";
goog.dom.TagName.FIGCAPTION = "FIGCAPTION";
goog.dom.TagName.FIGURE = "FIGURE";
goog.dom.TagName.FONT = "FONT";
goog.dom.TagName.FOOTER = "FOOTER";
goog.dom.TagName.FORM = "FORM";
goog.dom.TagName.FRAME = "FRAME";
goog.dom.TagName.FRAMESET = "FRAMESET";
goog.dom.TagName.H1 = "H1";
goog.dom.TagName.H2 = "H2";
goog.dom.TagName.H3 = "H3";
goog.dom.TagName.H4 = "H4";
goog.dom.TagName.H5 = "H5";
goog.dom.TagName.H6 = "H6";
goog.dom.TagName.HEAD = "HEAD";
goog.dom.TagName.HEADER = "HEADER";
goog.dom.TagName.HGROUP = "HGROUP";
goog.dom.TagName.HR = "HR";
goog.dom.TagName.HTML = "HTML";
goog.dom.TagName.I = "I";
goog.dom.TagName.IFRAME = "IFRAME";
goog.dom.TagName.IMG = "IMG";
goog.dom.TagName.INPUT = "INPUT";
goog.dom.TagName.INS = "INS";
goog.dom.TagName.ISINDEX = "ISINDEX";
goog.dom.TagName.KBD = "KBD";
goog.dom.TagName.KEYGEN = "KEYGEN";
goog.dom.TagName.LABEL = "LABEL";
goog.dom.TagName.LEGEND = "LEGEND";
goog.dom.TagName.LI = "LI";
goog.dom.TagName.LINK = "LINK";
goog.dom.TagName.MAIN = "MAIN";
goog.dom.TagName.MAP = "MAP";
goog.dom.TagName.MARK = "MARK";
goog.dom.TagName.MATH = "MATH";
goog.dom.TagName.MENU = "MENU";
goog.dom.TagName.MENUITEM = "MENUITEM";
goog.dom.TagName.META = "META";
goog.dom.TagName.METER = "METER";
goog.dom.TagName.NAV = "NAV";
goog.dom.TagName.NOFRAMES = "NOFRAMES";
goog.dom.TagName.NOSCRIPT = "NOSCRIPT";
goog.dom.TagName.OBJECT = "OBJECT";
goog.dom.TagName.OL = "OL";
goog.dom.TagName.OPTGROUP = "OPTGROUP";
goog.dom.TagName.OPTION = "OPTION";
goog.dom.TagName.OUTPUT = "OUTPUT";
goog.dom.TagName.P = "P";
goog.dom.TagName.PARAM = "PARAM";
goog.dom.TagName.PICTURE = "PICTURE";
goog.dom.TagName.PRE = "PRE";
goog.dom.TagName.PROGRESS = "PROGRESS";
goog.dom.TagName.Q = "Q";
goog.dom.TagName.RP = "RP";
goog.dom.TagName.RT = "RT";
goog.dom.TagName.RTC = "RTC";
goog.dom.TagName.RUBY = "RUBY";
goog.dom.TagName.S = "S";
goog.dom.TagName.SAMP = "SAMP";
goog.dom.TagName.SCRIPT = "SCRIPT";
goog.dom.TagName.SECTION = "SECTION";
goog.dom.TagName.SELECT = "SELECT";
goog.dom.TagName.SMALL = "SMALL";
goog.dom.TagName.SOURCE = "SOURCE";
goog.dom.TagName.SPAN = "SPAN";
goog.dom.TagName.STRIKE = "STRIKE";
goog.dom.TagName.STRONG = "STRONG";
goog.dom.TagName.STYLE = "STYLE";
goog.dom.TagName.SUB = "SUB";
goog.dom.TagName.SUMMARY = "SUMMARY";
goog.dom.TagName.SUP = "SUP";
goog.dom.TagName.SVG = "SVG";
goog.dom.TagName.TABLE = "TABLE";
goog.dom.TagName.TBODY = "TBODY";
goog.dom.TagName.TD = "TD";
goog.dom.TagName.TEMPLATE = "TEMPLATE";
goog.dom.TagName.TEXTAREA = "TEXTAREA";
goog.dom.TagName.TFOOT = "TFOOT";
goog.dom.TagName.TH = "TH";
goog.dom.TagName.THEAD = "THEAD";
goog.dom.TagName.TIME = "TIME";
goog.dom.TagName.TITLE = "TITLE";
goog.dom.TagName.TR = "TR";
goog.dom.TagName.TRACK = "TRACK";
goog.dom.TagName.TT = "TT";
goog.dom.TagName.U = "U";
goog.dom.TagName.UL = "UL";
goog.dom.TagName.VAR = "VAR";
goog.dom.TagName.VIDEO = "VIDEO";
goog.dom.TagName.WBR = "WBR";
goog.dom.tags = {};
goog.dom.tags.VOID_TAGS_ = module$contents$goog$object_createSet("area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr");
goog.dom.tags.isVoidTag = function $goog$dom$tags$isVoidTag$($tagName$$) {
  return !0 === goog.dom.tags.VOID_TAGS_[$tagName$$];
};
var module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeHtml_SafeHtml = function $module$contents$goog$html$SafeHtml_SafeHtml$($value$$, $dir$$, $token$$) {
  this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = $token$$ === module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE ? $value$$ : "";
  this.dir_ = $dir$$;
  this.implementsGoogStringTypedString = this.implementsGoogI18nBidiDirectionalString = !0;
};
module$contents$goog$html$SafeHtml_SafeHtml.prototype.getDirection = function $module$contents$goog$html$SafeHtml_SafeHtml$$getDirection$() {
  return this.dir_;
};
module$contents$goog$html$SafeHtml_SafeHtml.prototype.getTypedStringValue = function $module$contents$goog$html$SafeHtml_SafeHtml$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
};
module$contents$goog$html$SafeHtml_SafeHtml.prototype.toString = function $module$contents$goog$html$SafeHtml_SafeHtml$$toString$() {
  return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
};
module$contents$goog$html$SafeHtml_SafeHtml.unwrap = function $module$contents$goog$html$SafeHtml_SafeHtml$unwrap$($safeHtml$$) {
  return module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML($safeHtml$$).toString();
};
module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML = function $module$contents$goog$html$SafeHtml_SafeHtml$unwrapTrustedHTML$($safeHtml$$) {
  if ($safeHtml$$ instanceof module$contents$goog$html$SafeHtml_SafeHtml && $safeHtml$$.constructor === module$contents$goog$html$SafeHtml_SafeHtml) {
    return $safeHtml$$.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
  }
  goog.asserts.fail("expected object of type SafeHtml, got '" + $safeHtml$$ + "' of type " + goog.typeOf($safeHtml$$));
  return "type_error:SafeHtml";
};
module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape = function $module$contents$goog$html$SafeHtml_SafeHtml$htmlEscape$($textAsString_textOrHtml$$) {
  if ($textAsString_textOrHtml$$ instanceof module$contents$goog$html$SafeHtml_SafeHtml) {
    return $textAsString_textOrHtml$$;
  }
  var $textIsObject$$ = "object" == typeof $textAsString_textOrHtml$$, $dir$$ = null;
  $textIsObject$$ && $textAsString_textOrHtml$$.implementsGoogI18nBidiDirectionalString && ($dir$$ = $textAsString_textOrHtml$$.getDirection());
  $textAsString_textOrHtml$$ = $textIsObject$$ && $textAsString_textOrHtml$$.implementsGoogStringTypedString ? $textAsString_textOrHtml$$.getTypedStringValue() : String($textAsString_textOrHtml$$);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape($textAsString_textOrHtml$$), $dir$$);
};
module$contents$goog$html$SafeHtml_SafeHtml.htmlEscapePreservingNewlines = function $module$contents$goog$html$SafeHtml_SafeHtml$htmlEscapePreservingNewlines$($html$jscomp$2_textOrHtml$$) {
  if ($html$jscomp$2_textOrHtml$$ instanceof module$contents$goog$html$SafeHtml_SafeHtml) {
    return $html$jscomp$2_textOrHtml$$;
  }
  $html$jscomp$2_textOrHtml$$ = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape($html$jscomp$2_textOrHtml$$);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(module$contents$goog$html$SafeHtml_SafeHtml.unwrap($html$jscomp$2_textOrHtml$$)), $html$jscomp$2_textOrHtml$$.getDirection());
};
module$contents$goog$html$SafeHtml_SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function $module$contents$goog$html$SafeHtml_SafeHtml$htmlEscapePreservingNewlinesAndSpaces$($html$jscomp$3_textOrHtml$$) {
  if ($html$jscomp$3_textOrHtml$$ instanceof module$contents$goog$html$SafeHtml_SafeHtml) {
    return $html$jscomp$3_textOrHtml$$;
  }
  $html$jscomp$3_textOrHtml$$ = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape($html$jscomp$3_textOrHtml$$);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(module$contents$goog$html$SafeHtml_SafeHtml.unwrap($html$jscomp$3_textOrHtml$$)), $html$jscomp$3_textOrHtml$$.getDirection());
};
module$contents$goog$html$SafeHtml_SafeHtml.comment = function $module$contents$goog$html$SafeHtml_SafeHtml$comment$($text$$) {
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--" + goog.string.internal.htmlEscape($text$$) + "--\x3e", null);
};
module$contents$goog$html$SafeHtml_SafeHtml.create = function $module$contents$goog$html$SafeHtml_SafeHtml$create$($tagName$$, $attributes$$, $content$$) {
  module$contents$goog$html$SafeHtml_SafeHtml.verifyTagName(String($tagName$$));
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String($tagName$$), $attributes$$, $content$$);
};
module$contents$goog$html$SafeHtml_SafeHtml.verifyTagName = function $module$contents$goog$html$SafeHtml_SafeHtml$verifyTagName$($tagName$$) {
  if (!module$contents$goog$html$SafeHtml_VALID_NAMES_IN_TAG.test($tagName$$)) {
    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + $tagName$$ + ">." : "");
  }
  if ($tagName$$.toUpperCase() in module$contents$goog$html$SafeHtml_NOT_ALLOWED_TAG_NAMES) {
    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + $tagName$$ + "> is not allowed for SafeHtml." : "");
  }
};
module$contents$goog$html$SafeHtml_SafeHtml.createIframe = function $module$contents$goog$html$SafeHtml_SafeHtml$createIframe$($combinedAttrs_src$$, $srcdoc$$, $attributes$$, $content$$) {
  $combinedAttrs_src$$ && goog.html.TrustedResourceUrl.unwrap($combinedAttrs_src$$);
  var $fixedAttributes$$ = {};
  $fixedAttributes$$.src = $combinedAttrs_src$$ || null;
  $fixedAttributes$$.srcdoc = $srcdoc$$ && module$contents$goog$html$SafeHtml_SafeHtml.unwrap($srcdoc$$);
  $combinedAttrs_src$$ = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes($fixedAttributes$$, {sandbox:""}, $attributes$$);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", $combinedAttrs_src$$, $content$$);
};
module$contents$goog$html$SafeHtml_SafeHtml.createSandboxIframe = function $module$contents$goog$html$SafeHtml_SafeHtml$createSandboxIframe$($combinedAttrs$jscomp$1_src$$, $srcdoc$$, $attributes$$, $content$$) {
  if (!module$contents$goog$html$SafeHtml_SafeHtml.canUseSandboxIframe()) {
    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
  }
  var $fixedAttributes$$ = {};
  $fixedAttributes$$.src = $combinedAttrs$jscomp$1_src$$ ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize($combinedAttrs$jscomp$1_src$$)) : null;
  $fixedAttributes$$.srcdoc = $srcdoc$$ || null;
  $fixedAttributes$$.sandbox = "";
  $combinedAttrs$jscomp$1_src$$ = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes($fixedAttributes$$, {}, $attributes$$);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", $combinedAttrs$jscomp$1_src$$, $content$$);
};
module$contents$goog$html$SafeHtml_SafeHtml.canUseSandboxIframe = function $module$contents$goog$html$SafeHtml_SafeHtml$canUseSandboxIframe$() {
  return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
};
module$contents$goog$html$SafeHtml_SafeHtml.createScriptSrc = function $module$contents$goog$html$SafeHtml_SafeHtml$createScriptSrc$($combinedAttrs$jscomp$2_src$$, $attributes$$) {
  goog.html.TrustedResourceUrl.unwrap($combinedAttrs$jscomp$2_src$$);
  $combinedAttrs$jscomp$2_src$$ = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes({src:$combinedAttrs$jscomp$2_src$$}, {}, $attributes$$);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", $combinedAttrs$jscomp$2_src$$);
};
module$contents$goog$html$SafeHtml_SafeHtml.createScript = function $module$contents$goog$html$SafeHtml_SafeHtml$createScript$($htmlContent_script$$, $attributes$$) {
  for (var $attr_content$$ in $attributes$$) {
    if (Object.prototype.hasOwnProperty.call($attributes$$, $attr_content$$)) {
      var $attrLower_i$$ = $attr_content$$.toLowerCase();
      if ("language" == $attrLower_i$$ || "src" == $attrLower_i$$ || "text" == $attrLower_i$$ || "type" == $attrLower_i$$) {
        throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + $attrLower_i$$ + '" attribute' : "");
      }
    }
  }
  $attr_content$$ = "";
  $htmlContent_script$$ = module$contents$goog$array_concat($htmlContent_script$$);
  for ($attrLower_i$$ = 0; $attrLower_i$$ < $htmlContent_script$$.length; $attrLower_i$$++) {
    $attr_content$$ += module$contents$goog$html$SafeScript_SafeScript.unwrap($htmlContent_script$$[$attrLower_i$$]);
  }
  $htmlContent_script$$ = module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($attr_content$$, goog.i18n.bidi.Dir.NEUTRAL);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", $attributes$$, $htmlContent_script$$);
};
module$contents$goog$html$SafeHtml_SafeHtml.createStyle = function $module$contents$goog$html$SafeHtml_SafeHtml$createStyle$($htmlContent$jscomp$1_styleSheet$$, $attributes$jscomp$6_combinedAttrs$$) {
  $attributes$jscomp$6_combinedAttrs$$ = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes({type:"text/css"}, {}, $attributes$jscomp$6_combinedAttrs$$);
  var $content$$ = "";
  $htmlContent$jscomp$1_styleSheet$$ = module$contents$goog$array_concat($htmlContent$jscomp$1_styleSheet$$);
  for (var $i$$ = 0; $i$$ < $htmlContent$jscomp$1_styleSheet$$.length; $i$$++) {
    $content$$ += module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap($htmlContent$jscomp$1_styleSheet$$[$i$$]);
  }
  $htmlContent$jscomp$1_styleSheet$$ = module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($content$$, goog.i18n.bidi.Dir.NEUTRAL);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", $attributes$jscomp$6_combinedAttrs$$, $htmlContent$jscomp$1_styleSheet$$);
};
module$contents$goog$html$SafeHtml_SafeHtml.createMetaRefresh = function $module$contents$goog$html$SafeHtml_SafeHtml$createMetaRefresh$($unwrappedUrl_url$$, $secs$$) {
  $unwrappedUrl_url$$ = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize($unwrappedUrl_url$$));
  (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains($unwrappedUrl_url$$, ";") && ($unwrappedUrl_url$$ = "'" + $unwrappedUrl_url$$.replace(/'/g, "%27") + "'");
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {"http-equiv":"refresh", content:($secs$$ || 0) + "; url=" + $unwrappedUrl_url$$});
};
module$contents$goog$html$SafeHtml_SafeHtml.createWithDir = function $module$contents$goog$html$SafeHtml_SafeHtml$createWithDir$($dir$$, $html$jscomp$4_tagName$$, $attributes$$, $content$$) {
  $html$jscomp$4_tagName$$ = module$contents$goog$html$SafeHtml_SafeHtml.create($html$jscomp$4_tagName$$, $attributes$$, $content$$);
  $html$jscomp$4_tagName$$.dir_ = $dir$$;
  return $html$jscomp$4_tagName$$;
};
module$contents$goog$html$SafeHtml_SafeHtml.join = function $module$contents$goog$html$SafeHtml_SafeHtml$join$($separator_separatorHtml$$, $parts$$) {
  $separator_separatorHtml$$ = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape($separator_separatorHtml$$);
  var $dir$$ = $separator_separatorHtml$$.getDirection(), $content$$ = [], $addArgument$$ = function $$addArgument$$$($argument$jscomp$2_html$$) {
    Array.isArray($argument$jscomp$2_html$$) ? $argument$jscomp$2_html$$.forEach($addArgument$$) : ($argument$jscomp$2_html$$ = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape($argument$jscomp$2_html$$), $content$$.push(module$contents$goog$html$SafeHtml_SafeHtml.unwrap($argument$jscomp$2_html$$)), $argument$jscomp$2_html$$ = $argument$jscomp$2_html$$.getDirection(), $dir$$ == goog.i18n.bidi.Dir.NEUTRAL ? $dir$$ = $argument$jscomp$2_html$$ : $argument$jscomp$2_html$$ != goog.i18n.bidi.Dir.NEUTRAL && 
    $dir$$ != $argument$jscomp$2_html$$ && ($dir$$ = null));
  };
  $parts$$.forEach($addArgument$$);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($content$$.join(module$contents$goog$html$SafeHtml_SafeHtml.unwrap($separator_separatorHtml$$)), $dir$$);
};
module$contents$goog$html$SafeHtml_SafeHtml.concat = function $module$contents$goog$html$SafeHtml_SafeHtml$concat$($var_args$$) {
  return module$contents$goog$html$SafeHtml_SafeHtml.join(module$contents$goog$html$SafeHtml_SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
};
module$contents$goog$html$SafeHtml_SafeHtml.concatWithDir = function $module$contents$goog$html$SafeHtml_SafeHtml$concatWithDir$($dir$$, $var_args$$) {
  var $html$$ = module$contents$goog$html$SafeHtml_SafeHtml.concat(Array.prototype.slice.call(arguments, 1));
  $html$$.dir_ = $dir$$;
  return $html$$;
};
module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function $module$contents$goog$html$SafeHtml_SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$($html$$, $dir$$) {
  var $policy$$ = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
  $html$$ = $policy$$ ? $policy$$.createHTML($html$$) : $html$$;
  return new module$contents$goog$html$SafeHtml_SafeHtml($html$$, $dir$$, module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE);
};
module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function $module$contents$goog$html$SafeHtml_SafeHtml$createSafeHtmlTagSecurityPrivateDoNotAccessOrElse$($dirAttribute_tagName$$, $attributes$$, $content$$) {
  var $dir$jscomp$7_html$$ = null;
  var $result$$ = "<" + $dirAttribute_tagName$$ + module$contents$goog$html$SafeHtml_SafeHtml.stringifyAttributes($dirAttribute_tagName$$, $attributes$$);
  null == $content$$ ? $content$$ = [] : Array.isArray($content$$) || ($content$$ = [$content$$]);
  goog.dom.tags.isVoidTag($dirAttribute_tagName$$.toLowerCase()) ? (goog.asserts.assert(!$content$$.length, "Void tag <" + $dirAttribute_tagName$$ + "> does not allow content."), $result$$ += ">") : ($dir$jscomp$7_html$$ = module$contents$goog$html$SafeHtml_SafeHtml.concat($content$$), $result$$ += ">" + module$contents$goog$html$SafeHtml_SafeHtml.unwrap($dir$jscomp$7_html$$) + "</" + $dirAttribute_tagName$$ + ">", $dir$jscomp$7_html$$ = $dir$jscomp$7_html$$.getDirection());
  ($dirAttribute_tagName$$ = $attributes$$ && $attributes$$.dir) && ($dir$jscomp$7_html$$ = /^(ltr|rtl|auto)$/i.test($dirAttribute_tagName$$) ? goog.i18n.bidi.Dir.NEUTRAL : null);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($result$$, $dir$jscomp$7_html$$);
};
module$contents$goog$html$SafeHtml_SafeHtml.stringifyAttributes = function $module$contents$goog$html$SafeHtml_SafeHtml$stringifyAttributes$($tagName$$, $attributes$$) {
  var $result$$ = "";
  if ($attributes$$) {
    for (var $name$$ in $attributes$$) {
      if (Object.prototype.hasOwnProperty.call($attributes$$, $name$$)) {
        if (!module$contents$goog$html$SafeHtml_VALID_NAMES_IN_TAG.test($name$$)) {
          throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + $name$$ + '".' : "");
        }
        var $value$$ = $attributes$$[$name$$];
        null != $value$$ && ($result$$ += " " + module$contents$goog$html$SafeHtml_getAttrNameAndValue($tagName$$, $name$$, $value$$));
      }
    }
  }
  return $result$$;
};
module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes = function $module$contents$goog$html$SafeHtml_SafeHtml$combineAttributes$($fixedAttributes$$, $defaultAttributes$$, $attributes$$) {
  var $combinedAttributes$$ = {};
  for ($name$$ in $fixedAttributes$$) {
    Object.prototype.hasOwnProperty.call($fixedAttributes$$, $name$$) && (goog.asserts.assert($name$$.toLowerCase() == $name$$, "Must be lower case"), $combinedAttributes$$[$name$$] = $fixedAttributes$$[$name$$]);
  }
  for (var $name$10$$ in $defaultAttributes$$) {
    Object.prototype.hasOwnProperty.call($defaultAttributes$$, $name$10$$) && (goog.asserts.assert($name$10$$.toLowerCase() == $name$10$$, "Must be lower case"), $combinedAttributes$$[$name$10$$] = $defaultAttributes$$[$name$10$$]);
  }
  if ($attributes$$) {
    for (var $name$11$$ in $attributes$$) {
      if (Object.prototype.hasOwnProperty.call($attributes$$, $name$11$$)) {
        var $name$$ = $name$11$$.toLowerCase();
        if ($name$$ in $fixedAttributes$$) {
          throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + $name$$ + '" attribute, got "' + $name$11$$ + '" with value "' + $attributes$$[$name$11$$] + '"' : "");
        }
        $name$$ in $defaultAttributes$$ && delete $combinedAttributes$$[$name$$];
        $combinedAttributes$$[$name$11$$] = $attributes$$[$name$11$$];
      }
    }
  }
  return $combinedAttributes$$;
};
module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG;
module$contents$goog$html$SafeHtml_SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0;
module$contents$goog$html$SafeHtml_SafeHtml.from = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape;
var module$contents$goog$html$SafeHtml_VALID_NAMES_IN_TAG = /^[a-zA-Z0-9-]+$/, module$contents$goog$html$SafeHtml_URL_ATTRIBUTES = module$contents$goog$object_createSet("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"), module$contents$goog$html$SafeHtml_NOT_ALLOWED_TAG_NAMES = module$contents$goog$object_createSet("APPLET", "BASE", "EMBED", "IFRAME", "LINK", "MATH", "META", "OBJECT", "SCRIPT", "STYLE", "SVG", "TEMPLATE");
function module$contents$goog$html$SafeHtml_getAttrNameAndValue($tagName$$, $name$$, $value$$) {
  if ($value$$ instanceof goog.string.Const) {
    $value$$ = goog.string.Const.unwrap($value$$);
  } else {
    if ("style" == $name$$.toLowerCase()) {
      if (module$contents$goog$html$SafeHtml_SafeHtml.SUPPORT_STYLE_ATTRIBUTE) {
        $value$$ = module$contents$goog$html$SafeHtml_getStyleValue($value$$);
      } else {
        throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
      }
    } else {
      if (/^on/i.test($name$$)) {
        throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + $name$$ + '" requires goog.string.Const value, "' + $value$$ + '" given.' : "");
      }
      if ($name$$.toLowerCase() in module$contents$goog$html$SafeHtml_URL_ATTRIBUTES) {
        if ($value$$ instanceof goog.html.TrustedResourceUrl) {
          $value$$ = goog.html.TrustedResourceUrl.unwrap($value$$);
        } else {
          if ($value$$ instanceof goog.html.SafeUrl) {
            $value$$ = goog.html.SafeUrl.unwrap($value$$);
          } else {
            if ("string" === typeof $value$$) {
              $value$$ = goog.html.SafeUrl.sanitize($value$$).getTypedStringValue();
            } else {
              throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + $name$$ + '" on tag "' + $tagName$$ + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + $value$$ + '" given.' : "");
            }
          }
        }
      }
    }
  }
  $value$$.implementsGoogStringTypedString && ($value$$ = $value$$.getTypedStringValue());
  goog.asserts.assert("string" === typeof $value$$ || "number" === typeof $value$$, "String or number value expected, got " + typeof $value$$ + " with value: " + $value$$);
  return $name$$ + '="' + goog.string.internal.htmlEscape(String($value$$)) + '"';
}
function module$contents$goog$html$SafeHtml_getStyleValue($value$$) {
  if (!goog.isObject($value$$)) {
    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof $value$$ + " given: " + $value$$ : "");
  }
  $value$$ instanceof module$contents$goog$html$SafeStyle_SafeStyle || ($value$$ = module$contents$goog$html$SafeStyle_SafeStyle.create($value$$));
  return module$contents$goog$html$SafeStyle_SafeStyle.unwrap($value$$);
}
module$contents$goog$html$SafeHtml_SafeHtml.DOCTYPE_HTML = function() {
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
}();
module$contents$goog$html$SafeHtml_SafeHtml.EMPTY = new module$contents$goog$html$SafeHtml_SafeHtml(goog.global.trustedTypes && goog.global.trustedTypes.emptyHTML || "", goog.i18n.bidi.Dir.NEUTRAL, module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE);
module$contents$goog$html$SafeHtml_SafeHtml.BR = function() {
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
}();
goog.html.SafeHtml = module$contents$goog$html$SafeHtml_SafeHtml;
goog.html.uncheckedconversions = {};
goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeHtmlFromStringKnownToSatisfyTypeContract$($justification$$, $html$$, $opt_dir$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($html$$, $opt_dir$$ || null);
};
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeScriptFromStringKnownToSatisfyTypeContract$($justification$$, $script$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse($script$$);
};
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeStyleFromStringKnownToSatisfyTypeContract$($justification$$, $style$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse($style$$);
};
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeStyleSheetFromStringKnownToSatisfyTypeContract$($justification$$, $styleSheet$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse($styleSheet$$);
};
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeUrlFromStringKnownToSatisfyTypeContract$($justification$$, $url$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($url$$);
};
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$trustedResourceUrlFromStringKnownToSatisfyTypeContract$($justification$$, $url$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse($url$$);
};
goog.dom.safe = {};
goog.dom.safe.InsertAdjacentHtmlPosition = {AFTERBEGIN:"afterbegin", AFTEREND:"afterend", BEFOREBEGIN:"beforebegin", BEFOREEND:"beforeend"};
goog.dom.safe.insertAdjacentHtml = function $goog$dom$safe$insertAdjacentHtml$($node$$, $position$$, $html$$) {
  $node$$.insertAdjacentHTML($position$$, module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML($html$$));
};
goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {MATH:!0, SCRIPT:!0, STYLE:!0, SVG:!0, TEMPLATE:!0};
goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
  if (goog.DEBUG && "undefined" === typeof document) {
    return !1;
  }
  var $div$$ = document.createElement("div"), $childDiv_innerChild$$ = document.createElement("div");
  $childDiv_innerChild$$.appendChild(document.createElement("div"));
  $div$$.appendChild($childDiv_innerChild$$);
  if (goog.DEBUG && !$div$$.firstChild) {
    return !1;
  }
  $childDiv_innerChild$$ = $div$$.firstChild.firstChild;
  $div$$.innerHTML = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(module$contents$goog$html$SafeHtml_SafeHtml.EMPTY);
  return !$childDiv_innerChild$$.parentElement;
});
goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function $goog$dom$safe$unsafeSetInnerHtmlDoNotUseOrElse$($elem$$, $html$$) {
  if (goog.dom.safe.isInnerHtmlCleanupRecursive_()) {
    for (; $elem$$.lastChild;) {
      $elem$$.removeChild($elem$$.lastChild);
    }
  }
  $elem$$.innerHTML = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML($html$$);
};
goog.dom.safe.setInnerHtml = function $goog$dom$safe$setInnerHtml$($elem$$, $html$$) {
  if (goog.asserts.ENABLE_ASSERTS && $elem$$.tagName) {
    var $tagName$$ = $elem$$.tagName.toUpperCase();
    if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[$tagName$$]) {
      throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + $elem$$.tagName + ".");
    }
  }
  goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse($elem$$, $html$$);
};
goog.dom.safe.setInnerHtmlFromConstant = function $goog$dom$safe$setInnerHtmlFromConstant$($element$$, $constHtml$$) {
  goog.dom.safe.setInnerHtml($element$$, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML to be immediatelly used."), goog.string.Const.unwrap($constHtml$$)));
};
goog.dom.safe.setOuterHtml = function $goog$dom$safe$setOuterHtml$($elem$$, $html$$) {
  $elem$$.outerHTML = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML($html$$);
};
goog.dom.safe.setFormElementAction = function $goog$dom$safe$setFormElementAction$($form$$, $safeUrl$jscomp$3_url$$) {
  $safeUrl$jscomp$3_url$$ = $safeUrl$jscomp$3_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$3_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$3_url$$);
  goog.dom.asserts.assertIsHTMLFormElement($form$$).action = goog.html.SafeUrl.unwrap($safeUrl$jscomp$3_url$$);
};
goog.dom.safe.setButtonFormAction = function $goog$dom$safe$setButtonFormAction$($button$$, $safeUrl$jscomp$4_url$$) {
  $safeUrl$jscomp$4_url$$ = $safeUrl$jscomp$4_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$4_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$4_url$$);
  goog.dom.asserts.assertIsHTMLButtonElement($button$$).formAction = goog.html.SafeUrl.unwrap($safeUrl$jscomp$4_url$$);
};
goog.dom.safe.setInputFormAction = function $goog$dom$safe$setInputFormAction$($input$$, $safeUrl$jscomp$5_url$$) {
  $safeUrl$jscomp$5_url$$ = $safeUrl$jscomp$5_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$5_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$5_url$$);
  goog.dom.asserts.assertIsHTMLInputElement($input$$).formAction = goog.html.SafeUrl.unwrap($safeUrl$jscomp$5_url$$);
};
goog.dom.safe.setStyle = function $goog$dom$safe$setStyle$($elem$$, $style$$) {
  $elem$$.style.cssText = module$contents$goog$html$SafeStyle_SafeStyle.unwrap($style$$);
};
goog.dom.safe.documentWrite = function $goog$dom$safe$documentWrite$($doc$$, $html$$) {
  $doc$$.write(module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML($html$$));
};
goog.dom.safe.setAnchorHref = function $goog$dom$safe$setAnchorHref$($anchor$$, $safeUrl$jscomp$6_url$$) {
  goog.dom.asserts.assertIsHTMLAnchorElement($anchor$$);
  $safeUrl$jscomp$6_url$$ = $safeUrl$jscomp$6_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$6_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$6_url$$);
  $anchor$$.href = goog.html.SafeUrl.unwrap($safeUrl$jscomp$6_url$$);
};
goog.dom.safe.setImageSrc = function $goog$dom$safe$setImageSrc$($imageElement$$, $safeUrl$jscomp$7_url$$) {
  goog.dom.asserts.assertIsHTMLImageElement($imageElement$$);
  if (!($safeUrl$jscomp$7_url$$ instanceof goog.html.SafeUrl)) {
    var $allowDataUrl$$ = /^data:image\//i.test($safeUrl$jscomp$7_url$$);
    $safeUrl$jscomp$7_url$$ = goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$7_url$$, $allowDataUrl$$);
  }
  $imageElement$$.src = goog.html.SafeUrl.unwrap($safeUrl$jscomp$7_url$$);
};
goog.dom.safe.setAudioSrc = function $goog$dom$safe$setAudioSrc$($audioElement$$, $safeUrl$jscomp$8_url$$) {
  goog.dom.asserts.assertIsHTMLAudioElement($audioElement$$);
  if (!($safeUrl$jscomp$8_url$$ instanceof goog.html.SafeUrl)) {
    var $allowDataUrl$$ = /^data:audio\//i.test($safeUrl$jscomp$8_url$$);
    $safeUrl$jscomp$8_url$$ = goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$8_url$$, $allowDataUrl$$);
  }
  $audioElement$$.src = goog.html.SafeUrl.unwrap($safeUrl$jscomp$8_url$$);
};
goog.dom.safe.setVideoSrc = function $goog$dom$safe$setVideoSrc$($videoElement$$, $safeUrl$jscomp$9_url$$) {
  goog.dom.asserts.assertIsHTMLVideoElement($videoElement$$);
  if (!($safeUrl$jscomp$9_url$$ instanceof goog.html.SafeUrl)) {
    var $allowDataUrl$$ = /^data:video\//i.test($safeUrl$jscomp$9_url$$);
    $safeUrl$jscomp$9_url$$ = goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$9_url$$, $allowDataUrl$$);
  }
  $videoElement$$.src = goog.html.SafeUrl.unwrap($safeUrl$jscomp$9_url$$);
};
goog.dom.safe.setEmbedSrc = function $goog$dom$safe$setEmbedSrc$($embed$$, $url$$) {
  goog.dom.asserts.assertIsHTMLEmbedElement($embed$$);
  $embed$$.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL($url$$);
};
goog.dom.safe.setFrameSrc = function $goog$dom$safe$setFrameSrc$($frame$$, $url$$) {
  goog.dom.asserts.assertIsHTMLFrameElement($frame$$);
  $frame$$.src = goog.html.TrustedResourceUrl.unwrap($url$$);
};
goog.dom.safe.setIframeSrc = function $goog$dom$safe$setIframeSrc$($iframe$$, $url$$) {
  goog.dom.asserts.assertIsHTMLIFrameElement($iframe$$);
  $iframe$$.src = goog.html.TrustedResourceUrl.unwrap($url$$);
};
goog.dom.safe.setIframeSrcdoc = function $goog$dom$safe$setIframeSrcdoc$($iframe$$, $html$$) {
  goog.dom.asserts.assertIsHTMLIFrameElement($iframe$$);
  $iframe$$.srcdoc = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML($html$$);
};
goog.dom.safe.setLinkHrefAndRel = function $goog$dom$safe$setLinkHrefAndRel$($link$$, $nonce$jscomp$5_url$$, $rel$$) {
  goog.dom.asserts.assertIsHTMLLinkElement($link$$);
  $link$$.rel = $rel$$;
  goog.string.internal.caseInsensitiveContains($rel$$, "stylesheet") ? (goog.asserts.assert($nonce$jscomp$5_url$$ instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), $link$$.href = goog.html.TrustedResourceUrl.unwrap($nonce$jscomp$5_url$$), ($nonce$jscomp$5_url$$ = goog.dom.safe.getStyleNonce($link$$.ownerDocument && $link$$.ownerDocument.defaultView)) && $link$$.setAttribute("nonce", $nonce$jscomp$5_url$$)) : $link$$.href = $nonce$jscomp$5_url$$ instanceof 
  goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap($nonce$jscomp$5_url$$) : $nonce$jscomp$5_url$$ instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap($nonce$jscomp$5_url$$) : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged($nonce$jscomp$5_url$$));
};
goog.dom.safe.setObjectData = function $goog$dom$safe$setObjectData$($object$$, $url$$) {
  goog.dom.asserts.assertIsHTMLObjectElement($object$$);
  $object$$.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL($url$$);
};
goog.dom.safe.setScriptSrc = function $goog$dom$safe$setScriptSrc$($script$$, $url$$) {
  goog.dom.asserts.assertIsHTMLScriptElement($script$$);
  $script$$.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL($url$$);
  goog.dom.safe.setNonceForScriptElement_($script$$);
};
goog.dom.safe.setScriptContent = function $goog$dom$safe$setScriptContent$($script$$, $content$$) {
  goog.dom.asserts.assertIsHTMLScriptElement($script$$);
  $script$$.textContent = module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript($content$$);
  goog.dom.safe.setNonceForScriptElement_($script$$);
};
goog.dom.safe.setNonceForScriptElement_ = function $goog$dom$safe$setNonceForScriptElement_$($script$$) {
  var $nonce$$ = goog.dom.safe.getScriptNonce($script$$.ownerDocument && $script$$.ownerDocument.defaultView);
  $nonce$$ && $script$$.setAttribute("nonce", $nonce$$);
};
goog.dom.safe.setLocationHref = function $goog$dom$safe$setLocationHref$($loc$$, $safeUrl$jscomp$10_url$$) {
  goog.dom.asserts.assertIsLocation($loc$$);
  $safeUrl$jscomp$10_url$$ = $safeUrl$jscomp$10_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$10_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$10_url$$);
  $loc$$.href = goog.html.SafeUrl.unwrap($safeUrl$jscomp$10_url$$);
};
goog.dom.safe.assignLocation = function $goog$dom$safe$assignLocation$($loc$$, $safeUrl$jscomp$11_url$$) {
  goog.dom.asserts.assertIsLocation($loc$$);
  $safeUrl$jscomp$11_url$$ = $safeUrl$jscomp$11_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$11_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$11_url$$);
  $loc$$.assign(goog.html.SafeUrl.unwrap($safeUrl$jscomp$11_url$$));
};
goog.dom.safe.replaceLocation = function $goog$dom$safe$replaceLocation$($loc$$, $safeUrl$jscomp$12_url$$) {
  $safeUrl$jscomp$12_url$$ = $safeUrl$jscomp$12_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$12_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$12_url$$);
  $loc$$.replace(goog.html.SafeUrl.unwrap($safeUrl$jscomp$12_url$$));
};
goog.dom.safe.openInWindow = function $goog$dom$safe$openInWindow$($safeUrl$jscomp$13_url$$, $opt_openerWin_win$$, $name$jscomp$90_opt_name$$, $opt_specs$$) {
  $safeUrl$jscomp$13_url$$ = $safeUrl$jscomp$13_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$13_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$13_url$$);
  $opt_openerWin_win$$ = $opt_openerWin_win$$ || goog.global;
  $name$jscomp$90_opt_name$$ = $name$jscomp$90_opt_name$$ instanceof goog.string.Const ? goog.string.Const.unwrap($name$jscomp$90_opt_name$$) : $name$jscomp$90_opt_name$$ || "";
  return void 0 !== $opt_specs$$ ? $opt_openerWin_win$$.open(goog.html.SafeUrl.unwrap($safeUrl$jscomp$13_url$$), $name$jscomp$90_opt_name$$, $opt_specs$$) : $opt_openerWin_win$$.open(goog.html.SafeUrl.unwrap($safeUrl$jscomp$13_url$$), $name$jscomp$90_opt_name$$);
};
goog.dom.safe.parseFromStringHtml = function $goog$dom$safe$parseFromStringHtml$($parser$$, $html$$) {
  return goog.dom.safe.parseFromString($parser$$, $html$$, "text/html");
};
goog.dom.safe.parseFromString = function $goog$dom$safe$parseFromString$($parser$$, $content$$, $type$$) {
  return $parser$$.parseFromString(module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML($content$$), $type$$);
};
goog.dom.safe.createImageFromBlob = function $goog$dom$safe$createImageFromBlob$($blob$jscomp$14_image$$) {
  if (!/^image\/.*/g.test($blob$jscomp$14_image$$.type)) {
    throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
  }
  var $objectUrl$$ = goog.global.URL.createObjectURL($blob$jscomp$14_image$$);
  $blob$jscomp$14_image$$ = new goog.global.Image;
  $blob$jscomp$14_image$$.onload = function $$blob$jscomp$14_image$$$onload$() {
    goog.global.URL.revokeObjectURL($objectUrl$$);
  };
  goog.dom.safe.setImageSrc($blob$jscomp$14_image$$, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), $objectUrl$$));
  return $blob$jscomp$14_image$$;
};
goog.dom.safe.createContextualFragment = function $goog$dom$safe$createContextualFragment$($range$$, $html$$) {
  return $range$$.createContextualFragment(module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML($html$$));
};
goog.dom.safe.getScriptNonce = function $goog$dom$safe$getScriptNonce$($opt_window$$) {
  return goog.dom.safe.getNonce_("script[nonce]", $opt_window$$);
};
goog.dom.safe.getStyleNonce = function $goog$dom$safe$getStyleNonce$($opt_window$$) {
  return goog.dom.safe.getNonce_('style[nonce],link[rel="stylesheet"][nonce]', $opt_window$$);
};
goog.dom.safe.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.dom.safe.getNonce_ = function $goog$dom$safe$getNonce_$($el_nonce$jscomp$7_selector$$, $doc$jscomp$10_win$$) {
  $doc$jscomp$10_win$$ = ($doc$jscomp$10_win$$ || goog.global).document;
  return $doc$jscomp$10_win$$.querySelector ? ($el_nonce$jscomp$7_selector$$ = $doc$jscomp$10_win$$.querySelector($el_nonce$jscomp$7_selector$$)) && ($el_nonce$jscomp$7_selector$$ = $el_nonce$jscomp$7_selector$$.nonce || $el_nonce$jscomp$7_selector$$.getAttribute("nonce")) && goog.dom.safe.NONCE_PATTERN_.test($el_nonce$jscomp$7_selector$$) ? $el_nonce$jscomp$7_selector$$ : "" : "";
};
goog.string.DETECT_DOUBLE_ESCAPING = !1;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = goog.string.internal.startsWith;
goog.string.endsWith = goog.string.internal.endsWith;
goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
goog.string.subs = function $goog$string$subs$($str$$, $var_args$$) {
  for (var $splitParts$$ = $str$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1); $subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
};
goog.string.collapseWhitespace = function $goog$string$collapseWhitespace$($str$$) {
  return $str$$.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
goog.string.isEmptyString = function $goog$string$isEmptyString$($str$$) {
  return 0 == $str$$.length;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function $goog$string$isEmptyOrWhitespaceSafe$($str$$) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe($str$$));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function $goog$string$isBreakingWhitespace$($str$$) {
  return !/[^\t\n\r ]/.test($str$$);
};
goog.string.isAlpha = function $goog$string$isAlpha$($str$$) {
  return !/[^a-zA-Z]/.test($str$$);
};
goog.string.isNumeric = function $goog$string$isNumeric$($str$$) {
  return !/[^0-9]/.test($str$$);
};
goog.string.isAlphaNumeric = function $goog$string$isAlphaNumeric$($str$$) {
  return !/[^a-zA-Z0-9]/.test($str$$);
};
goog.string.isSpace = function $goog$string$isSpace$($ch$$) {
  return " " == $ch$$;
};
goog.string.isUnicodeChar = function $goog$string$isUnicodeChar$($ch$$) {
  return 1 == $ch$$.length && " " <= $ch$$ && "~" >= $ch$$ || "\u0080" <= $ch$$ && "\ufffd" >= $ch$$;
};
goog.string.stripNewlines = function $goog$string$stripNewlines$($str$$) {
  return $str$$.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function $goog$string$canonicalizeNewlines$($str$$) {
  return $str$$.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function $goog$string$normalizeWhitespace$($str$$) {
  return $str$$.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function $goog$string$normalizeSpaces$($str$$) {
  return $str$$.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function $goog$string$collapseBreakingSpaces$($str$$) {
  return $str$$.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.string.internal.trim;
goog.string.trimLeft = function $goog$string$trimLeft$($str$$) {
  return $str$$.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function $goog$string$trimRight$($str$$) {
  return $str$$.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
goog.string.numberAwareCompare_ = function $goog$string$numberAwareCompare_$($num1_str1$$, $num2_str2$$, $a$$) {
  if ($num1_str1$$ == $num2_str2$$) {
    return 0;
  }
  if (!$num1_str1$$) {
    return -1;
  }
  if (!$num2_str2$$) {
    return 1;
  }
  for (var $tokens1$$ = $num1_str1$$.toLowerCase().match($a$$), $tokens2$$ = $num2_str2$$.toLowerCase().match($a$$), $count$$ = Math.min($tokens1$$.length, $tokens2$$.length), $i$$ = 0; $i$$ < $count$$; $i$$++) {
    $a$$ = $tokens1$$[$i$$];
    var $b$$ = $tokens2$$[$i$$];
    if ($a$$ != $b$$) {
      return $num1_str1$$ = parseInt($a$$, 10), !isNaN($num1_str1$$) && ($num2_str2$$ = parseInt($b$$, 10), !isNaN($num2_str2$$) && $num1_str1$$ - $num2_str2$$) ? $num1_str1$$ - $num2_str2$$ : $a$$ < $b$$ ? -1 : 1;
    }
  }
  return $tokens1$$.length != $tokens2$$.length ? $tokens1$$.length - $tokens2$$.length : $num1_str1$$ < $num2_str2$$ ? -1 : 1;
};
goog.string.intAwareCompare = function $goog$string$intAwareCompare$($str1$$, $str2$$) {
  return goog.string.numberAwareCompare_($str1$$, $str2$$, /\d+|\D+/g);
};
goog.string.floatAwareCompare = function $goog$string$floatAwareCompare$($str1$$, $str2$$) {
  return goog.string.numberAwareCompare_($str1$$, $str2$$, /\d+|\.\d+|\D+/g);
};
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function $goog$string$urlEncode$($str$$) {
  return encodeURIComponent(String($str$$));
};
goog.string.urlDecode = function $goog$string$urlDecode$($str$$) {
  return decodeURIComponent($str$$.replace(/\+/g, " "));
};
goog.string.newLineToBr = goog.string.internal.newLineToBr;
goog.string.htmlEscape = function $goog$string$htmlEscape$($str$$, $opt_isLikelyToContainHtmlChars$$) {
  $str$$ = goog.string.internal.htmlEscape($str$$, $opt_isLikelyToContainHtmlChars$$);
  goog.string.DETECT_DOUBLE_ESCAPING && ($str$$ = $str$$.replace(goog.string.E_RE_, "&#101;"));
  return $str$$;
};
goog.string.E_RE_ = /e/g;
goog.string.unescapeEntities = function $goog$string$unescapeEntities$($str$$) {
  return goog.string.contains($str$$, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_($str$$) : goog.string.unescapePureXmlEntities_($str$$) : $str$$;
};
goog.string.unescapeEntitiesWithDocument = function $goog$string$unescapeEntitiesWithDocument$($str$$, $document$$) {
  return goog.string.contains($str$$, "&") ? goog.string.unescapeEntitiesUsingDom_($str$$, $document$$) : $str$$;
};
goog.string.unescapeEntitiesUsingDom_ = function $goog$string$unescapeEntitiesUsingDom_$($str$$, $opt_document$$) {
  var $seen$$ = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
  var $div$$ = $opt_document$$ ? $opt_document$$.createElement("div") : goog.global.document.createElement("div");
  return $str$$.replace(goog.string.HTML_ENTITY_PATTERN_, function($s$$, $entity_n$$) {
    var $value$$ = $seen$$[$s$$];
    if ($value$$) {
      return $value$$;
    }
    "#" == $entity_n$$.charAt(0) && ($entity_n$$ = Number("0" + $entity_n$$.substr(1)), isNaN($entity_n$$) || ($value$$ = String.fromCharCode($entity_n$$)));
    $value$$ || (goog.dom.safe.setInnerHtml($div$$, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), $s$$ + " ")), $value$$ = $div$$.firstChild.nodeValue.slice(0, -1));
    return $seen$$[$s$$] = $value$$;
  });
};
goog.string.unescapePureXmlEntities_ = function $goog$string$unescapePureXmlEntities_$($str$$) {
  return $str$$.replace(/&([^;]+);/g, function($s$$, $entity$jscomp$1_n$$) {
    switch($entity$jscomp$1_n$$) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        return "#" != $entity$jscomp$1_n$$.charAt(0) || ($entity$jscomp$1_n$$ = Number("0" + $entity$jscomp$1_n$$.substr(1)), isNaN($entity$jscomp$1_n$$)) ? $s$$ : String.fromCharCode($entity$jscomp$1_n$$);
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function $goog$string$whitespaceEscape$($str$$, $opt_xml$$) {
  return goog.string.newLineToBr($str$$.replace(/  /g, " &#160;"), $opt_xml$$);
};
goog.string.preserveSpaces = function $goog$string$preserveSpaces$($str$$) {
  return $str$$.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function $goog$string$stripQuotes$($str$$, $quoteChars$$) {
  for (var $length$$ = $quoteChars$$.length, $i$$ = 0; $i$$ < $length$$; $i$$++) {
    var $quoteChar$$ = 1 == $length$$ ? $quoteChars$$ : $quoteChars$$.charAt($i$$);
    if ($str$$.charAt(0) == $quoteChar$$ && $str$$.charAt($str$$.length - 1) == $quoteChar$$) {
      return $str$$.substring(1, $str$$.length - 1);
    }
  }
  return $str$$;
};
goog.string.truncate = function $goog$string$truncate$($str$$, $chars$$, $opt_protectEscapedCharacters$$) {
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.unescapeEntities($str$$));
  $str$$.length > $chars$$ && ($str$$ = $str$$.substring(0, $chars$$ - 3) + "...");
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.htmlEscape($str$$));
  return $str$$;
};
goog.string.truncateMiddle = function $goog$string$truncateMiddle$($str$$, $chars$$, $opt_protectEscapedCharacters$$, $half_opt_trailingChars$$) {
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.unescapeEntities($str$$));
  if ($half_opt_trailingChars$$ && $str$$.length > $chars$$) {
    $half_opt_trailingChars$$ > $chars$$ && ($half_opt_trailingChars$$ = $chars$$);
    var $endPoint_endPos$$ = $str$$.length - $half_opt_trailingChars$$;
    $str$$ = $str$$.substring(0, $chars$$ - $half_opt_trailingChars$$) + "..." + $str$$.substring($endPoint_endPos$$);
  } else {
    $str$$.length > $chars$$ && ($half_opt_trailingChars$$ = Math.floor($chars$$ / 2), $endPoint_endPos$$ = $str$$.length - $half_opt_trailingChars$$, $str$$ = $str$$.substring(0, $half_opt_trailingChars$$ + $chars$$ % 2) + "..." + $str$$.substring($endPoint_endPos$$));
  }
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.htmlEscape($str$$));
  return $str$$;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\", "<":"\\u003C"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function $goog$string$quote$($s$$) {
  $s$$ = String($s$$);
  for (var $sb$$ = ['"'], $i$$ = 0; $i$$ < $s$$.length; $i$$++) {
    var $ch$$ = $s$$.charAt($i$$), $cc$$ = $ch$$.charCodeAt(0);
    $sb$$[$i$$ + 1] = goog.string.specialEscapeChars_[$ch$$] || (31 < $cc$$ && 127 > $cc$$ ? $ch$$ : goog.string.escapeChar($ch$$));
  }
  $sb$$.push('"');
  return $sb$$.join("");
};
goog.string.escapeString = function $goog$string$escapeString$($str$$) {
  for (var $sb$$ = [], $i$$ = 0; $i$$ < $str$$.length; $i$$++) {
    $sb$$[$i$$] = goog.string.escapeChar($str$$.charAt($i$$));
  }
  return $sb$$.join("");
};
goog.string.escapeChar = function $goog$string$escapeChar$($c$$) {
  if ($c$$ in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[$c$$];
  }
  if ($c$$ in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[$c$$] = goog.string.specialEscapeChars_[$c$$];
  }
  var $cc$$ = $c$$.charCodeAt(0);
  if (31 < $cc$$ && 127 > $cc$$) {
    var $rv$$ = $c$$;
  } else {
    if (256 > $cc$$) {
      if ($rv$$ = "\\x", 16 > $cc$$ || 256 < $cc$$) {
        $rv$$ += "0";
      }
    } else {
      $rv$$ = "\\u", 4096 > $cc$$ && ($rv$$ += "0");
    }
    $rv$$ += $cc$$.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[$c$$] = $rv$$;
};
goog.string.contains = goog.string.internal.contains;
goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
goog.string.countOf = function $goog$string$countOf$($s$$, $ss$$) {
  return $s$$ && $ss$$ ? $s$$.split($ss$$).length - 1 : 0;
};
goog.string.removeAt = function $goog$string$removeAt$($s$$, $index$$, $stringLength$$) {
  var $resultStr$$ = $s$$;
  0 <= $index$$ && $index$$ < $s$$.length && 0 < $stringLength$$ && ($resultStr$$ = $s$$.substr(0, $index$$) + $s$$.substr($index$$ + $stringLength$$, $s$$.length - $index$$ - $stringLength$$));
  return $resultStr$$;
};
goog.string.remove = function $goog$string$remove$($str$$, $substr$$) {
  return $str$$.replace($substr$$, "");
};
goog.string.removeAll = function $goog$string$removeAll$($s$$, $re_ss$$) {
  $re_ss$$ = new RegExp(goog.string.regExpEscape($re_ss$$), "g");
  return $s$$.replace($re_ss$$, "");
};
goog.string.replaceAll = function $goog$string$replaceAll$($s$$, $re$jscomp$1_ss$$, $replacement$$) {
  $re$jscomp$1_ss$$ = new RegExp(goog.string.regExpEscape($re$jscomp$1_ss$$), "g");
  return $s$$.replace($re$jscomp$1_ss$$, $replacement$$.replace(/\$/g, "$$$$"));
};
goog.string.regExpEscape = function $goog$string$regExpEscape$($s$$) {
  return String($s$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = String.prototype.repeat ? function($string$$, $length$$) {
  return $string$$.repeat($length$$);
} : function($string$$, $length$$) {
  return Array($length$$ + 1).join($string$$);
};
goog.string.padNumber = function $goog$string$padNumber$($num$jscomp$5_s$$, $length$$, $index$jscomp$80_opt_precision$$) {
  $num$jscomp$5_s$$ = void 0 !== $index$jscomp$80_opt_precision$$ ? $num$jscomp$5_s$$.toFixed($index$jscomp$80_opt_precision$$) : String($num$jscomp$5_s$$);
  $index$jscomp$80_opt_precision$$ = $num$jscomp$5_s$$.indexOf(".");
  -1 == $index$jscomp$80_opt_precision$$ && ($index$jscomp$80_opt_precision$$ = $num$jscomp$5_s$$.length);
  return goog.string.repeat("0", Math.max(0, $length$$ - $index$jscomp$80_opt_precision$$)) + $num$jscomp$5_s$$;
};
goog.string.makeSafe = function $goog$string$makeSafe$($obj$$) {
  return null == $obj$$ ? "" : String($obj$$);
};
goog.string.buildString = function $goog$string$buildString$($var_args$$) {
  return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function $goog$string$getRandomString$() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
};
goog.string.compareVersions = goog.string.internal.compareVersions;
goog.string.hashCode = function $goog$string$hashCode$($str$$) {
  for (var $result$$ = 0, $i$$ = 0; $i$$ < $str$$.length; ++$i$$) {
    $result$$ = 31 * $result$$ + $str$$.charCodeAt($i$$) >>> 0;
  }
  return $result$$;
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function $goog$string$createUniqueString$() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function $goog$string$toNumber$($str$$) {
  var $num$$ = Number($str$$);
  return 0 == $num$$ && goog.string.isEmptyOrWhitespace($str$$) ? NaN : $num$$;
};
goog.string.isLowerCamelCase = function $goog$string$isLowerCamelCase$($str$$) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test($str$$);
};
goog.string.isUpperCamelCase = function $goog$string$isUpperCamelCase$($str$$) {
  return /^([A-Z][a-z]*)+$/.test($str$$);
};
goog.string.toCamelCase = function $goog$string$toCamelCase$($str$$) {
  return String($str$$).replace(/\-([a-z])/g, function($all$$, $match$$) {
    return $match$$.toUpperCase();
  });
};
goog.string.toSelectorCase = function $goog$string$toSelectorCase$($str$$) {
  return String($str$$).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function $goog$string$toTitleCase$($str$$, $delimiters_opt_delimiters$$) {
  $delimiters_opt_delimiters$$ = "string" === typeof $delimiters_opt_delimiters$$ ? goog.string.regExpEscape($delimiters_opt_delimiters$$) : "\\s";
  return $str$$.replace(new RegExp("(^" + ($delimiters_opt_delimiters$$ ? "|[" + $delimiters_opt_delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase();
  });
};
goog.string.capitalize = function $goog$string$capitalize$($str$$) {
  return String($str$$.charAt(0)).toUpperCase() + String($str$$.substr(1)).toLowerCase();
};
goog.string.parseInt = function $goog$string$parseInt$($value$$) {
  isFinite($value$$) && ($value$$ = String($value$$));
  return "string" === typeof $value$$ ? /^\s*-?0x/i.test($value$$) ? parseInt($value$$, 16) : parseInt($value$$, 10) : NaN;
};
goog.string.splitLimit = function $goog$string$splitLimit$($parts$jscomp$7_str$$, $separator$$, $limit$$) {
  $parts$jscomp$7_str$$ = $parts$jscomp$7_str$$.split($separator$$);
  for (var $returnVal$$ = []; 0 < $limit$$ && $parts$jscomp$7_str$$.length;) {
    $returnVal$$.push($parts$jscomp$7_str$$.shift()), $limit$$--;
  }
  $parts$jscomp$7_str$$.length && $returnVal$$.push($parts$jscomp$7_str$$.join($separator$$));
  return $returnVal$$;
};
goog.string.lastComponent = function $goog$string$lastComponent$($str$$, $separators$$) {
  if ($separators$$) {
    "string" == typeof $separators$$ && ($separators$$ = [$separators$$]);
  } else {
    return $str$$;
  }
  for (var $lastSeparatorIndex$$ = -1, $i$$ = 0; $i$$ < $separators$$.length; $i$$++) {
    if ("" != $separators$$[$i$$]) {
      var $currentSeparatorIndex$$ = $str$$.lastIndexOf($separators$$[$i$$]);
      $currentSeparatorIndex$$ > $lastSeparatorIndex$$ && ($lastSeparatorIndex$$ = $currentSeparatorIndex$$);
    }
  }
  return -1 == $lastSeparatorIndex$$ ? $str$$ : $str$$.slice($lastSeparatorIndex$$ + 1);
};
goog.string.editDistance = function $goog$string$editDistance$($a$$, $b$$) {
  var $v0$$ = [], $v1$$ = [];
  if ($a$$ == $b$$) {
    return 0;
  }
  if (!$a$$.length || !$b$$.length) {
    return Math.max($a$$.length, $b$$.length);
  }
  for (var $i$12_i$$ = 0; $i$12_i$$ < $b$$.length + 1; $i$12_i$$++) {
    $v0$$[$i$12_i$$] = $i$12_i$$;
  }
  for ($i$12_i$$ = 0; $i$12_i$$ < $a$$.length; $i$12_i$$++) {
    $v1$$[0] = $i$12_i$$ + 1;
    for (var $j$13_j$$ = 0; $j$13_j$$ < $b$$.length; $j$13_j$$++) {
      $v1$$[$j$13_j$$ + 1] = Math.min($v1$$[$j$13_j$$] + 1, $v0$$[$j$13_j$$ + 1] + 1, $v0$$[$j$13_j$$] + Number($a$$[$i$12_i$$] != $b$$[$j$13_j$$]));
    }
    for ($j$13_j$$ = 0; $j$13_j$$ < $v0$$.length; $j$13_j$$++) {
      $v0$$[$j$13_j$$] = $v1$$[$j$13_j$$];
    }
  }
  return $v1$$[$b$$.length];
};
goog.labs.userAgent.engine = {};
goog.labs.userAgent.engine.isPresto = function $goog$labs$userAgent$engine$isPresto$() {
  return goog.labs.userAgent.util.matchUserAgent("Presto");
};
goog.labs.userAgent.engine.isTrident = function $goog$labs$userAgent$engine$isTrident$() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.engine.isEdge = function $goog$labs$userAgent$engine$isEdge$() {
  return goog.labs.userAgent.util.matchUserAgent("Edge");
};
goog.labs.userAgent.engine.isWebKit = function $goog$labs$userAgent$engine$isWebKit$() {
  return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
};
goog.labs.userAgent.engine.isGecko = function $goog$labs$userAgent$engine$isGecko$() {
  return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
};
goog.labs.userAgent.engine.getVersion = function $goog$labs$userAgent$engine$getVersion$() {
  var $browserTuple_tuples_userAgentString$$ = goog.labs.userAgent.util.getUserAgent();
  if ($browserTuple_tuples_userAgentString$$) {
    $browserTuple_tuples_userAgentString$$ = goog.labs.userAgent.util.extractVersionTuples($browserTuple_tuples_userAgentString$$);
    var $engineTuple$$ = goog.labs.userAgent.engine.getEngineTuple_($browserTuple_tuples_userAgentString$$);
    if ($engineTuple$$) {
      return "Gecko" == $engineTuple$$[0] ? goog.labs.userAgent.engine.getVersionForKey_($browserTuple_tuples_userAgentString$$, "Firefox") : $engineTuple$$[1];
    }
    $browserTuple_tuples_userAgentString$$ = $browserTuple_tuples_userAgentString$$[0];
    var $info_match$$;
    if ($browserTuple_tuples_userAgentString$$ && ($info_match$$ = $browserTuple_tuples_userAgentString$$[2]) && ($info_match$$ = /Trident\/([^\s;]+)/.exec($info_match$$))) {
      return $info_match$$[1];
    }
  }
  return "";
};
goog.labs.userAgent.engine.getEngineTuple_ = function $goog$labs$userAgent$engine$getEngineTuple_$($tuples$$) {
  if (!goog.labs.userAgent.engine.isEdge()) {
    return $tuples$$[1];
  }
  for (var $i$$ = 0; $i$$ < $tuples$$.length; $i$$++) {
    var $tuple$$ = $tuples$$[$i$$];
    if ("Edge" == $tuple$$[0]) {
      return $tuple$$;
    }
  }
};
goog.labs.userAgent.engine.isVersionOrHigher = function $goog$labs$userAgent$engine$isVersionOrHigher$($version$$) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), $version$$);
};
goog.labs.userAgent.engine.getVersionForKey_ = function $goog$labs$userAgent$engine$getVersionForKey_$($pair_tuples$$, $key$$) {
  return ($pair_tuples$$ = module$contents$goog$array_find($pair_tuples$$, function($pair$$) {
    return $key$$ == $pair$$[0];
  })) && $pair_tuples$$[1] || "";
};
goog.labs.userAgent.platform = {};
goog.labs.userAgent.platform.isAndroid = function $goog$labs$userAgent$platform$isAndroid$() {
  return goog.labs.userAgent.util.matchUserAgent("Android");
};
goog.labs.userAgent.platform.isIpod = function $goog$labs$userAgent$platform$isIpod$() {
  return goog.labs.userAgent.util.matchUserAgent("iPod");
};
goog.labs.userAgent.platform.isIphone = function $goog$labs$userAgent$platform$isIphone$() {
  return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIpad = function $goog$labs$userAgent$platform$isIpad$() {
  return goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIos = function $goog$labs$userAgent$platform$isIos$() {
  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
};
goog.labs.userAgent.platform.isMacintosh = function $goog$labs$userAgent$platform$isMacintosh$() {
  return goog.labs.userAgent.util.matchUserAgent("Macintosh");
};
goog.labs.userAgent.platform.isLinux = function $goog$labs$userAgent$platform$isLinux$() {
  return goog.labs.userAgent.util.matchUserAgent("Linux");
};
goog.labs.userAgent.platform.isWindows = function $goog$labs$userAgent$platform$isWindows$() {
  return goog.labs.userAgent.util.matchUserAgent("Windows");
};
goog.labs.userAgent.platform.isChromeOS = function $goog$labs$userAgent$platform$isChromeOS$() {
  return goog.labs.userAgent.util.matchUserAgent("CrOS");
};
goog.labs.userAgent.platform.isChromecast = function $goog$labs$userAgent$platform$isChromecast$() {
  return goog.labs.userAgent.util.matchUserAgent("CrKey");
};
goog.labs.userAgent.platform.isKaiOS = function $goog$labs$userAgent$platform$isKaiOS$() {
  return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
};
goog.labs.userAgent.platform.getVersion = function $goog$labs$userAgent$platform$getVersion$() {
  var $match$jscomp$8_userAgentString$$ = goog.labs.userAgent.util.getUserAgent(), $re$jscomp$2_version$$ = "";
  goog.labs.userAgent.platform.isWindows() ? ($re$jscomp$2_version$$ = /Windows (?:NT|Phone) ([0-9.]+)/, $re$jscomp$2_version$$ = ($match$jscomp$8_userAgentString$$ = $re$jscomp$2_version$$.exec($match$jscomp$8_userAgentString$$)) ? $match$jscomp$8_userAgentString$$[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? ($re$jscomp$2_version$$ = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, $re$jscomp$2_version$$ = ($match$jscomp$8_userAgentString$$ = $re$jscomp$2_version$$.exec($match$jscomp$8_userAgentString$$)) && 
  $match$jscomp$8_userAgentString$$[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? ($re$jscomp$2_version$$ = /Mac OS X ([0-9_.]+)/, $re$jscomp$2_version$$ = ($match$jscomp$8_userAgentString$$ = $re$jscomp$2_version$$.exec($match$jscomp$8_userAgentString$$)) ? $match$jscomp$8_userAgentString$$[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isKaiOS() ? ($re$jscomp$2_version$$ = /(?:KaiOS)\/(\S+)/i, $re$jscomp$2_version$$ = ($match$jscomp$8_userAgentString$$ = $re$jscomp$2_version$$.exec($match$jscomp$8_userAgentString$$)) && 
  $match$jscomp$8_userAgentString$$[1]) : goog.labs.userAgent.platform.isAndroid() ? ($re$jscomp$2_version$$ = /Android\s+([^\);]+)(\)|;)/, $re$jscomp$2_version$$ = ($match$jscomp$8_userAgentString$$ = $re$jscomp$2_version$$.exec($match$jscomp$8_userAgentString$$)) && $match$jscomp$8_userAgentString$$[1]) : goog.labs.userAgent.platform.isChromeOS() && ($re$jscomp$2_version$$ = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, $re$jscomp$2_version$$ = ($match$jscomp$8_userAgentString$$ = $re$jscomp$2_version$$.exec($match$jscomp$8_userAgentString$$)) && 
  $match$jscomp$8_userAgentString$$[1]);
  return $re$jscomp$2_version$$ || "";
};
goog.labs.userAgent.platform.isVersionOrHigher = function $goog$labs$userAgent$platform$isVersionOrHigher$($version$$) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), $version$$);
};
goog.reflect = {};
goog.reflect.object = function $goog$reflect$object$($type$$, $object$$) {
  return $object$$;
};
goog.reflect.objectProperty = function $goog$reflect$objectProperty$($prop$$, $object$$) {
  return $prop$$;
};
goog.reflect.sinkValue = function $goog$reflect$sinkValue$($x$$) {
  goog.reflect.sinkValue[" "]($x$$);
  return $x$$;
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function $goog$reflect$canAccessProperty$($obj$$, $prop$$) {
  try {
    return goog.reflect.sinkValue($obj$$[$prop$$]), !0;
  } catch ($e$$) {
  }
  return !1;
};
goog.reflect.cache = function $goog$reflect$cache$($cacheObj$$, $key$$, $valueFn$$, $opt_keyFn_storedKey$$) {
  $opt_keyFn_storedKey$$ = $opt_keyFn_storedKey$$ ? $opt_keyFn_storedKey$$($key$$) : $key$$;
  return Object.prototype.hasOwnProperty.call($cacheObj$$, $opt_keyFn_storedKey$$) ? $cacheObj$$[$opt_keyFn_storedKey$$] : $cacheObj$$[$opt_keyFn_storedKey$$] = $valueFn$$($key$$);
};
goog.userAgent = {};
goog.userAgent.ASSUME_IE = !1;
goog.userAgent.ASSUME_EDGE = !1;
goog.userAgent.ASSUME_GECKO = !1;
goog.userAgent.ASSUME_WEBKIT = !1;
goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
goog.userAgent.ASSUME_OPERA = !1;
goog.userAgent.ASSUME_ANY_VERSION = !1;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function $goog$userAgent$getUserAgentString$() {
  return goog.labs.userAgent.util.getUserAgent();
};
goog.userAgent.getNavigatorTyped = function $goog$userAgent$getNavigatorTyped$() {
  return goog.global.navigator || null;
};
goog.userAgent.getNavigator = function $goog$userAgent$getNavigator$() {
  return goog.userAgent.getNavigatorTyped();
};
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
goog.userAgent.isMobile_ = function $goog$userAgent$isMobile_$() {
  return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
};
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function $goog$userAgent$determinePlatform_$() {
  var $navigator$$ = goog.userAgent.getNavigatorTyped();
  return $navigator$$ && $navigator$$.platform || "";
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = !1;
goog.userAgent.ASSUME_WINDOWS = !1;
goog.userAgent.ASSUME_LINUX = !1;
goog.userAgent.ASSUME_X11 = !1;
goog.userAgent.ASSUME_ANDROID = !1;
goog.userAgent.ASSUME_IPHONE = !1;
goog.userAgent.ASSUME_IPAD = !1;
goog.userAgent.ASSUME_IPOD = !1;
goog.userAgent.ASSUME_KAIOS = !1;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
goog.userAgent.isLegacyLinux_ = function $goog$userAgent$isLegacyLinux_$() {
  return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
};
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
goog.userAgent.isX11_ = function $goog$userAgent$isX11_$() {
  var $navigator$$ = goog.userAgent.getNavigatorTyped();
  return !!$navigator$$ && goog.string.contains($navigator$$.appVersion || "", "X11");
};
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
goog.userAgent.determineVersion_ = function $goog$userAgent$determineVersion_$() {
  var $version$$ = "", $arr$$ = goog.userAgent.getVersionRegexResult_();
  $arr$$ && ($version$$ = $arr$$ ? $arr$$[1] : "");
  return goog.userAgent.IE && ($arr$$ = goog.userAgent.getDocumentMode_(), null != $arr$$ && $arr$$ > parseFloat($version$$)) ? String($arr$$) : $version$$;
};
goog.userAgent.getVersionRegexResult_ = function $goog$userAgent$getVersionRegexResult_$() {
  var $userAgent$$ = goog.userAgent.getUserAgentString();
  if (goog.userAgent.GECKO) {
    return /rv:([^\);]+)(\)|;)/.exec($userAgent$$);
  }
  if (goog.userAgent.EDGE) {
    return /Edge\/([\d\.]+)/.exec($userAgent$$);
  }
  if (goog.userAgent.IE) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$$);
  }
  if (goog.userAgent.WEBKIT) {
    return /WebKit\/(\S+)/.exec($userAgent$$);
  }
  if (goog.userAgent.OPERA) {
    return /(?:Version)[ \/]?(\S+)/.exec($userAgent$$);
  }
};
goog.userAgent.getDocumentMode_ = function $goog$userAgent$getDocumentMode_$() {
  var $doc$$ = goog.global.document;
  return $doc$$ ? $doc$$.documentMode : void 0;
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function $goog$userAgent$compare$($v1$$, $v2$$) {
  return goog.string.compareVersions($v1$$, $v2$$);
};
goog.userAgent.isVersionOrHigherCache_ = {};
goog.userAgent.isVersionOrHigher = function $goog$userAgent$isVersionOrHigher$($version$$) {
  return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, $version$$, function() {
    return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, $version$$);
  });
};
goog.userAgent.isDocumentModeOrHigher = function $goog$userAgent$isDocumentModeOrHigher$($documentMode$$) {
  return Number(goog.userAgent.DOCUMENT_MODE) >= $documentMode$$;
};
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE = function() {
  if (goog.global.document && goog.userAgent.IE) {
    var $documentMode$$ = goog.userAgent.getDocumentMode_();
    return $documentMode$$ ? $documentMode$$ : parseInt(goog.userAgent.VERSION, 10) || void 0;
  }
}();
goog.dom.BrowserFeature = {};
goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS = !1;
goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS = !1;
goog.dom.BrowserFeature.detectOffscreenCanvas_ = function $goog$dom$BrowserFeature$detectOffscreenCanvas_$($contextName$$) {
  try {
    return !!(new self.OffscreenCanvas(0, 0)).getContext($contextName$$);
  } catch ($ex$$) {
  }
  return !1;
};
goog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D = !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS && (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS || goog.dom.BrowserFeature.detectOffscreenCanvas_("2d"));
goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9);
goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = !goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) || goog.userAgent.GECKO;
goog.dom.BrowserFeature.CAN_USE_INNER_TEXT = !1;
goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY = goog.userAgent.IE || goog.userAgent.WEBKIT;
goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;
goog.math = {};
goog.math.randomInt = function $goog$math$randomInt$($a$$) {
  return Math.floor(Math.random() * $a$$);
};
goog.math.uniformRandom = function $goog$math$uniformRandom$($a$$, $b$$) {
  return $a$$ + Math.random() * ($b$$ - $a$$);
};
goog.math.clamp = function $goog$math$clamp$($value$$, $min$$, $max$$) {
  return Math.min(Math.max($value$$, $min$$), $max$$);
};
goog.math.modulo = function $goog$math$modulo$($a$jscomp$12_r$$, $b$$) {
  $a$jscomp$12_r$$ %= $b$$;
  return 0 > $a$jscomp$12_r$$ * $b$$ ? $a$jscomp$12_r$$ + $b$$ : $a$jscomp$12_r$$;
};
goog.math.lerp = function $goog$math$lerp$($a$$, $b$$, $x$$) {
  return $a$$ + $x$$ * ($b$$ - $a$$);
};
goog.math.nearlyEquals = function $goog$math$nearlyEquals$($a$$, $b$$, $opt_tolerance$$) {
  return Math.abs($a$$ - $b$$) <= ($opt_tolerance$$ || 0.000001);
};
goog.math.standardAngle = function $goog$math$standardAngle$($angle$$) {
  return goog.math.modulo($angle$$, 360);
};
goog.math.standardAngleInRadians = function $goog$math$standardAngleInRadians$($angle$$) {
  return goog.math.modulo($angle$$, 2 * Math.PI);
};
goog.math.toRadians = function $goog$math$toRadians$($angleDegrees$$) {
  return $angleDegrees$$ * Math.PI / 180;
};
goog.math.toDegrees = function $goog$math$toDegrees$($angleRadians$$) {
  return 180 * $angleRadians$$ / Math.PI;
};
goog.math.angleDx = function $goog$math$angleDx$($degrees$$, $radius$$) {
  return $radius$$ * Math.cos(goog.math.toRadians($degrees$$));
};
goog.math.angleDy = function $goog$math$angleDy$($degrees$$, $radius$$) {
  return $radius$$ * Math.sin(goog.math.toRadians($degrees$$));
};
goog.math.angle = function $goog$math$angle$($x1$$, $y1$$, $x2$$, $y2$$) {
  return goog.math.standardAngle(goog.math.toDegrees(Math.atan2($y2$$ - $y1$$, $x2$$ - $x1$$)));
};
goog.math.angleDifference = function $goog$math$angleDifference$($d_startAngle$$, $endAngle$$) {
  $d_startAngle$$ = goog.math.standardAngle($endAngle$$) - goog.math.standardAngle($d_startAngle$$);
  180 < $d_startAngle$$ ? $d_startAngle$$ -= 360 : -180 >= $d_startAngle$$ && ($d_startAngle$$ = 360 + $d_startAngle$$);
  return $d_startAngle$$;
};
goog.math.sign = function $goog$math$sign$($x$$) {
  return 0 < $x$$ ? 1 : 0 > $x$$ ? -1 : $x$$;
};
goog.math.longestCommonSubsequence = function $goog$math$longestCommonSubsequence$($array1$$, $array2$$, $compare$jscomp$2_opt_compareFn$$, $collect_opt_collectorFn$$) {
  $compare$jscomp$2_opt_compareFn$$ = $compare$jscomp$2_opt_compareFn$$ || function($a$$, $b$$) {
    return $a$$ == $b$$;
  };
  $collect_opt_collectorFn$$ = $collect_opt_collectorFn$$ || function($i1$$, $i2$$) {
    return $array1$$[$i1$$];
  };
  for (var $length1$$ = $array1$$.length, $length2$$ = $array2$$.length, $arr$$ = [], $i$$ = 0; $i$$ < $length1$$ + 1; $i$$++) {
    $arr$$[$i$$] = [], $arr$$[$i$$][0] = 0;
  }
  for (var $j$$ = 0; $j$$ < $length2$$ + 1; $j$$++) {
    $arr$$[0][$j$$] = 0;
  }
  for ($i$$ = 1; $i$$ <= $length1$$; $i$$++) {
    for ($j$$ = 1; $j$$ <= $length2$$; $j$$++) {
      $compare$jscomp$2_opt_compareFn$$($array1$$[$i$$ - 1], $array2$$[$j$$ - 1]) ? $arr$$[$i$$][$j$$] = $arr$$[$i$$ - 1][$j$$ - 1] + 1 : $arr$$[$i$$][$j$$] = Math.max($arr$$[$i$$ - 1][$j$$], $arr$$[$i$$][$j$$ - 1]);
    }
  }
  var $result$$ = [];
  $i$$ = $length1$$;
  for ($j$$ = $length2$$; 0 < $i$$ && 0 < $j$$;) {
    $compare$jscomp$2_opt_compareFn$$($array1$$[$i$$ - 1], $array2$$[$j$$ - 1]) ? ($result$$.unshift($collect_opt_collectorFn$$($i$$ - 1, $j$$ - 1)), $i$$--, $j$$--) : $arr$$[$i$$ - 1][$j$$] > $arr$$[$i$$][$j$$ - 1] ? $i$$-- : $j$$--;
  }
  return $result$$;
};
goog.math.sum = function $goog$math$sum$($var_args$$) {
  return Array.prototype.reduce.call(arguments, function($sum$$, $value$$) {
    return $sum$$ + $value$$;
  }, 0);
};
goog.math.average = function $goog$math$average$($var_args$$) {
  return goog.math.sum.apply(null, arguments) / arguments.length;
};
goog.math.sampleVariance = function $goog$math$sampleVariance$($var_args$$) {
  var $sampleSize$$ = arguments.length;
  if (2 > $sampleSize$$) {
    return 0;
  }
  var $mean$$ = goog.math.average.apply(null, arguments);
  return goog.math.sum.apply(null, Array.prototype.map.call(arguments, function($val$$) {
    return Math.pow($val$$ - $mean$$, 2);
  })) / ($sampleSize$$ - 1);
};
goog.math.standardDeviation = function $goog$math$standardDeviation$($var_args$$) {
  return Math.sqrt(goog.math.sampleVariance.apply(null, arguments));
};
goog.math.isInt = function $goog$math$isInt$($num$$) {
  return isFinite($num$$) && 0 == $num$$ % 1;
};
goog.math.isFiniteNumber = function $goog$math$isFiniteNumber$($num$$) {
  return isFinite($num$$);
};
goog.math.isNegativeZero = function $goog$math$isNegativeZero$($num$$) {
  return 0 == $num$$ && 0 > 1 / $num$$;
};
goog.math.log10Floor = function $goog$math$log10Floor$($num$$) {
  if (0 < $num$$) {
    var $x$$ = Math.round(Math.log($num$$) * Math.LOG10E);
    return $x$$ - (parseFloat("1e" + $x$$) > $num$$ ? 1 : 0);
  }
  return 0 == $num$$ ? -Infinity : NaN;
};
goog.math.safeFloor = function $goog$math$safeFloor$($num$$, $opt_epsilon$$) {
  goog.asserts.assert(void 0 === $opt_epsilon$$ || 0 < $opt_epsilon$$);
  return Math.floor($num$$ + ($opt_epsilon$$ || 2e-15));
};
goog.math.safeCeil = function $goog$math$safeCeil$($num$$, $opt_epsilon$$) {
  goog.asserts.assert(void 0 === $opt_epsilon$$ || 0 < $opt_epsilon$$);
  return Math.ceil($num$$ - ($opt_epsilon$$ || 2e-15));
};
goog.math.Coordinate = function $goog$math$Coordinate$($opt_x$$, $opt_y$$) {
  this.x = void 0 !== $opt_x$$ ? $opt_x$$ : 0;
  this.y = void 0 !== $opt_y$$ ? $opt_y$$ : 0;
};
goog.math.Coordinate.prototype.clone = function $goog$math$Coordinate$$clone$() {
  return new goog.math.Coordinate(this.x, this.y);
};
goog.DEBUG && (goog.math.Coordinate.prototype.toString = function $goog$math$Coordinate$$toString$() {
  return "(" + this.x + ", " + this.y + ")";
});
goog.math.Coordinate.prototype.equals = function $goog$math$Coordinate$$equals$($other$$) {
  return $other$$ instanceof goog.math.Coordinate && goog.math.Coordinate.equals(this, $other$$);
};
goog.math.Coordinate.equals = function $goog$math$Coordinate$equals$($a$$, $b$$) {
  return $a$$ == $b$$ ? !0 : $a$$ && $b$$ ? $a$$.x == $b$$.x && $a$$.y == $b$$.y : !1;
};
goog.math.Coordinate.distance = function $goog$math$Coordinate$distance$($a$jscomp$17_dy$$, $b$$) {
  var $dx$$ = $a$jscomp$17_dy$$.x - $b$$.x;
  $a$jscomp$17_dy$$ = $a$jscomp$17_dy$$.y - $b$$.y;
  return Math.sqrt($dx$$ * $dx$$ + $a$jscomp$17_dy$$ * $a$jscomp$17_dy$$);
};
goog.math.Coordinate.magnitude = function $goog$math$Coordinate$magnitude$($a$$) {
  return Math.sqrt($a$$.x * $a$$.x + $a$$.y * $a$$.y);
};
goog.math.Coordinate.azimuth = function $goog$math$Coordinate$azimuth$($a$$) {
  return goog.math.angle(0, 0, $a$$.x, $a$$.y);
};
goog.math.Coordinate.squaredDistance = function $goog$math$Coordinate$squaredDistance$($a$jscomp$20_dy$$, $b$$) {
  var $dx$$ = $a$jscomp$20_dy$$.x - $b$$.x;
  $a$jscomp$20_dy$$ = $a$jscomp$20_dy$$.y - $b$$.y;
  return $dx$$ * $dx$$ + $a$jscomp$20_dy$$ * $a$jscomp$20_dy$$;
};
goog.math.Coordinate.difference = function $goog$math$Coordinate$difference$($a$$, $b$$) {
  return new goog.math.Coordinate($a$$.x - $b$$.x, $a$$.y - $b$$.y);
};
goog.math.Coordinate.sum = function $goog$math$Coordinate$sum$($a$$, $b$$) {
  return new goog.math.Coordinate($a$$.x + $b$$.x, $a$$.y + $b$$.y);
};
goog.math.Coordinate.prototype.ceil = function $goog$math$Coordinate$$ceil$() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
goog.math.Coordinate.prototype.floor = function $goog$math$Coordinate$$floor$() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
goog.math.Coordinate.prototype.round = function $goog$math$Coordinate$$round$() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
goog.math.Coordinate.prototype.translate = function $goog$math$Coordinate$$translate$($tx$$, $opt_ty$$) {
  $tx$$ instanceof goog.math.Coordinate ? (this.x += $tx$$.x, this.y += $tx$$.y) : (this.x += Number($tx$$), "number" === typeof $opt_ty$$ && (this.y += $opt_ty$$));
  return this;
};
goog.math.Coordinate.prototype.scale = function $goog$math$Coordinate$$scale$($sx$$, $opt_sy$$) {
  this.x *= $sx$$;
  this.y *= "number" === typeof $opt_sy$$ ? $opt_sy$$ : $sx$$;
  return this;
};
goog.math.Coordinate.prototype.rotateRadians = function $goog$math$Coordinate$$rotateRadians$($radians_sin$$, $center_opt_center$$) {
  $center_opt_center$$ = $center_opt_center$$ || new goog.math.Coordinate(0, 0);
  var $x$$ = this.x, $y$$ = this.y, $cos$$ = Math.cos($radians_sin$$);
  $radians_sin$$ = Math.sin($radians_sin$$);
  this.x = ($x$$ - $center_opt_center$$.x) * $cos$$ - ($y$$ - $center_opt_center$$.y) * $radians_sin$$ + $center_opt_center$$.x;
  this.y = ($x$$ - $center_opt_center$$.x) * $radians_sin$$ + ($y$$ - $center_opt_center$$.y) * $cos$$ + $center_opt_center$$.y;
};
goog.math.Coordinate.prototype.rotateDegrees = function $goog$math$Coordinate$$rotateDegrees$($degrees$$, $opt_center$$) {
  this.rotateRadians(goog.math.toRadians($degrees$$), $opt_center$$);
};
goog.math.Size = function $goog$math$Size$($width$$, $height$$) {
  this.width = $width$$;
  this.height = $height$$;
};
goog.math.Size.equals = function $goog$math$Size$equals$($a$$, $b$$) {
  return $a$$ == $b$$ ? !0 : $a$$ && $b$$ ? $a$$.width == $b$$.width && $a$$.height == $b$$.height : !1;
};
goog.math.Size.prototype.clone = function $goog$math$Size$$clone$() {
  return new goog.math.Size(this.width, this.height);
};
goog.DEBUG && (goog.math.Size.prototype.toString = function $goog$math$Size$$toString$() {
  return "(" + this.width + " x " + this.height + ")";
});
goog.math.Size.prototype.getLongest = function $goog$math$Size$$getLongest$() {
  return Math.max(this.width, this.height);
};
goog.math.Size.prototype.getShortest = function $goog$math$Size$$getShortest$() {
  return Math.min(this.width, this.height);
};
goog.math.Size.prototype.area = function $goog$math$Size$$area$() {
  return this.width * this.height;
};
goog.math.Size.prototype.perimeter = function $goog$math$Size$$perimeter$() {
  return 2 * (this.width + this.height);
};
goog.math.Size.prototype.aspectRatio = function $goog$math$Size$$aspectRatio$() {
  return this.width / this.height;
};
goog.math.Size.prototype.isEmpty = function $goog$math$Size$$isEmpty$() {
  return !this.area();
};
goog.math.Size.prototype.ceil = function $goog$math$Size$$ceil$() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
goog.math.Size.prototype.fitsInside = function $goog$math$Size$$fitsInside$($target$$) {
  return this.width <= $target$$.width && this.height <= $target$$.height;
};
goog.math.Size.prototype.floor = function $goog$math$Size$$floor$() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
goog.math.Size.prototype.round = function $goog$math$Size$$round$() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
goog.math.Size.prototype.scale = function $goog$math$Size$$scale$($sx$$, $opt_sy$$) {
  this.width *= $sx$$;
  this.height *= "number" === typeof $opt_sy$$ ? $opt_sy$$ : $sx$$;
  return this;
};
goog.math.Size.prototype.scaleToCover = function $goog$math$Size$$scaleToCover$($s$jscomp$21_target$$) {
  $s$jscomp$21_target$$ = this.aspectRatio() <= $s$jscomp$21_target$$.aspectRatio() ? $s$jscomp$21_target$$.width / this.width : $s$jscomp$21_target$$.height / this.height;
  return this.scale($s$jscomp$21_target$$);
};
goog.math.Size.prototype.scaleToFit = function $goog$math$Size$$scaleToFit$($s$jscomp$22_target$$) {
  $s$jscomp$22_target$$ = this.aspectRatio() > $s$jscomp$22_target$$.aspectRatio() ? $s$jscomp$22_target$$.width / this.width : $s$jscomp$22_target$$.height / this.height;
  return this.scale($s$jscomp$22_target$$);
};
goog.dom.ASSUME_QUIRKS_MODE = !1;
goog.dom.ASSUME_STANDARDS_MODE = !1;
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.getDomHelper = function $goog$dom$getDomHelper$($opt_element$$) {
  return $opt_element$$ ? new goog.dom.DomHelper(goog.dom.getOwnerDocument($opt_element$$)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper);
};
goog.dom.getDocument = function $goog$dom$getDocument$() {
  return document;
};
goog.dom.getElement = function $goog$dom$getElement$($element$$) {
  return goog.dom.getElementHelper_(document, $element$$);
};
goog.dom.getElementHelper_ = function $goog$dom$getElementHelper_$($doc$$, $element$$) {
  return "string" === typeof $element$$ ? $doc$$.getElementById($element$$) : $element$$;
};
goog.dom.getRequiredElement = function $goog$dom$getRequiredElement$($id$$) {
  return goog.dom.getRequiredElementHelper_(document, $id$$);
};
goog.dom.getRequiredElementHelper_ = function $goog$dom$getRequiredElementHelper_$($doc$jscomp$14_element$$, $id$$) {
  goog.asserts.assertString($id$$);
  $doc$jscomp$14_element$$ = goog.dom.getElementHelper_($doc$jscomp$14_element$$, $id$$);
  return $doc$jscomp$14_element$$ = goog.asserts.assertElement($doc$jscomp$14_element$$, "No element found with id: " + $id$$);
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagName = function $goog$dom$getElementsByTagName$($tagName$$, $opt_parent$$) {
  return ($opt_parent$$ || document).getElementsByTagName(String($tagName$$));
};
goog.dom.getElementsByTagNameAndClass = function $goog$dom$getElementsByTagNameAndClass$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return goog.dom.getElementsByTagNameAndClass_(document, $opt_tag$$, $opt_class$$, $opt_el$$);
};
goog.dom.getElementByTagNameAndClass = function $goog$dom$getElementByTagNameAndClass$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return goog.dom.getElementByTagNameAndClass_(document, $opt_tag$$, $opt_class$$, $opt_el$$);
};
goog.dom.getElementsByClass = function $goog$dom$getElementsByClass$($className$$, $opt_el$$) {
  var $parent$$ = $opt_el$$ || document;
  return goog.dom.canUseQuerySelector_($parent$$) ? $parent$$.querySelectorAll("." + $className$$) : goog.dom.getElementsByTagNameAndClass_(document, "*", $className$$, $opt_el$$);
};
goog.dom.getElementByClass = function $goog$dom$getElementByClass$($className$$, $opt_el$$) {
  var $parent$$ = $opt_el$$ || document;
  return ($parent$$.getElementsByClassName ? $parent$$.getElementsByClassName($className$$)[0] : goog.dom.getElementByTagNameAndClass_(document, "*", $className$$, $opt_el$$)) || null;
};
goog.dom.getRequiredElementByClass = function $goog$dom$getRequiredElementByClass$($className$$, $opt_root_retValue$$) {
  $opt_root_retValue$$ = goog.dom.getElementByClass($className$$, $opt_root_retValue$$);
  return goog.asserts.assert($opt_root_retValue$$, "No element found with className: " + $className$$);
};
goog.dom.canUseQuerySelector_ = function $goog$dom$canUseQuerySelector_$($parent$$) {
  return !(!$parent$$.querySelectorAll || !$parent$$.querySelector);
};
goog.dom.getElementsByTagNameAndClass_ = function $goog$dom$getElementsByTagNameAndClass_$($doc$jscomp$15_els_parent$$, $className$jscomp$4_opt_tag$jscomp$2_tagName$$, $opt_class$$, $arrayLike$jscomp$2_opt_el$$) {
  $doc$jscomp$15_els_parent$$ = $arrayLike$jscomp$2_opt_el$$ || $doc$jscomp$15_els_parent$$;
  $className$jscomp$4_opt_tag$jscomp$2_tagName$$ = $className$jscomp$4_opt_tag$jscomp$2_tagName$$ && "*" != $className$jscomp$4_opt_tag$jscomp$2_tagName$$ ? String($className$jscomp$4_opt_tag$jscomp$2_tagName$$).toUpperCase() : "";
  if (goog.dom.canUseQuerySelector_($doc$jscomp$15_els_parent$$) && ($className$jscomp$4_opt_tag$jscomp$2_tagName$$ || $opt_class$$)) {
    return $doc$jscomp$15_els_parent$$.querySelectorAll($className$jscomp$4_opt_tag$jscomp$2_tagName$$ + ($opt_class$$ ? "." + $opt_class$$ : ""));
  }
  if ($opt_class$$ && $doc$jscomp$15_els_parent$$.getElementsByClassName) {
    $doc$jscomp$15_els_parent$$ = $doc$jscomp$15_els_parent$$.getElementsByClassName($opt_class$$);
    if ($className$jscomp$4_opt_tag$jscomp$2_tagName$$) {
      $arrayLike$jscomp$2_opt_el$$ = {};
      for (var $len$$ = 0, $i$$ = 0, $el$$; $el$$ = $doc$jscomp$15_els_parent$$[$i$$]; $i$$++) {
        $className$jscomp$4_opt_tag$jscomp$2_tagName$$ == $el$$.nodeName && ($arrayLike$jscomp$2_opt_el$$[$len$$++] = $el$$);
      }
      $arrayLike$jscomp$2_opt_el$$.length = $len$$;
      return $arrayLike$jscomp$2_opt_el$$;
    }
    return $doc$jscomp$15_els_parent$$;
  }
  $doc$jscomp$15_els_parent$$ = $doc$jscomp$15_els_parent$$.getElementsByTagName($className$jscomp$4_opt_tag$jscomp$2_tagName$$ || "*");
  if ($opt_class$$) {
    $arrayLike$jscomp$2_opt_el$$ = {};
    for ($i$$ = $len$$ = 0; $el$$ = $doc$jscomp$15_els_parent$$[$i$$]; $i$$++) {
      $className$jscomp$4_opt_tag$jscomp$2_tagName$$ = $el$$.className, "function" == typeof $className$jscomp$4_opt_tag$jscomp$2_tagName$$.split && module$contents$goog$array_contains($className$jscomp$4_opt_tag$jscomp$2_tagName$$.split(/\s+/), $opt_class$$) && ($arrayLike$jscomp$2_opt_el$$[$len$$++] = $el$$);
    }
    $arrayLike$jscomp$2_opt_el$$.length = $len$$;
    return $arrayLike$jscomp$2_opt_el$$;
  }
  return $doc$jscomp$15_els_parent$$;
};
goog.dom.getElementByTagNameAndClass_ = function $goog$dom$getElementByTagNameAndClass_$($doc$$, $opt_tag$$, $opt_class$$, $opt_el$$) {
  var $parent$$ = $opt_el$$ || $doc$$, $tag$$ = $opt_tag$$ && "*" != $opt_tag$$ ? String($opt_tag$$).toUpperCase() : "";
  return goog.dom.canUseQuerySelector_($parent$$) && ($tag$$ || $opt_class$$) ? $parent$$.querySelector($tag$$ + ($opt_class$$ ? "." + $opt_class$$ : "")) : goog.dom.getElementsByTagNameAndClass_($doc$$, $opt_tag$$, $opt_class$$, $opt_el$$)[0] || null;
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function $goog$dom$setProperties$($element$$, $properties$$) {
  module$contents$goog$object_forEach($properties$$, function($val$$, $key$$) {
    $val$$ && "object" == typeof $val$$ && $val$$.implementsGoogStringTypedString && ($val$$ = $val$$.getTypedStringValue());
    "style" == $key$$ ? $element$$.style.cssText = $val$$ : "class" == $key$$ ? $element$$.className = $val$$ : "for" == $key$$ ? $element$$.htmlFor = $val$$ : goog.dom.DIRECT_ATTRIBUTE_MAP_.hasOwnProperty($key$$) ? $element$$.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[$key$$], $val$$) : goog.string.startsWith($key$$, "aria-") || goog.string.startsWith($key$$, "data-") ? $element$$.setAttribute($key$$, $val$$) : $element$$[$key$$] = $val$$;
  });
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", nonce:"nonce", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
goog.dom.getViewportSize = function $goog$dom$getViewportSize$($opt_window$$) {
  return goog.dom.getViewportSize_($opt_window$$ || window);
};
goog.dom.getViewportSize_ = function $goog$dom$getViewportSize_$($doc$jscomp$17_el$jscomp$2_win$$) {
  $doc$jscomp$17_el$jscomp$2_win$$ = $doc$jscomp$17_el$jscomp$2_win$$.document;
  $doc$jscomp$17_el$jscomp$2_win$$ = goog.dom.isCss1CompatMode_($doc$jscomp$17_el$jscomp$2_win$$) ? $doc$jscomp$17_el$jscomp$2_win$$.documentElement : $doc$jscomp$17_el$jscomp$2_win$$.body;
  return new goog.math.Size($doc$jscomp$17_el$jscomp$2_win$$.clientWidth, $doc$jscomp$17_el$jscomp$2_win$$.clientHeight);
};
goog.dom.getDocumentHeight = function $goog$dom$getDocumentHeight$() {
  return goog.dom.getDocumentHeight_(window);
};
goog.dom.getDocumentHeightForWindow = function $goog$dom$getDocumentHeightForWindow$($win$$) {
  return goog.dom.getDocumentHeight_($win$$);
};
goog.dom.getDocumentHeight_ = function $goog$dom$getDocumentHeight_$($vh_win$$) {
  var $doc$jscomp$18_sh$$ = $vh_win$$.document, $body$jscomp$1_height$$ = 0;
  if ($doc$jscomp$18_sh$$) {
    $body$jscomp$1_height$$ = $doc$jscomp$18_sh$$.body;
    var $docEl$$ = $doc$jscomp$18_sh$$.documentElement;
    if (!$docEl$$ || !$body$jscomp$1_height$$) {
      return 0;
    }
    $vh_win$$ = goog.dom.getViewportSize_($vh_win$$).height;
    if (goog.dom.isCss1CompatMode_($doc$jscomp$18_sh$$) && $docEl$$.scrollHeight) {
      $body$jscomp$1_height$$ = $docEl$$.scrollHeight != $vh_win$$ ? $docEl$$.scrollHeight : $docEl$$.offsetHeight;
    } else {
      $doc$jscomp$18_sh$$ = $docEl$$.scrollHeight;
      var $oh$$ = $docEl$$.offsetHeight;
      $docEl$$.clientHeight != $oh$$ && ($doc$jscomp$18_sh$$ = $body$jscomp$1_height$$.scrollHeight, $oh$$ = $body$jscomp$1_height$$.offsetHeight);
      $body$jscomp$1_height$$ = $doc$jscomp$18_sh$$ > $vh_win$$ ? $doc$jscomp$18_sh$$ > $oh$$ ? $doc$jscomp$18_sh$$ : $oh$$ : $doc$jscomp$18_sh$$ < $oh$$ ? $doc$jscomp$18_sh$$ : $oh$$;
    }
  }
  return $body$jscomp$1_height$$;
};
goog.dom.getPageScroll = function $goog$dom$getPageScroll$($opt_window$$) {
  return goog.dom.getDomHelper(($opt_window$$ || goog.global || window).document).getDocumentScroll();
};
goog.dom.getDocumentScroll = function $goog$dom$getDocumentScroll$() {
  return goog.dom.getDocumentScroll_(document);
};
goog.dom.getDocumentScroll_ = function $goog$dom$getDocumentScroll_$($doc$jscomp$19_win$$) {
  var $el$$ = goog.dom.getDocumentScrollElement_($doc$jscomp$19_win$$);
  $doc$jscomp$19_win$$ = goog.dom.getWindow_($doc$jscomp$19_win$$);
  return goog.userAgent.IE && goog.userAgent.isVersionOrHigher("10") && $doc$jscomp$19_win$$.pageYOffset != $el$$.scrollTop ? new goog.math.Coordinate($el$$.scrollLeft, $el$$.scrollTop) : new goog.math.Coordinate($doc$jscomp$19_win$$.pageXOffset || $el$$.scrollLeft, $doc$jscomp$19_win$$.pageYOffset || $el$$.scrollTop);
};
goog.dom.getDocumentScrollElement = function $goog$dom$getDocumentScrollElement$() {
  return goog.dom.getDocumentScrollElement_(document);
};
goog.dom.getDocumentScrollElement_ = function $goog$dom$getDocumentScrollElement_$($doc$$) {
  return $doc$$.scrollingElement ? $doc$$.scrollingElement : !goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_($doc$$) ? $doc$$.documentElement : $doc$$.body || $doc$$.documentElement;
};
goog.dom.getWindow = function $goog$dom$getWindow$($opt_doc$$) {
  return $opt_doc$$ ? goog.dom.getWindow_($opt_doc$$) : window;
};
goog.dom.getWindow_ = function $goog$dom$getWindow_$($doc$$) {
  return $doc$$.parentWindow || $doc$$.defaultView;
};
goog.dom.createDom = function $goog$dom$createDom$($tagName$$, $opt_attributes$$, $var_args$$) {
  return goog.dom.createDom_(document, arguments);
};
goog.dom.createDom_ = function $goog$dom$createDom_$($doc$$, $args$$) {
  var $element$jscomp$20_tagName$$ = String($args$$[0]), $attributes$$ = $args$$[1];
  if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && $attributes$$ && ($attributes$$.name || $attributes$$.type)) {
    $element$jscomp$20_tagName$$ = ["<", $element$jscomp$20_tagName$$];
    $attributes$$.name && $element$jscomp$20_tagName$$.push(' name="', goog.string.htmlEscape($attributes$$.name), '"');
    if ($attributes$$.type) {
      $element$jscomp$20_tagName$$.push(' type="', goog.string.htmlEscape($attributes$$.type), '"');
      var $clone$$ = {};
      module$contents$goog$object_extend($clone$$, $attributes$$);
      delete $clone$$.type;
      $attributes$$ = $clone$$;
    }
    $element$jscomp$20_tagName$$.push(">");
    $element$jscomp$20_tagName$$ = $element$jscomp$20_tagName$$.join("");
  }
  $element$jscomp$20_tagName$$ = goog.dom.createElement_($doc$$, $element$jscomp$20_tagName$$);
  $attributes$$ && ("string" === typeof $attributes$$ ? $element$jscomp$20_tagName$$.className = $attributes$$ : Array.isArray($attributes$$) ? $element$jscomp$20_tagName$$.className = $attributes$$.join(" ") : goog.dom.setProperties($element$jscomp$20_tagName$$, $attributes$$));
  2 < $args$$.length && goog.dom.append_($doc$$, $element$jscomp$20_tagName$$, $args$$, 2);
  return $element$jscomp$20_tagName$$;
};
goog.dom.append_ = function $goog$dom$append_$($doc$$, $parent$$, $args$$, $i$$) {
  function $childHandler$$($child$$) {
    $child$$ && $parent$$.appendChild("string" === typeof $child$$ ? $doc$$.createTextNode($child$$) : $child$$);
  }
  for (; $i$$ < $args$$.length; $i$$++) {
    var $arg$$ = $args$$[$i$$];
    goog.isArrayLike($arg$$) && !goog.dom.isNodeLike($arg$$) ? module$contents$goog$array_forEach(goog.dom.isNodeList($arg$$) ? module$contents$goog$array_toArray($arg$$) : $arg$$, $childHandler$$) : $childHandler$$($arg$$);
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function $goog$dom$createElement$($name$$) {
  return goog.dom.createElement_(document, $name$$);
};
goog.dom.createElement_ = function $goog$dom$createElement_$($doc$$, $name$$) {
  $name$$ = String($name$$);
  "application/xhtml+xml" === $doc$$.contentType && ($name$$ = $name$$.toLowerCase());
  return $doc$$.createElement($name$$);
};
goog.dom.createTextNode = function $goog$dom$createTextNode$($content$$) {
  return document.createTextNode(String($content$$));
};
goog.dom.createTable = function $goog$dom$createTable$($rows$$, $columns$$, $opt_fillWithNbsp$$) {
  return goog.dom.createTable_(document, $rows$$, $columns$$, !!$opt_fillWithNbsp$$);
};
goog.dom.createTable_ = function $goog$dom$createTable_$($doc$$, $rows$$, $columns$$, $fillWithNbsp$$) {
  for (var $table$$ = goog.dom.createElement_($doc$$, "TABLE"), $tbody$$ = $table$$.appendChild(goog.dom.createElement_($doc$$, "TBODY")), $i$$ = 0; $i$$ < $rows$$; $i$$++) {
    for (var $tr$$ = goog.dom.createElement_($doc$$, "TR"), $j$$ = 0; $j$$ < $columns$$; $j$$++) {
      var $td$$ = goog.dom.createElement_($doc$$, "TD");
      $fillWithNbsp$$ && goog.dom.setTextContent($td$$, goog.string.Unicode.NBSP);
      $tr$$.appendChild($td$$);
    }
    $tbody$$.appendChild($tr$$);
  }
  return $table$$;
};
goog.dom.constHtmlToNode = function $goog$dom$constHtmlToNode$($var_args$$) {
  var $safeHtml$$ = Array.prototype.map.call(arguments, goog.string.Const.unwrap);
  $safeHtml$$ = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."), $safeHtml$$.join(""));
  return goog.dom.safeHtmlToNode($safeHtml$$);
};
goog.dom.safeHtmlToNode = function $goog$dom$safeHtmlToNode$($html$$) {
  return goog.dom.safeHtmlToNode_(document, $html$$);
};
goog.dom.safeHtmlToNode_ = function $goog$dom$safeHtmlToNode_$($doc$$, $html$$) {
  var $tempDiv$$ = goog.dom.createElement_($doc$$, "DIV");
  goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (goog.dom.safe.setInnerHtml($tempDiv$$, module$contents$goog$html$SafeHtml_SafeHtml.concat(module$contents$goog$html$SafeHtml_SafeHtml.BR, $html$$)), $tempDiv$$.removeChild(goog.asserts.assert($tempDiv$$.firstChild))) : goog.dom.safe.setInnerHtml($tempDiv$$, $html$$);
  return goog.dom.childrenToNode_($doc$$, $tempDiv$$);
};
goog.dom.childrenToNode_ = function $goog$dom$childrenToNode_$($doc$$, $tempDiv$$) {
  if (1 == $tempDiv$$.childNodes.length) {
    return $tempDiv$$.removeChild(goog.asserts.assert($tempDiv$$.firstChild));
  }
  for ($doc$$ = $doc$$.createDocumentFragment(); $tempDiv$$.firstChild;) {
    $doc$$.appendChild($tempDiv$$.firstChild);
  }
  return $doc$$;
};
goog.dom.isCss1CompatMode = function $goog$dom$isCss1CompatMode$() {
  return goog.dom.isCss1CompatMode_(document);
};
goog.dom.isCss1CompatMode_ = function $goog$dom$isCss1CompatMode_$($doc$$) {
  return goog.dom.COMPAT_MODE_KNOWN_ ? goog.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == $doc$$.compatMode;
};
goog.dom.canHaveChildren = function $goog$dom$canHaveChildren$($node$$) {
  if ($node$$.nodeType != goog.dom.NodeType.ELEMENT) {
    return !1;
  }
  switch($node$$.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
      return !1;
  }
  return !0;
};
goog.dom.appendChild = function $goog$dom$appendChild$($parent$$, $child$$) {
  goog.asserts.assert(null != $parent$$ && null != $child$$, "goog.dom.appendChild expects non-null arguments");
  $parent$$.appendChild($child$$);
};
goog.dom.append = function $goog$dom$append$($parent$$, $var_args$$) {
  goog.dom.append_(goog.dom.getOwnerDocument($parent$$), $parent$$, arguments, 1);
};
goog.dom.removeChildren = function $goog$dom$removeChildren$($node$$) {
  for (var $child$$; $child$$ = $node$$.firstChild;) {
    $node$$.removeChild($child$$);
  }
};
goog.dom.insertSiblingBefore = function $goog$dom$insertSiblingBefore$($newNode$$, $refNode$$) {
  goog.asserts.assert(null != $newNode$$ && null != $refNode$$, "goog.dom.insertSiblingBefore expects non-null arguments");
  $refNode$$.parentNode && $refNode$$.parentNode.insertBefore($newNode$$, $refNode$$);
};
goog.dom.insertSiblingAfter = function $goog$dom$insertSiblingAfter$($newNode$$, $refNode$$) {
  goog.asserts.assert(null != $newNode$$ && null != $refNode$$, "goog.dom.insertSiblingAfter expects non-null arguments");
  $refNode$$.parentNode && $refNode$$.parentNode.insertBefore($newNode$$, $refNode$$.nextSibling);
};
goog.dom.insertChildAt = function $goog$dom$insertChildAt$($parent$$, $child$$, $index$$) {
  goog.asserts.assert(null != $parent$$, "goog.dom.insertChildAt expects a non-null parent");
  $parent$$.insertBefore($child$$, $parent$$.childNodes[$index$$] || null);
};
goog.dom.removeNode = function $goog$dom$removeNode$($node$$) {
  return $node$$ && $node$$.parentNode ? $node$$.parentNode.removeChild($node$$) : null;
};
goog.dom.replaceNode = function $goog$dom$replaceNode$($newNode$$, $oldNode$$) {
  goog.asserts.assert(null != $newNode$$ && null != $oldNode$$, "goog.dom.replaceNode expects non-null arguments");
  var $parent$$ = $oldNode$$.parentNode;
  $parent$$ && $parent$$.replaceChild($newNode$$, $oldNode$$);
};
goog.dom.copyContents = function $goog$dom$copyContents$($target$$, $childNodes_source$$) {
  goog.asserts.assert(null != $target$$ && null != $childNodes_source$$, "goog.dom.copyContents expects non-null arguments");
  $childNodes_source$$ = $childNodes_source$$.cloneNode(!0).childNodes;
  for (goog.dom.removeChildren($target$$); $childNodes_source$$.length;) {
    $target$$.appendChild($childNodes_source$$[0]);
  }
};
goog.dom.flattenElement = function $goog$dom$flattenElement$($element$$) {
  var $child$$, $parent$$ = $element$$.parentNode;
  if ($parent$$ && $parent$$.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if ($element$$.removeNode) {
      return $element$$.removeNode(!1);
    }
    for (; $child$$ = $element$$.firstChild;) {
      $parent$$.insertBefore($child$$, $element$$);
    }
    return goog.dom.removeNode($element$$);
  }
};
goog.dom.getChildren = function $goog$dom$getChildren$($element$$) {
  return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != $element$$.children ? $element$$.children : Array.prototype.filter.call($element$$.childNodes, function($node$$) {
    return $node$$.nodeType == goog.dom.NodeType.ELEMENT;
  });
};
goog.dom.getFirstElementChild = function $goog$dom$getFirstElementChild$($node$$) {
  return void 0 !== $node$$.firstElementChild ? $node$$.firstElementChild : goog.dom.getNextElementNode_($node$$.firstChild, !0);
};
goog.dom.getLastElementChild = function $goog$dom$getLastElementChild$($node$$) {
  return void 0 !== $node$$.lastElementChild ? $node$$.lastElementChild : goog.dom.getNextElementNode_($node$$.lastChild, !1);
};
goog.dom.getNextElementSibling = function $goog$dom$getNextElementSibling$($node$$) {
  return void 0 !== $node$$.nextElementSibling ? $node$$.nextElementSibling : goog.dom.getNextElementNode_($node$$.nextSibling, !0);
};
goog.dom.getPreviousElementSibling = function $goog$dom$getPreviousElementSibling$($node$$) {
  return void 0 !== $node$$.previousElementSibling ? $node$$.previousElementSibling : goog.dom.getNextElementNode_($node$$.previousSibling, !1);
};
goog.dom.getNextElementNode_ = function $goog$dom$getNextElementNode_$($node$$, $forward$$) {
  for (; $node$$ && $node$$.nodeType != goog.dom.NodeType.ELEMENT;) {
    $node$$ = $forward$$ ? $node$$.nextSibling : $node$$.previousSibling;
  }
  return $node$$;
};
goog.dom.getNextNode = function $goog$dom$getNextNode$($node$$) {
  if (!$node$$) {
    return null;
  }
  if ($node$$.firstChild) {
    return $node$$.firstChild;
  }
  for (; $node$$ && !$node$$.nextSibling;) {
    $node$$ = $node$$.parentNode;
  }
  return $node$$ ? $node$$.nextSibling : null;
};
goog.dom.getPreviousNode = function $goog$dom$getPreviousNode$($node$$) {
  if (!$node$$) {
    return null;
  }
  if (!$node$$.previousSibling) {
    return $node$$.parentNode;
  }
  for ($node$$ = $node$$.previousSibling; $node$$ && $node$$.lastChild;) {
    $node$$ = $node$$.lastChild;
  }
  return $node$$;
};
goog.dom.isNodeLike = function $goog$dom$isNodeLike$($obj$$) {
  return goog.isObject($obj$$) && 0 < $obj$$.nodeType;
};
goog.dom.isElement = function $goog$dom$isElement$($obj$$) {
  return goog.isObject($obj$$) && $obj$$.nodeType == goog.dom.NodeType.ELEMENT;
};
goog.dom.isWindow = function $goog$dom$isWindow$($obj$$) {
  return goog.isObject($obj$$) && $obj$$.window == $obj$$;
};
goog.dom.getParentElement = function $goog$dom$getParentElement$($element$$) {
  var $parent$$;
  if (goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY && !(goog.userAgent.IE && goog.userAgent.isVersionOrHigher("9") && !goog.userAgent.isVersionOrHigher("10") && goog.global.SVGElement && $element$$ instanceof goog.global.SVGElement) && ($parent$$ = $element$$.parentElement)) {
    return $parent$$;
  }
  $parent$$ = $element$$.parentNode;
  return goog.dom.isElement($parent$$) ? $parent$$ : null;
};
goog.dom.contains = function $goog$dom$contains$($parent$$, $descendant$$) {
  if (!$parent$$ || !$descendant$$) {
    return !1;
  }
  if ($parent$$.contains && $descendant$$.nodeType == goog.dom.NodeType.ELEMENT) {
    return $parent$$ == $descendant$$ || $parent$$.contains($descendant$$);
  }
  if ("undefined" != typeof $parent$$.compareDocumentPosition) {
    return $parent$$ == $descendant$$ || !!($parent$$.compareDocumentPosition($descendant$$) & 16);
  }
  for (; $descendant$$ && $parent$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode;
  }
  return $descendant$$ == $parent$$;
};
goog.dom.compareNodeOrder = function $goog$dom$compareNodeOrder$($node1_range2$$, $node2$$) {
  if ($node1_range2$$ == $node2$$) {
    return 0;
  }
  if ($node1_range2$$.compareDocumentPosition) {
    return $node1_range2$$.compareDocumentPosition($node2$$) & 2 ? 1 : -1;
  }
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    if ($node1_range2$$.nodeType == goog.dom.NodeType.DOCUMENT) {
      return -1;
    }
    if ($node2$$.nodeType == goog.dom.NodeType.DOCUMENT) {
      return 1;
    }
  }
  if ("sourceIndex" in $node1_range2$$ || $node1_range2$$.parentNode && "sourceIndex" in $node1_range2$$.parentNode) {
    var $isElement1_range1$$ = $node1_range2$$.nodeType == goog.dom.NodeType.ELEMENT, $doc$$ = $node2$$.nodeType == goog.dom.NodeType.ELEMENT;
    if ($isElement1_range1$$ && $doc$$) {
      return $node1_range2$$.sourceIndex - $node2$$.sourceIndex;
    }
    var $parent1$$ = $node1_range2$$.parentNode, $parent2$$ = $node2$$.parentNode;
    return $parent1$$ == $parent2$$ ? goog.dom.compareSiblingOrder_($node1_range2$$, $node2$$) : !$isElement1_range1$$ && goog.dom.contains($parent1$$, $node2$$) ? -1 * goog.dom.compareParentsDescendantNodeIe_($node1_range2$$, $node2$$) : !$doc$$ && goog.dom.contains($parent2$$, $node1_range2$$) ? goog.dom.compareParentsDescendantNodeIe_($node2$$, $node1_range2$$) : ($isElement1_range1$$ ? $node1_range2$$.sourceIndex : $parent1$$.sourceIndex) - ($doc$$ ? $node2$$.sourceIndex : $parent2$$.sourceIndex);
  }
  $doc$$ = goog.dom.getOwnerDocument($node1_range2$$);
  $isElement1_range1$$ = $doc$$.createRange();
  $isElement1_range1$$.selectNode($node1_range2$$);
  $isElement1_range1$$.collapse(!0);
  $node1_range2$$ = $doc$$.createRange();
  $node1_range2$$.selectNode($node2$$);
  $node1_range2$$.collapse(!0);
  return $isElement1_range1$$.compareBoundaryPoints(goog.global.Range.START_TO_END, $node1_range2$$);
};
goog.dom.compareParentsDescendantNodeIe_ = function $goog$dom$compareParentsDescendantNodeIe_$($textNode$$, $node$$) {
  var $parent$$ = $textNode$$.parentNode;
  if ($parent$$ == $node$$) {
    return -1;
  }
  for (; $node$$.parentNode != $parent$$;) {
    $node$$ = $node$$.parentNode;
  }
  return goog.dom.compareSiblingOrder_($node$$, $textNode$$);
};
goog.dom.compareSiblingOrder_ = function $goog$dom$compareSiblingOrder_$($node1$$, $node2$jscomp$1_s$$) {
  for (; $node2$jscomp$1_s$$ = $node2$jscomp$1_s$$.previousSibling;) {
    if ($node2$jscomp$1_s$$ == $node1$$) {
      return -1;
    }
  }
  return 1;
};
goog.dom.findCommonAncestor = function $goog$dom$findCommonAncestor$($var_args$$) {
  var $i$$, $count$$ = arguments.length;
  if (!$count$$) {
    return null;
  }
  if (1 == $count$$) {
    return arguments[0];
  }
  var $paths$$ = [], $minLength$$ = Infinity;
  for ($i$$ = 0; $i$$ < $count$$; $i$$++) {
    for (var $ancestors_output$$ = [], $first$jscomp$4_node$$ = arguments[$i$$]; $first$jscomp$4_node$$;) {
      $ancestors_output$$.unshift($first$jscomp$4_node$$), $first$jscomp$4_node$$ = $first$jscomp$4_node$$.parentNode;
    }
    $paths$$.push($ancestors_output$$);
    $minLength$$ = Math.min($minLength$$, $ancestors_output$$.length);
  }
  $ancestors_output$$ = null;
  for ($i$$ = 0; $i$$ < $minLength$$; $i$$++) {
    $first$jscomp$4_node$$ = $paths$$[0][$i$$];
    for (var $j$$ = 1; $j$$ < $count$$; $j$$++) {
      if ($first$jscomp$4_node$$ != $paths$$[$j$$][$i$$]) {
        return $ancestors_output$$;
      }
    }
    $ancestors_output$$ = $first$jscomp$4_node$$;
  }
  return $ancestors_output$$;
};
goog.dom.isInDocument = function $goog$dom$isInDocument$($node$$) {
  return 16 == ($node$$.ownerDocument.compareDocumentPosition($node$$) & 16);
};
goog.dom.getOwnerDocument = function $goog$dom$getOwnerDocument$($node$$) {
  goog.asserts.assert($node$$, "Node cannot be null or undefined.");
  return $node$$.nodeType == goog.dom.NodeType.DOCUMENT ? $node$$ : $node$$.ownerDocument || $node$$.document;
};
goog.dom.getFrameContentDocument = function $goog$dom$getFrameContentDocument$($frame$$) {
  return $frame$$.contentDocument || $frame$$.contentWindow.document;
};
goog.dom.getFrameContentWindow = function $goog$dom$getFrameContentWindow$($frame$$) {
  try {
    return $frame$$.contentWindow || ($frame$$.contentDocument ? goog.dom.getWindow($frame$$.contentDocument) : null);
  } catch ($e$$) {
  }
  return null;
};
goog.dom.setTextContent = function $goog$dom$setTextContent$($node$$, $text$$) {
  goog.asserts.assert(null != $node$$, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in $node$$) {
    $node$$.textContent = $text$$;
  } else {
    if ($node$$.nodeType == goog.dom.NodeType.TEXT) {
      $node$$.data = String($text$$);
    } else {
      if ($node$$.firstChild && $node$$.firstChild.nodeType == goog.dom.NodeType.TEXT) {
        for (; $node$$.lastChild != $node$$.firstChild;) {
          $node$$.removeChild(goog.asserts.assert($node$$.lastChild));
        }
        $node$$.firstChild.data = String($text$$);
      } else {
        goog.dom.removeChildren($node$$);
        var $doc$$ = goog.dom.getOwnerDocument($node$$);
        $node$$.appendChild($doc$$.createTextNode(String($text$$)));
      }
    }
  }
};
goog.dom.getOuterHtml = function $goog$dom$getOuterHtml$($element$$) {
  goog.asserts.assert(null !== $element$$, "goog.dom.getOuterHtml expects a non-null value for element");
  if ("outerHTML" in $element$$) {
    return $element$$.outerHTML;
  }
  var $div$jscomp$2_doc$$ = goog.dom.getOwnerDocument($element$$);
  $div$jscomp$2_doc$$ = goog.dom.createElement_($div$jscomp$2_doc$$, "DIV");
  $div$jscomp$2_doc$$.appendChild($element$$.cloneNode(!0));
  return $div$jscomp$2_doc$$.innerHTML;
};
goog.dom.findNode = function $goog$dom$findNode$($root$$, $p$$) {
  var $rv$$ = [];
  return goog.dom.findNodes_($root$$, $p$$, $rv$$, !0) ? $rv$$[0] : void 0;
};
goog.dom.findNodes = function $goog$dom$findNodes$($root$$, $p$$) {
  var $rv$$ = [];
  goog.dom.findNodes_($root$$, $p$$, $rv$$, !1);
  return $rv$$;
};
goog.dom.findNodes_ = function $goog$dom$findNodes_$($child$jscomp$5_root$$, $p$$, $rv$$, $findOne$$) {
  if (null != $child$jscomp$5_root$$) {
    for ($child$jscomp$5_root$$ = $child$jscomp$5_root$$.firstChild; $child$jscomp$5_root$$;) {
      if ($p$$($child$jscomp$5_root$$) && ($rv$$.push($child$jscomp$5_root$$), $findOne$$) || goog.dom.findNodes_($child$jscomp$5_root$$, $p$$, $rv$$, $findOne$$)) {
        return !0;
      }
      $child$jscomp$5_root$$ = $child$jscomp$5_root$$.nextSibling;
    }
  }
  return !1;
};
goog.dom.findElement = function $goog$dom$findElement$($root$jscomp$6_stack$$, $pred$$) {
  for ($root$jscomp$6_stack$$ = goog.dom.getChildrenReverse_($root$jscomp$6_stack$$); 0 < $root$jscomp$6_stack$$.length;) {
    var $c$jscomp$4_next$$ = $root$jscomp$6_stack$$.pop();
    if ($pred$$($c$jscomp$4_next$$)) {
      return $c$jscomp$4_next$$;
    }
    for ($c$jscomp$4_next$$ = $c$jscomp$4_next$$.lastElementChild; $c$jscomp$4_next$$; $c$jscomp$4_next$$ = $c$jscomp$4_next$$.previousElementSibling) {
      $root$jscomp$6_stack$$.push($c$jscomp$4_next$$);
    }
  }
  return null;
};
goog.dom.findElements = function $goog$dom$findElements$($root$jscomp$7_stack$$, $pred$$) {
  var $result$$ = [];
  for ($root$jscomp$7_stack$$ = goog.dom.getChildrenReverse_($root$jscomp$7_stack$$); 0 < $root$jscomp$7_stack$$.length;) {
    var $c$jscomp$5_next$$ = $root$jscomp$7_stack$$.pop();
    $pred$$($c$jscomp$5_next$$) && $result$$.push($c$jscomp$5_next$$);
    for ($c$jscomp$5_next$$ = $c$jscomp$5_next$$.lastElementChild; $c$jscomp$5_next$$; $c$jscomp$5_next$$ = $c$jscomp$5_next$$.previousElementSibling) {
      $root$jscomp$7_stack$$.push($c$jscomp$5_next$$);
    }
  }
  return $result$$;
};
goog.dom.getChildrenReverse_ = function $goog$dom$getChildrenReverse_$($c$jscomp$6_node$$) {
  if ($c$jscomp$6_node$$.nodeType == goog.dom.NodeType.DOCUMENT) {
    return [$c$jscomp$6_node$$.documentElement];
  }
  var $children$$ = [];
  for ($c$jscomp$6_node$$ = $c$jscomp$6_node$$.lastElementChild; $c$jscomp$6_node$$; $c$jscomp$6_node$$ = $c$jscomp$6_node$$.previousElementSibling) {
    $children$$.push($c$jscomp$6_node$$);
  }
  return $children$$;
};
goog.dom.TAGS_TO_IGNORE_ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
goog.dom.PREDEFINED_TAG_VALUES_ = {IMG:" ", BR:"\n"};
goog.dom.isFocusableTabIndex = function $goog$dom$isFocusableTabIndex$($element$$) {
  return goog.dom.hasSpecifiedTabIndex_($element$$) && goog.dom.isTabIndexFocusable_($element$$);
};
goog.dom.setFocusableTabIndex = function $goog$dom$setFocusableTabIndex$($element$$, $enable$$) {
  $enable$$ ? $element$$.tabIndex = 0 : ($element$$.tabIndex = -1, $element$$.removeAttribute("tabIndex"));
};
goog.dom.isFocusable = function $goog$dom$isFocusable$($element$$) {
  var $focusable$$;
  return ($focusable$$ = goog.dom.nativelySupportsFocus_($element$$) ? !$element$$.disabled && (!goog.dom.hasSpecifiedTabIndex_($element$$) || goog.dom.isTabIndexFocusable_($element$$)) : goog.dom.isFocusableTabIndex($element$$)) && goog.userAgent.IE ? goog.dom.hasNonZeroBoundingRect_($element$$) : $focusable$$;
};
goog.dom.hasSpecifiedTabIndex_ = function $goog$dom$hasSpecifiedTabIndex_$($element$$) {
  return $element$$.hasAttribute("tabindex");
};
goog.dom.isTabIndexFocusable_ = function $goog$dom$isTabIndexFocusable_$($element$jscomp$29_index$$) {
  $element$jscomp$29_index$$ = $element$jscomp$29_index$$.tabIndex;
  return "number" === typeof $element$jscomp$29_index$$ && 0 <= $element$jscomp$29_index$$ && 32768 > $element$jscomp$29_index$$;
};
goog.dom.nativelySupportsFocus_ = function $goog$dom$nativelySupportsFocus_$($element$$) {
  return "A" == $element$$.tagName && $element$$.hasAttribute("href") || "INPUT" == $element$$.tagName || "TEXTAREA" == $element$$.tagName || "SELECT" == $element$$.tagName || "BUTTON" == $element$$.tagName;
};
goog.dom.hasNonZeroBoundingRect_ = function $goog$dom$hasNonZeroBoundingRect_$($element$$) {
  $element$$ = "function" !== typeof $element$$.getBoundingClientRect || goog.userAgent.IE && null == $element$$.parentElement ? {height:$element$$.offsetHeight, width:$element$$.offsetWidth} : $element$$.getBoundingClientRect();
  return null != $element$$ && 0 < $element$$.height && 0 < $element$$.width;
};
goog.dom.getTextContent = function $goog$dom$getTextContent$($node$$) {
  if (goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && null !== $node$$ && "innerText" in $node$$) {
    $node$$ = goog.string.canonicalizeNewlines($node$$.innerText);
  } else {
    var $buf$$ = [];
    goog.dom.getTextContent_($node$$, $buf$$, !0);
    $node$$ = $buf$$.join("");
  }
  $node$$ = $node$$.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  $node$$ = $node$$.replace(/\u200B/g, "");
  goog.dom.BrowserFeature.CAN_USE_INNER_TEXT || ($node$$ = $node$$.replace(/ +/g, " "));
  " " != $node$$ && ($node$$ = $node$$.replace(/^\s*/, ""));
  return $node$$;
};
goog.dom.getRawTextContent = function $goog$dom$getRawTextContent$($node$$) {
  var $buf$$ = [];
  goog.dom.getTextContent_($node$$, $buf$$, !1);
  return $buf$$.join("");
};
goog.dom.getTextContent_ = function $goog$dom$getTextContent_$($child$jscomp$6_node$$, $buf$$, $normalizeWhitespace$$) {
  if (!($child$jscomp$6_node$$.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
    if ($child$jscomp$6_node$$.nodeType == goog.dom.NodeType.TEXT) {
      $normalizeWhitespace$$ ? $buf$$.push(String($child$jscomp$6_node$$.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : $buf$$.push($child$jscomp$6_node$$.nodeValue);
    } else {
      if ($child$jscomp$6_node$$.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        $buf$$.push(goog.dom.PREDEFINED_TAG_VALUES_[$child$jscomp$6_node$$.nodeName]);
      } else {
        for ($child$jscomp$6_node$$ = $child$jscomp$6_node$$.firstChild; $child$jscomp$6_node$$;) {
          goog.dom.getTextContent_($child$jscomp$6_node$$, $buf$$, $normalizeWhitespace$$), $child$jscomp$6_node$$ = $child$jscomp$6_node$$.nextSibling;
        }
      }
    }
  }
};
goog.dom.getNodeTextLength = function $goog$dom$getNodeTextLength$($node$$) {
  return goog.dom.getTextContent($node$$).length;
};
goog.dom.getNodeTextOffset = function $goog$dom$getNodeTextOffset$($node$$, $opt_offsetParent_root$$) {
  $opt_offsetParent_root$$ = $opt_offsetParent_root$$ || goog.dom.getOwnerDocument($node$$).body;
  for (var $buf$$ = []; $node$$ && $node$$ != $opt_offsetParent_root$$;) {
    for (var $cur$$ = $node$$; $cur$$ = $cur$$.previousSibling;) {
      $buf$$.unshift(goog.dom.getTextContent($cur$$));
    }
    $node$$ = $node$$.parentNode;
  }
  return goog.string.trimLeft($buf$$.join("")).replace(/ +/g, " ").length;
};
goog.dom.getNodeAtOffset = function $goog$dom$getNodeAtOffset$($parent$jscomp$19_stack$$, $offset$$, $opt_result$$) {
  $parent$jscomp$19_stack$$ = [$parent$jscomp$19_stack$$];
  for (var $pos$$ = 0, $cur$$ = null; 0 < $parent$jscomp$19_stack$$.length && $pos$$ < $offset$$;) {
    if ($cur$$ = $parent$jscomp$19_stack$$.pop(), !($cur$$.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
      if ($cur$$.nodeType == goog.dom.NodeType.TEXT) {
        var $i$jscomp$102_text$$ = $cur$$.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
        $pos$$ += $i$jscomp$102_text$$.length;
      } else {
        if ($cur$$.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          $pos$$ += goog.dom.PREDEFINED_TAG_VALUES_[$cur$$.nodeName].length;
        } else {
          for ($i$jscomp$102_text$$ = $cur$$.childNodes.length - 1; 0 <= $i$jscomp$102_text$$; $i$jscomp$102_text$$--) {
            $parent$jscomp$19_stack$$.push($cur$$.childNodes[$i$jscomp$102_text$$]);
          }
        }
      }
    }
  }
  goog.isObject($opt_result$$) && ($opt_result$$.remainder = $cur$$ ? $cur$$.nodeValue.length + $offset$$ - $pos$$ - 1 : 0, $opt_result$$.node = $cur$$);
  return $cur$$;
};
goog.dom.isNodeList = function $goog$dom$isNodeList$($val$$) {
  if ($val$$ && "number" == typeof $val$$.length) {
    if (goog.isObject($val$$)) {
      return "function" == typeof $val$$.item || "string" == typeof $val$$.item;
    }
    if ("function" === typeof $val$$) {
      return "function" == typeof $val$$.item;
    }
  }
  return !1;
};
goog.dom.getAncestorByTagNameAndClass = function $goog$dom$getAncestorByTagNameAndClass$($element$$, $opt_tag$$, $opt_class$$, $opt_maxSearchSteps$$) {
  if (!$opt_tag$$ && !$opt_class$$) {
    return null;
  }
  var $tagName$$ = $opt_tag$$ ? String($opt_tag$$).toUpperCase() : null;
  return goog.dom.getAncestor($element$$, function($node$$) {
    return (!$tagName$$ || $node$$.nodeName == $tagName$$) && (!$opt_class$$ || "string" === typeof $node$$.className && module$contents$goog$array_contains($node$$.className.split(/\s+/), $opt_class$$));
  }, !0, $opt_maxSearchSteps$$);
};
goog.dom.getAncestorByClass = function $goog$dom$getAncestorByClass$($element$$, $className$$, $opt_maxSearchSteps$$) {
  return goog.dom.getAncestorByTagNameAndClass($element$$, null, $className$$, $opt_maxSearchSteps$$);
};
goog.dom.getAncestor = function $goog$dom$getAncestor$($element$$, $matcher$$, $opt_includeNode_steps$$, $opt_maxSearchSteps$$) {
  $element$$ && !$opt_includeNode_steps$$ && ($element$$ = $element$$.parentNode);
  for ($opt_includeNode_steps$$ = 0; $element$$ && (null == $opt_maxSearchSteps$$ || $opt_includeNode_steps$$ <= $opt_maxSearchSteps$$);) {
    goog.asserts.assert("parentNode" != $element$$.name);
    if ($matcher$$($element$$)) {
      return $element$$;
    }
    $element$$ = $element$$.parentNode;
    $opt_includeNode_steps$$++;
  }
  return null;
};
goog.dom.getActiveElement = function $goog$dom$getActiveElement$($doc$$) {
  try {
    var $activeElement$$ = $doc$$ && $doc$$.activeElement;
    return $activeElement$$ && $activeElement$$.nodeName ? $activeElement$$ : null;
  } catch ($e$$) {
    return null;
  }
};
goog.dom.getPixelRatio = function $goog$dom$getPixelRatio$() {
  var $win$$ = goog.dom.getWindow();
  return void 0 !== $win$$.devicePixelRatio ? $win$$.devicePixelRatio : $win$$.matchMedia ? goog.dom.matchesPixelRatio_(3) || goog.dom.matchesPixelRatio_(2) || goog.dom.matchesPixelRatio_(1.5) || goog.dom.matchesPixelRatio_(1) || .75 : 1;
};
goog.dom.matchesPixelRatio_ = function $goog$dom$matchesPixelRatio_$($pixelRatio$$) {
  return goog.dom.getWindow().matchMedia("(min-resolution: " + $pixelRatio$$ + "dppx),(min--moz-device-pixel-ratio: " + $pixelRatio$$ + "),(min-resolution: " + 96 * $pixelRatio$$ + "dpi)").matches ? $pixelRatio$$ : 0;
};
goog.dom.getCanvasContext2D = function $goog$dom$getCanvasContext2D$($canvas$$) {
  return $canvas$$.getContext("2d");
};
goog.dom.DomHelper = function $goog$dom$DomHelper$($opt_document$$) {
  this.document_ = $opt_document$$ || goog.global.document || document;
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function $goog$dom$DomHelper$$setDocument$($document$$) {
  this.document_ = $document$$;
};
goog.dom.DomHelper.prototype.getDocument = function $goog$dom$DomHelper$$getDocument$() {
  return this.document_;
};
goog.dom.DomHelper.prototype.getElement = function $goog$dom$DomHelper$$getElement$($element$$) {
  return goog.dom.getElementHelper_(this.document_, $element$$);
};
goog.dom.DomHelper.prototype.getRequiredElement = function $goog$dom$DomHelper$$getRequiredElement$($id$$) {
  return goog.dom.getRequiredElementHelper_(this.document_, $id$$);
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagName = function $goog$dom$DomHelper$$getElementsByTagName$($tagName$$, $opt_parent$$) {
  return ($opt_parent$$ || this.document_).getElementsByTagName(String($tagName$$));
};
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function $goog$dom$DomHelper$$getElementsByTagNameAndClass$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, $opt_tag$$, $opt_class$$, $opt_el$$);
};
goog.dom.DomHelper.prototype.getElementByTagNameAndClass = function $goog$dom$DomHelper$$getElementByTagNameAndClass$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return goog.dom.getElementByTagNameAndClass_(this.document_, $opt_tag$$, $opt_class$$, $opt_el$$);
};
goog.dom.DomHelper.prototype.getElementsByClass = function $goog$dom$DomHelper$$getElementsByClass$($className$$, $opt_el$$) {
  return goog.dom.getElementsByClass($className$$, $opt_el$$ || this.document_);
};
goog.dom.DomHelper.prototype.getElementByClass = function $goog$dom$DomHelper$$getElementByClass$($className$$, $opt_el$$) {
  return goog.dom.getElementByClass($className$$, $opt_el$$ || this.document_);
};
goog.dom.DomHelper.prototype.getRequiredElementByClass = function $goog$dom$DomHelper$$getRequiredElementByClass$($className$$, $opt_root$$) {
  return goog.dom.getRequiredElementByClass($className$$, $opt_root$$ || this.document_);
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function $goog$dom$DomHelper$$getViewportSize$($opt_window$$) {
  return goog.dom.getViewportSize($opt_window$$ || this.getWindow());
};
goog.dom.DomHelper.prototype.getDocumentHeight = function $goog$dom$DomHelper$$getDocumentHeight$() {
  return goog.dom.getDocumentHeight_(this.getWindow());
};
goog.dom.DomHelper.prototype.createDom = function $goog$dom$DomHelper$$createDom$($tagName$$, $opt_attributes$$, $var_args$$) {
  return goog.dom.createDom_(this.document_, arguments);
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function $goog$dom$DomHelper$$createElement$($name$$) {
  return goog.dom.createElement_(this.document_, $name$$);
};
goog.dom.DomHelper.prototype.createTextNode = function $goog$dom$DomHelper$$createTextNode$($content$$) {
  return this.document_.createTextNode(String($content$$));
};
goog.dom.DomHelper.prototype.createTable = function $goog$dom$DomHelper$$createTable$($rows$$, $columns$$, $opt_fillWithNbsp$$) {
  return goog.dom.createTable_(this.document_, $rows$$, $columns$$, !!$opt_fillWithNbsp$$);
};
goog.dom.DomHelper.prototype.safeHtmlToNode = function $goog$dom$DomHelper$$safeHtmlToNode$($html$$) {
  return goog.dom.safeHtmlToNode_(this.document_, $html$$);
};
goog.dom.DomHelper.prototype.isCss1CompatMode = function $goog$dom$DomHelper$$isCss1CompatMode$() {
  return goog.dom.isCss1CompatMode_(this.document_);
};
goog.dom.DomHelper.prototype.getWindow = function $goog$dom$DomHelper$$getWindow$() {
  return goog.dom.getWindow_(this.document_);
};
goog.dom.DomHelper.prototype.getDocumentScrollElement = function $goog$dom$DomHelper$$getDocumentScrollElement$() {
  return goog.dom.getDocumentScrollElement_(this.document_);
};
goog.dom.DomHelper.prototype.getDocumentScroll = function $goog$dom$DomHelper$$getDocumentScroll$() {
  return goog.dom.getDocumentScroll_(this.document_);
};
goog.dom.DomHelper.prototype.getActiveElement = function $goog$dom$DomHelper$$getActiveElement$($opt_doc$$) {
  return goog.dom.getActiveElement($opt_doc$$ || this.document_);
};
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
goog.dom.DomHelper.prototype.append = goog.dom.append;
goog.dom.DomHelper.prototype.canHaveChildren = goog.dom.canHaveChildren;
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
goog.dom.DomHelper.prototype.insertChildAt = goog.dom.insertChildAt;
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
goog.dom.DomHelper.prototype.copyContents = goog.dom.copyContents;
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
goog.dom.DomHelper.prototype.getChildren = goog.dom.getChildren;
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
goog.dom.DomHelper.prototype.isElement = goog.dom.isElement;
goog.dom.DomHelper.prototype.isWindow = goog.dom.isWindow;
goog.dom.DomHelper.prototype.getParentElement = goog.dom.getParentElement;
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
goog.dom.DomHelper.prototype.compareNodeOrder = goog.dom.compareNodeOrder;
goog.dom.DomHelper.prototype.findCommonAncestor = goog.dom.findCommonAncestor;
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
goog.dom.DomHelper.prototype.getOuterHtml = goog.dom.getOuterHtml;
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
goog.dom.DomHelper.prototype.isFocusableTabIndex = goog.dom.isFocusableTabIndex;
goog.dom.DomHelper.prototype.setFocusableTabIndex = goog.dom.setFocusableTabIndex;
goog.dom.DomHelper.prototype.isFocusable = goog.dom.isFocusable;
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getNodeAtOffset = goog.dom.getNodeAtOffset;
goog.dom.DomHelper.prototype.isNodeList = goog.dom.isNodeList;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass;
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
goog.dom.DomHelper.prototype.getCanvasContext2D = goog.dom.getCanvasContext2D;
goog.async.nextTick = function $goog$async$nextTick$($callback$$, $opt_context$$, $opt_useSetImmediate$$) {
  var $cb$$ = $callback$$;
  $opt_context$$ && ($cb$$ = goog.bind($callback$$, $opt_context$$));
  $cb$$ = goog.async.nextTick.wrapCallback_($cb$$);
  "function" === typeof goog.global.setImmediate && ($opt_useSetImmediate$$ || goog.async.nextTick.useSetImmediate_()) ? goog.global.setImmediate($cb$$) : (goog.async.nextTick.setImmediate_ || (goog.async.nextTick.setImmediate_ = goog.async.nextTick.getSetImmediateEmulator_()), goog.async.nextTick.setImmediate_($cb$$));
};
goog.async.nextTick.useSetImmediate_ = function $goog$async$nextTick$useSetImmediate_$() {
  return goog.global.Window && goog.global.Window.prototype && !goog.labs.userAgent.browser.isEdge() && goog.global.Window.prototype.setImmediate == goog.global.setImmediate ? !1 : !0;
};
goog.async.nextTick.getSetImmediateEmulator_ = function $goog$async$nextTick$getSetImmediateEmulator_$() {
  var $Channel$$ = goog.global.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && !goog.labs.userAgent.engine.isPresto() && ($Channel$$ = function $$Channel$$$() {
    var $doc$jscomp$35_iframe$$ = goog.dom.createElement("IFRAME");
    $doc$jscomp$35_iframe$$.style.display = "none";
    document.documentElement.appendChild($doc$jscomp$35_iframe$$);
    var $win$$ = $doc$jscomp$35_iframe$$.contentWindow;
    $doc$jscomp$35_iframe$$ = $win$$.document;
    $doc$jscomp$35_iframe$$.open();
    $doc$jscomp$35_iframe$$.close();
    var $message$$ = "callImmediate" + Math.random(), $origin$$ = "file:" == $win$$.location.protocol ? "*" : $win$$.location.protocol + "//" + $win$$.location.host;
    $doc$jscomp$35_iframe$$ = goog.bind(function($e$$) {
      if (("*" == $origin$$ || $e$$.origin == $origin$$) && $e$$.data == $message$$) {
        this.port1.onmessage();
      }
    }, this);
    $win$$.addEventListener("message", $doc$jscomp$35_iframe$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function $this$port2$postMessage$() {
      $win$$.postMessage($message$$, $origin$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && !goog.labs.userAgent.browser.isIE()) {
    var $channel$$ = new $Channel$$, $head$$ = {}, $tail$$ = $head$$;
    $channel$$.port1.onmessage = function $$channel$$$port1$onmessage$() {
      if (void 0 !== $head$$.next) {
        $head$$ = $head$$.next;
        var $cb$$ = $head$$.cb;
        $head$$.cb = null;
        $cb$$();
      }
    };
    return function($cb$$) {
      $tail$$.next = {cb:$cb$$};
      $tail$$ = $tail$$.next;
      $channel$$.port2.postMessage(0);
    };
  }
  return function($cb$$) {
    goog.global.setTimeout($cb$$, 0);
  };
};
goog.async.nextTick.wrapCallback_ = goog.functions.identity;
goog.debug.entryPointRegistry.register(function($transformer$$) {
  goog.async.nextTick.wrapCallback_ = $transformer$$;
});
function module$contents$goog$async$throwException_throwException($exception$$) {
  goog.global.setTimeout(function() {
    throw $exception$$;
  }, 0);
}
goog.async.throwException = module$contents$goog$async$throwException_throwException;
goog.ASSUME_NATIVE_PROMISE = !1;
goog.async.run = function $goog$async$run$($callback$$, $opt_context$$) {
  goog.async.run.schedule_ || goog.async.run.initializeRunner_();
  goog.async.run.workQueueScheduled_ || (goog.async.run.schedule_(), goog.async.run.workQueueScheduled_ = !0);
  goog.async.run.workQueue_.add($callback$$, $opt_context$$);
};
goog.async.run.initializeRunner_ = function $goog$async$run$initializeRunner_$() {
  if (goog.ASSUME_NATIVE_PROMISE || goog.global.Promise && goog.global.Promise.resolve) {
    var $promise$$ = goog.global.Promise.resolve(void 0);
    goog.async.run.schedule_ = function $goog$async$run$schedule_$() {
      $promise$$.then(goog.async.run.processWorkQueue);
    };
  } else {
    goog.async.run.schedule_ = function $goog$async$run$schedule_$() {
      goog.async.nextTick(goog.async.run.processWorkQueue);
    };
  }
};
goog.async.run.forceNextTick = function $goog$async$run$forceNextTick$($opt_realSetTimeout$$) {
  goog.async.run.schedule_ = function $goog$async$run$schedule_$() {
    goog.async.nextTick(goog.async.run.processWorkQueue);
    $opt_realSetTimeout$$ && $opt_realSetTimeout$$(goog.async.run.processWorkQueue);
  };
};
goog.async.run.workQueueScheduled_ = !1;
goog.async.run.workQueue_ = new module$contents$goog$async$WorkQueue_WorkQueue;
goog.DEBUG && (goog.async.run.resetQueue = function $goog$async$run$resetQueue$() {
  goog.async.run.workQueueScheduled_ = !1;
  goog.async.run.workQueue_ = new module$contents$goog$async$WorkQueue_WorkQueue;
});
goog.async.run.processWorkQueue = function $goog$async$run$processWorkQueue$() {
  for (var $item$$; $item$$ = goog.async.run.workQueue_.remove();) {
    try {
      $item$$.fn.call($item$$.scope);
    } catch ($e$$) {
      module$contents$goog$async$throwException_throwException($e$$);
    }
    goog.async.run.workQueue_.returnUnused($item$$);
  }
  goog.async.run.workQueueScheduled_ = !1;
};
goog.promise = {};
goog.promise.Resolver = function $goog$promise$Resolver$() {
};
goog.Promise = function $goog$Promise$($resolver$$, $opt_context$$) {
  this.state_ = goog.Promise.State_.PENDING;
  this.result_ = void 0;
  this.callbackEntriesTail_ = this.callbackEntries_ = this.parent_ = null;
  this.executing_ = !1;
  0 < goog.Promise.UNHANDLED_REJECTION_DELAY ? this.unhandledRejectionId_ = 0 : 0 == goog.Promise.UNHANDLED_REJECTION_DELAY && (this.hadUnhandledRejection_ = !1);
  goog.Promise.LONG_STACK_TRACES && (this.stack_ = [], this.addStackTrace_(Error("created")), this.currentStep_ = 0);
  if ($resolver$$ != goog.nullFunction) {
    try {
      var $self$$ = this;
      $resolver$$.call($opt_context$$, function($value$$) {
        $self$$.resolve_(goog.Promise.State_.FULFILLED, $value$$);
      }, function($reason$$) {
        if (goog.DEBUG && !($reason$$ instanceof goog.Promise.CancellationError)) {
          try {
            if ($reason$$ instanceof Error) {
              throw $reason$$;
            }
            throw Error("Promise rejected.");
          } catch ($e$$) {
          }
        }
        $self$$.resolve_(goog.Promise.State_.REJECTED, $reason$$);
      });
    } catch ($e$$) {
      this.resolve_(goog.Promise.State_.REJECTED, $e$$);
    }
  }
};
goog.Promise.LONG_STACK_TRACES = !1;
goog.Promise.UNHANDLED_REJECTION_DELAY = 0;
goog.Promise.State_ = {PENDING:0, BLOCKED:1, FULFILLED:2, REJECTED:3};
goog.Promise.CallbackEntry_ = function $goog$Promise$CallbackEntry_$() {
  this.next = this.context = this.onRejected = this.onFulfilled = this.child = null;
  this.always = !1;
};
goog.Promise.CallbackEntry_.prototype.reset = function $goog$Promise$CallbackEntry_$$reset$() {
  this.context = this.onRejected = this.onFulfilled = this.child = null;
  this.always = !1;
};
goog.Promise.DEFAULT_MAX_UNUSED = 100;
goog.Promise.freelist_ = new goog.async.FreeList(function() {
  return new goog.Promise.CallbackEntry_;
}, function($item$$) {
  $item$$.reset();
}, goog.Promise.DEFAULT_MAX_UNUSED);
goog.Promise.getCallbackEntry_ = function $goog$Promise$getCallbackEntry_$($onFulfilled$$, $onRejected$$, $context$$) {
  var $entry$$ = goog.Promise.freelist_.get();
  $entry$$.onFulfilled = $onFulfilled$$;
  $entry$$.onRejected = $onRejected$$;
  $entry$$.context = $context$$;
  return $entry$$;
};
goog.Promise.returnEntry_ = function $goog$Promise$returnEntry_$($entry$$) {
  goog.Promise.freelist_.put($entry$$);
};
goog.Promise.resolve = function $goog$Promise$resolve$($opt_value$$) {
  if ($opt_value$$ instanceof goog.Promise) {
    return $opt_value$$;
  }
  var $promise$$ = new goog.Promise(goog.nullFunction);
  $promise$$.resolve_(goog.Promise.State_.FULFILLED, $opt_value$$);
  return $promise$$;
};
goog.Promise.reject = function $goog$Promise$reject$($opt_reason$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    $reject$$($opt_reason$$);
  });
};
goog.Promise.resolveThen_ = function $goog$Promise$resolveThen_$($value$$, $onFulfilled$$, $onRejected$$) {
  goog.Promise.maybeThen_($value$$, $onFulfilled$$, $onRejected$$, null) || goog.async.run(goog.partial($onFulfilled$$, $value$$));
};
goog.Promise.race = function $goog$Promise$race$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    $promises$$.length || $resolve$$(void 0);
    for (var $i$$ = 0, $promise$$; $i$$ < $promises$$.length; $i$$++) {
      $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, $resolve$$, $reject$$);
    }
  });
};
goog.Promise.all = function $goog$Promise$all$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $toFulfill$$ = $promises$$.length, $values$$ = [];
    if ($toFulfill$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($index$$, $value$$) {
        $toFulfill$$--;
        $values$$[$index$$] = $value$$;
        0 == $toFulfill$$ && $resolve$$($values$$);
      }, $onReject$$ = function $$onReject$$$($reason$$) {
        $reject$$($reason$$);
      }, $i$$ = 0, $promise$$; $i$$ < $promises$$.length; $i$$++) {
        $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, goog.partial($onFulfill$$, $i$$), $onReject$$);
      }
    } else {
      $resolve$$($values$$);
    }
  });
};
goog.Promise.allSettled = function $goog$Promise$allSettled$($promises$$) {
  return new goog.Promise(function($resolve$$, $onSettled_reject$$) {
    var $toSettle$$ = $promises$$.length, $results$$ = [];
    if ($toSettle$$) {
      $onSettled_reject$$ = function $$onSettled_reject$$$($index$$, $fulfilled$$, $result$$) {
        $toSettle$$--;
        $results$$[$index$$] = $fulfilled$$ ? {fulfilled:!0, value:$result$$} : {fulfilled:!1, reason:$result$$};
        0 == $toSettle$$ && $resolve$$($results$$);
      };
      for (var $i$$ = 0, $promise$$; $i$$ < $promises$$.length; $i$$++) {
        $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, goog.partial($onSettled_reject$$, $i$$, !0), goog.partial($onSettled_reject$$, $i$$, !1));
      }
    } else {
      $resolve$$($results$$);
    }
  });
};
goog.Promise.firstFulfilled = function $goog$Promise$firstFulfilled$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $toReject$$ = $promises$$.length, $reasons$$ = [];
    if ($toReject$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($value$$) {
        $resolve$$($value$$);
      }, $onReject$$ = function $$onReject$$$($index$$, $reason$$) {
        $toReject$$--;
        $reasons$$[$index$$] = $reason$$;
        0 == $toReject$$ && $reject$$($reasons$$);
      }, $i$$ = 0, $promise$$; $i$$ < $promises$$.length; $i$$++) {
        $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, $onFulfill$$, goog.partial($onReject$$, $i$$));
      }
    } else {
      $resolve$$(void 0);
    }
  });
};
goog.Promise.withResolver = function $goog$Promise$withResolver$() {
  var $resolve$$, $reject$$, $promise$$ = new goog.Promise(function($rs$$, $rj$$) {
    $resolve$$ = $rs$$;
    $reject$$ = $rj$$;
  });
  return new goog.Promise.Resolver_($promise$$, $resolve$$, $reject$$);
};
goog.Promise.prototype.then = function $goog$Promise$$then$($opt_onFulfilled$$, $opt_onRejected$$, $opt_context$$) {
  null != $opt_onFulfilled$$ && goog.asserts.assertFunction($opt_onFulfilled$$, "opt_onFulfilled should be a function.");
  null != $opt_onRejected$$ && goog.asserts.assertFunction($opt_onRejected$$, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then"));
  return this.addChildPromise_("function" === typeof $opt_onFulfilled$$ ? $opt_onFulfilled$$ : null, "function" === typeof $opt_onRejected$$ ? $opt_onRejected$$ : null, $opt_context$$);
};
goog.Thenable.addImplementation(goog.Promise);
goog.Promise.prototype.thenVoid = function $goog$Promise$$thenVoid$($opt_onFulfilled$$, $opt_onRejected$$, $opt_context$$) {
  null != $opt_onFulfilled$$ && goog.asserts.assertFunction($opt_onFulfilled$$, "opt_onFulfilled should be a function.");
  null != $opt_onRejected$$ && goog.asserts.assertFunction($opt_onRejected$$, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then"));
  this.addCallbackEntry_(goog.Promise.getCallbackEntry_($opt_onFulfilled$$ || goog.nullFunction, $opt_onRejected$$ || null, $opt_context$$));
};
goog.Promise.prototype.thenAlways = function $goog$Promise$$thenAlways$($entry$jscomp$11_onSettled$$, $opt_context$$) {
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenAlways"));
  $entry$jscomp$11_onSettled$$ = goog.Promise.getCallbackEntry_($entry$jscomp$11_onSettled$$, $entry$jscomp$11_onSettled$$, $opt_context$$);
  $entry$jscomp$11_onSettled$$.always = !0;
  this.addCallbackEntry_($entry$jscomp$11_onSettled$$);
  return this;
};
goog.Promise.prototype.thenCatch = function $goog$Promise$$thenCatch$($onRejected$$, $opt_context$$) {
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenCatch"));
  return this.addChildPromise_(null, $onRejected$$, $opt_context$$);
};
goog.Promise.prototype.cancel = function $goog$Promise$$cancel$($opt_message$$) {
  if (this.state_ == goog.Promise.State_.PENDING) {
    var $err$$ = new goog.Promise.CancellationError($opt_message$$);
    goog.async.run(function() {
      this.cancelInternal_($err$$);
    }, this);
  }
};
goog.Promise.prototype.cancelInternal_ = function $goog$Promise$$cancelInternal_$($err$$) {
  this.state_ == goog.Promise.State_.PENDING && (this.parent_ ? (this.parent_.cancelChild_(this, $err$$), this.parent_ = null) : this.resolve_(goog.Promise.State_.REJECTED, $err$$));
};
goog.Promise.prototype.cancelChild_ = function $goog$Promise$$cancelChild_$($childPromise$$, $err$$) {
  if (this.callbackEntries_) {
    for (var $childCount$$ = 0, $childEntry$$ = null, $beforeChildEntry$$ = null, $entry$$ = this.callbackEntries_; $entry$$ && ($entry$$.always || ($childCount$$++, $entry$$.child == $childPromise$$ && ($childEntry$$ = $entry$$), !($childEntry$$ && 1 < $childCount$$))); $entry$$ = $entry$$.next) {
      $childEntry$$ || ($beforeChildEntry$$ = $entry$$);
    }
    $childEntry$$ && (this.state_ == goog.Promise.State_.PENDING && 1 == $childCount$$ ? this.cancelInternal_($err$$) : ($beforeChildEntry$$ ? this.removeEntryAfter_($beforeChildEntry$$) : this.popEntry_(), this.executeCallback_($childEntry$$, goog.Promise.State_.REJECTED, $err$$)));
  }
};
goog.Promise.prototype.addCallbackEntry_ = function $goog$Promise$$addCallbackEntry_$($callbackEntry$$) {
  this.hasEntry_() || this.state_ != goog.Promise.State_.FULFILLED && this.state_ != goog.Promise.State_.REJECTED || this.scheduleCallbacks_();
  this.queueEntry_($callbackEntry$$);
};
goog.Promise.prototype.addChildPromise_ = function $goog$Promise$$addChildPromise_$($onFulfilled$$, $onRejected$$, $opt_context$$) {
  var $callbackEntry$$ = goog.Promise.getCallbackEntry_(null, null, null);
  $callbackEntry$$.child = new goog.Promise(function($resolve$$, $reject$$) {
    $callbackEntry$$.onFulfilled = $onFulfilled$$ ? function($value$$) {
      try {
        var $result$$ = $onFulfilled$$.call($opt_context$$, $value$$);
        $resolve$$($result$$);
      } catch ($err$14$$) {
        $reject$$($err$14$$);
      }
    } : $resolve$$;
    $callbackEntry$$.onRejected = $onRejected$$ ? function($reason$$) {
      try {
        var $result$$ = $onRejected$$.call($opt_context$$, $reason$$);
        void 0 === $result$$ && $reason$$ instanceof goog.Promise.CancellationError ? $reject$$($reason$$) : $resolve$$($result$$);
      } catch ($err$15$$) {
        $reject$$($err$15$$);
      }
    } : $reject$$;
  });
  $callbackEntry$$.child.parent_ = this;
  this.addCallbackEntry_($callbackEntry$$);
  return $callbackEntry$$.child;
};
goog.Promise.prototype.unblockAndFulfill_ = function $goog$Promise$$unblockAndFulfill_$($value$$) {
  goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
  this.state_ = goog.Promise.State_.PENDING;
  this.resolve_(goog.Promise.State_.FULFILLED, $value$$);
};
goog.Promise.prototype.unblockAndReject_ = function $goog$Promise$$unblockAndReject_$($reason$$) {
  goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
  this.state_ = goog.Promise.State_.PENDING;
  this.resolve_(goog.Promise.State_.REJECTED, $reason$$);
};
goog.Promise.prototype.resolve_ = function $goog$Promise$$resolve_$($state$$, $x$$) {
  this.state_ == goog.Promise.State_.PENDING && (this === $x$$ && ($state$$ = goog.Promise.State_.REJECTED, $x$$ = new TypeError("Promise cannot resolve to itself")), this.state_ = goog.Promise.State_.BLOCKED, goog.Promise.maybeThen_($x$$, this.unblockAndFulfill_, this.unblockAndReject_, this) || (this.result_ = $x$$, this.state_ = $state$$, this.parent_ = null, this.scheduleCallbacks_(), $state$$ != goog.Promise.State_.REJECTED || $x$$ instanceof goog.Promise.CancellationError || goog.Promise.addUnhandledRejection_(this, 
  $x$$)));
};
goog.Promise.maybeThen_ = function $goog$Promise$maybeThen_$($value$$, $onFulfilled$$, $onRejected$$, $context$$) {
  if ($value$$ instanceof goog.Promise) {
    return $value$$.thenVoid($onFulfilled$$, $onRejected$$, $context$$), !0;
  }
  if (goog.Thenable.isImplementedBy($value$$)) {
    return $value$$.then($onFulfilled$$, $onRejected$$, $context$$), !0;
  }
  if (goog.isObject($value$$)) {
    try {
      var $then$$ = $value$$.then;
      if ("function" === typeof $then$$) {
        return goog.Promise.tryThen_($value$$, $then$$, $onFulfilled$$, $onRejected$$, $context$$), !0;
      }
    } catch ($e$$) {
      return $onRejected$$.call($context$$, $e$$), !0;
    }
  }
  return !1;
};
goog.Promise.tryThen_ = function $goog$Promise$tryThen_$($thenable$$, $then$$, $onFulfilled$$, $onRejected$$, $context$$) {
  var $called$$ = !1, $resolve$$ = function $$resolve$$$($value$$) {
    $called$$ || ($called$$ = !0, $onFulfilled$$.call($context$$, $value$$));
  }, $reject$$ = function $$reject$$$($reason$$) {
    $called$$ || ($called$$ = !0, $onRejected$$.call($context$$, $reason$$));
  };
  try {
    $then$$.call($thenable$$, $resolve$$, $reject$$);
  } catch ($e$$) {
    $reject$$($e$$);
  }
};
goog.Promise.prototype.scheduleCallbacks_ = function $goog$Promise$$scheduleCallbacks_$() {
  this.executing_ || (this.executing_ = !0, goog.async.run(this.executeCallbacks_, this));
};
goog.Promise.prototype.hasEntry_ = function $goog$Promise$$hasEntry_$() {
  return !!this.callbackEntries_;
};
goog.Promise.prototype.queueEntry_ = function $goog$Promise$$queueEntry_$($entry$$) {
  goog.asserts.assert(null != $entry$$.onFulfilled);
  this.callbackEntriesTail_ ? this.callbackEntriesTail_.next = $entry$$ : this.callbackEntries_ = $entry$$;
  this.callbackEntriesTail_ = $entry$$;
};
goog.Promise.prototype.popEntry_ = function $goog$Promise$$popEntry_$() {
  var $entry$$ = null;
  this.callbackEntries_ && ($entry$$ = this.callbackEntries_, this.callbackEntries_ = $entry$$.next, $entry$$.next = null);
  this.callbackEntries_ || (this.callbackEntriesTail_ = null);
  null != $entry$$ && goog.asserts.assert(null != $entry$$.onFulfilled);
  return $entry$$;
};
goog.Promise.prototype.removeEntryAfter_ = function $goog$Promise$$removeEntryAfter_$($previous$$) {
  goog.asserts.assert(this.callbackEntries_);
  goog.asserts.assert(null != $previous$$);
  $previous$$.next == this.callbackEntriesTail_ && (this.callbackEntriesTail_ = $previous$$);
  $previous$$.next = $previous$$.next.next;
};
goog.Promise.prototype.executeCallbacks_ = function $goog$Promise$$executeCallbacks_$() {
  for (var $entry$$; $entry$$ = this.popEntry_();) {
    goog.Promise.LONG_STACK_TRACES && this.currentStep_++, this.executeCallback_($entry$$, this.state_, this.result_);
  }
  this.executing_ = !1;
};
goog.Promise.prototype.executeCallback_ = function $goog$Promise$$executeCallback_$($callbackEntry$$, $state$$, $result$$) {
  $state$$ == goog.Promise.State_.REJECTED && $callbackEntry$$.onRejected && !$callbackEntry$$.always && this.removeUnhandledRejection_();
  if ($callbackEntry$$.child) {
    $callbackEntry$$.child.parent_ = null, goog.Promise.invokeCallback_($callbackEntry$$, $state$$, $result$$);
  } else {
    try {
      $callbackEntry$$.always ? $callbackEntry$$.onFulfilled.call($callbackEntry$$.context) : goog.Promise.invokeCallback_($callbackEntry$$, $state$$, $result$$);
    } catch ($err$16$$) {
      goog.Promise.handleRejection_.call(null, $err$16$$);
    }
  }
  goog.Promise.returnEntry_($callbackEntry$$);
};
goog.Promise.invokeCallback_ = function $goog$Promise$invokeCallback_$($callbackEntry$$, $state$$, $result$$) {
  $state$$ == goog.Promise.State_.FULFILLED ? $callbackEntry$$.onFulfilled.call($callbackEntry$$.context, $result$$) : $callbackEntry$$.onRejected && $callbackEntry$$.onRejected.call($callbackEntry$$.context, $result$$);
};
goog.Promise.prototype.addStackTrace_ = function $goog$Promise$$addStackTrace_$($err$jscomp$12_message$$) {
  if (goog.Promise.LONG_STACK_TRACES && "string" === typeof $err$jscomp$12_message$$.stack) {
    var $trace$$ = $err$jscomp$12_message$$.stack.split("\n", 4)[3];
    $err$jscomp$12_message$$ = $err$jscomp$12_message$$.message;
    $err$jscomp$12_message$$ += Array(11 - $err$jscomp$12_message$$.length).join(" ");
    this.stack_.push($err$jscomp$12_message$$ + $trace$$);
  }
};
goog.Promise.prototype.appendLongStack_ = function $goog$Promise$$appendLongStack_$($err$$) {
  if (goog.Promise.LONG_STACK_TRACES && $err$$ && "string" === typeof $err$$.stack && this.stack_.length) {
    for (var $longTrace$$ = ["Promise trace:"], $promise$$ = this; $promise$$; $promise$$ = $promise$$.parent_) {
      for (var $i$$ = this.currentStep_; 0 <= $i$$; $i$$--) {
        $longTrace$$.push($promise$$.stack_[$i$$]);
      }
      $longTrace$$.push("Value: [" + ($promise$$.state_ == goog.Promise.State_.REJECTED ? "REJECTED" : "FULFILLED") + "] <" + String($promise$$.result_) + ">");
    }
    $err$$.stack += "\n\n" + $longTrace$$.join("\n");
  }
};
goog.Promise.prototype.removeUnhandledRejection_ = function $goog$Promise$$removeUnhandledRejection_$() {
  if (0 < goog.Promise.UNHANDLED_REJECTION_DELAY) {
    for (var $p$$ = this; $p$$ && $p$$.unhandledRejectionId_; $p$$ = $p$$.parent_) {
      goog.global.clearTimeout($p$$.unhandledRejectionId_), $p$$.unhandledRejectionId_ = 0;
    }
  } else {
    if (0 == goog.Promise.UNHANDLED_REJECTION_DELAY) {
      for ($p$$ = this; $p$$ && $p$$.hadUnhandledRejection_; $p$$ = $p$$.parent_) {
        $p$$.hadUnhandledRejection_ = !1;
      }
    }
  }
};
goog.Promise.addUnhandledRejection_ = function $goog$Promise$addUnhandledRejection_$($promise$$, $reason$$) {
  0 < goog.Promise.UNHANDLED_REJECTION_DELAY ? $promise$$.unhandledRejectionId_ = goog.global.setTimeout(function() {
    $promise$$.appendLongStack_($reason$$);
    goog.Promise.handleRejection_.call(null, $reason$$);
  }, goog.Promise.UNHANDLED_REJECTION_DELAY) : 0 == goog.Promise.UNHANDLED_REJECTION_DELAY && ($promise$$.hadUnhandledRejection_ = !0, goog.async.run(function() {
    $promise$$.hadUnhandledRejection_ && ($promise$$.appendLongStack_($reason$$), goog.Promise.handleRejection_.call(null, $reason$$));
  }));
};
goog.Promise.handleRejection_ = module$contents$goog$async$throwException_throwException;
goog.Promise.setUnhandledRejectionHandler = function $goog$Promise$setUnhandledRejectionHandler$($handler$$) {
  goog.Promise.handleRejection_ = $handler$$;
};
goog.Promise.CancellationError = function $goog$Promise$CancellationError$($opt_message$$) {
  module$contents$goog$debug$Error_DebugError.call(this, $opt_message$$);
  this.reportErrorToServer = !1;
};
goog.inherits(goog.Promise.CancellationError, module$contents$goog$debug$Error_DebugError);
goog.Promise.CancellationError.prototype.name = "cancel";
goog.Promise.Resolver_ = function $goog$Promise$Resolver_$($promise$$, $resolve$$, $reject$$) {
  this.promise = $promise$$;
  this.resolve = $resolve$$;
  this.reject = $reject$$;
};
goog.disposable = {};
goog.disposable.IDisposable = function $goog$disposable$IDisposable$() {
};
goog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;
goog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;
function module$contents$goog$dispose_dispose($obj$$) {
  $obj$$ && "function" == typeof $obj$$.dispose && $obj$$.dispose();
}
goog.dispose = module$contents$goog$dispose_dispose;
function module$contents$goog$disposeAll_disposeAll($var_args$$) {
  for (var $i$$ = 0, $len$$ = arguments.length; $i$$ < $len$$; ++$i$$) {
    var $disposable$$ = arguments[$i$$];
    goog.isArrayLike($disposable$$) ? module$contents$goog$disposeAll_disposeAll.apply(null, $disposable$$) : module$contents$goog$dispose_dispose($disposable$$);
  }
}
goog.disposeAll = module$contents$goog$disposeAll_disposeAll;
goog.Disposable = function $goog$Disposable$() {
  goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF && (goog.Disposable.INCLUDE_STACK_ON_CREATION && (this.creationStack = Error().stack), goog.Disposable.instances_[goog.getUid(this)] = this);
  this.disposed_ = this.disposed_;
  this.onDisposeCallbacks_ = this.onDisposeCallbacks_;
};
goog.Disposable.MonitoringMode = {OFF:0, PERMANENT:1, INTERACTIVE:2};
goog.Disposable.MONITORING_MODE = 0;
goog.Disposable.INCLUDE_STACK_ON_CREATION = !0;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function $goog$Disposable$getUndisposedObjects$() {
  var $ret$$ = [], $id$$;
  for ($id$$ in goog.Disposable.instances_) {
    goog.Disposable.instances_.hasOwnProperty($id$$) && $ret$$.push(goog.Disposable.instances_[Number($id$$)]);
  }
  return $ret$$;
};
goog.Disposable.clearUndisposedObjects = function $goog$Disposable$clearUndisposedObjects$() {
  goog.Disposable.instances_ = {};
};
goog.Disposable.prototype.disposed_ = !1;
goog.Disposable.prototype.isDisposed = function $goog$Disposable$$isDisposed$() {
  return this.disposed_;
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function $goog$Disposable$$dispose$() {
  if (!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF)) {
    var $uid$$ = goog.getUid(this);
    if (goog.Disposable.MONITORING_MODE == goog.Disposable.MonitoringMode.PERMANENT && !goog.Disposable.instances_.hasOwnProperty($uid$$)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    if (goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF && this.onDisposeCallbacks_ && 0 < this.onDisposeCallbacks_.length) {
      throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
    }
    delete goog.Disposable.instances_[$uid$$];
  }
};
goog.Disposable.prototype.registerDisposable = function $goog$Disposable$$registerDisposable$($disposable$$) {
  this.addOnDisposeCallback(goog.partial(module$contents$goog$dispose_dispose, $disposable$$));
};
goog.Disposable.prototype.addOnDisposeCallback = function $goog$Disposable$$addOnDisposeCallback$($callback$$, $opt_scope$$) {
  this.disposed_ ? void 0 !== $opt_scope$$ ? $callback$$.call($opt_scope$$) : $callback$$() : (this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []), this.onDisposeCallbacks_.push(void 0 !== $opt_scope$$ ? goog.bind($callback$$, $opt_scope$$) : $callback$$));
};
goog.Disposable.prototype.disposeInternal = function $goog$Disposable$$disposeInternal$() {
  if (this.onDisposeCallbacks_) {
    for (; this.onDisposeCallbacks_.length;) {
      this.onDisposeCallbacks_.shift()();
    }
  }
};
goog.Disposable.isDisposed = function $goog$Disposable$isDisposed$($obj$$) {
  return $obj$$ && "function" == typeof $obj$$.isDisposed ? $obj$$.isDisposed() : !1;
};
goog.debug.errorcontext = {};
goog.debug.errorcontext.addErrorContext = function $goog$debug$errorcontext$addErrorContext$($err$$, $contextKey$$, $contextValue$$) {
  $err$$[goog.debug.errorcontext.CONTEXT_KEY_] || ($err$$[goog.debug.errorcontext.CONTEXT_KEY_] = {});
  $err$$[goog.debug.errorcontext.CONTEXT_KEY_][$contextKey$$] = $contextValue$$;
};
goog.debug.errorcontext.getErrorContext = function $goog$debug$errorcontext$getErrorContext$($err$$) {
  return $err$$[goog.debug.errorcontext.CONTEXT_KEY_] || {};
};
goog.debug.errorcontext.CONTEXT_KEY_ = "__closure__error__context__984382";
goog.debug.LOGGING_ENABLED = goog.DEBUG;
goog.debug.FORCE_SLOPPY_STACKS = !1;
goog.debug.CHECK_FOR_THROWN_EVENT = !1;
goog.debug.catchErrors = function $goog$debug$catchErrors$($logFunc$$, $opt_cancel$$, $opt_target$jscomp$1_target$$) {
  $opt_target$jscomp$1_target$$ = $opt_target$jscomp$1_target$$ || goog.global;
  var $oldErrorHandler$$ = $opt_target$jscomp$1_target$$.onerror, $retVal$$ = !!$opt_cancel$$;
  $opt_target$jscomp$1_target$$.onerror = function $$opt_target$jscomp$1_target$$$onerror$($message$$, $url$$, $line$$, $opt_col$$, $opt_error$$) {
    $oldErrorHandler$$ && $oldErrorHandler$$($message$$, $url$$, $line$$, $opt_col$$, $opt_error$$);
    $logFunc$$({message:$message$$, fileName:$url$$, line:$line$$, lineNumber:$line$$, col:$opt_col$$, error:$opt_error$$});
    return $retVal$$;
  };
};
goog.debug.expose = function $goog$debug$expose$($obj$$, $opt_showFn$$) {
  if ("undefined" == typeof $obj$$) {
    return "undefined";
  }
  if (null == $obj$$) {
    return "NULL";
  }
  var $str$$ = [], $x$$;
  for ($x$$ in $obj$$) {
    if ($opt_showFn$$ || "function" !== typeof $obj$$[$x$$]) {
      var $s$$ = $x$$ + " = ";
      try {
        $s$$ += $obj$$[$x$$];
      } catch ($e$$) {
        $s$$ += "*** " + $e$$ + " ***";
      }
      $str$$.push($s$$);
    }
  }
  return $str$$.join("\n");
};
goog.debug.deepExpose = function $goog$debug$deepExpose$($i$jscomp$109_obj$$, $opt_showFn$$) {
  var $str$$ = [], $uidsToCleanup$$ = [], $ancestorUids$$ = {}, $helper$$ = function $$helper$$$($obj$$, $space$$) {
    var $nestspace$$ = $space$$ + "  ";
    try {
      if (void 0 === $obj$$) {
        $str$$.push("undefined");
      } else {
        if (null === $obj$$) {
          $str$$.push("NULL");
        } else {
          if ("string" === typeof $obj$$) {
            $str$$.push('"' + $obj$$.replace(/\n/g, "\n" + $space$$) + '"');
          } else {
            if ("function" === typeof $obj$$) {
              $str$$.push(String($obj$$).replace(/\n/g, "\n" + $space$$));
            } else {
              if (goog.isObject($obj$$)) {
                goog.hasUid($obj$$) || $uidsToCleanup$$.push($obj$$);
                var $uid$$ = goog.getUid($obj$$);
                if ($ancestorUids$$[$uid$$]) {
                  $str$$.push("*** reference loop detected (id=" + $uid$$ + ") ***");
                } else {
                  $ancestorUids$$[$uid$$] = !0;
                  $str$$.push("{");
                  for (var $x$$ in $obj$$) {
                    if ($opt_showFn$$ || "function" !== typeof $obj$$[$x$$]) {
                      $str$$.push("\n"), $str$$.push($nestspace$$), $str$$.push($x$$ + " = "), $helper$$($obj$$[$x$$], $nestspace$$);
                    }
                  }
                  $str$$.push("\n" + $space$$ + "}");
                  delete $ancestorUids$$[$uid$$];
                }
              } else {
                $str$$.push($obj$$);
              }
            }
          }
        }
      }
    } catch ($e$$) {
      $str$$.push("*** " + $e$$ + " ***");
    }
  };
  $helper$$($i$jscomp$109_obj$$, "");
  for ($i$jscomp$109_obj$$ = 0; $i$jscomp$109_obj$$ < $uidsToCleanup$$.length; $i$jscomp$109_obj$$++) {
    goog.removeUid($uidsToCleanup$$[$i$jscomp$109_obj$$]);
  }
  return $str$$.join("");
};
goog.debug.exposeArray = function $goog$debug$exposeArray$($arr$$) {
  for (var $str$$ = [], $i$$ = 0; $i$$ < $arr$$.length; $i$$++) {
    Array.isArray($arr$$[$i$$]) ? $str$$.push(goog.debug.exposeArray($arr$$[$i$$])) : $str$$.push($arr$$[$i$$]);
  }
  return "[ " + $str$$.join(", ") + " ]";
};
goog.debug.normalizeErrorObject = function $goog$debug$normalizeErrorObject$($err$$) {
  var $href_stack$$ = goog.getObjectByName("window.location.href");
  null == $err$$ && ($err$$ = 'Unknown Error of type "null/undefined"');
  if ("string" === typeof $err$$) {
    return {message:$err$$, name:"Unknown error", lineNumber:"Not available", fileName:$href_stack$$, stack:"Not available"};
  }
  var $message$$ = !1;
  try {
    var $lineNumber$$ = $err$$.lineNumber || $err$$.line || "Not available";
  } catch ($e$$) {
    $lineNumber$$ = "Not available", $message$$ = !0;
  }
  try {
    var $fileName$$ = $err$$.fileName || $err$$.filename || $err$$.sourceURL || goog.global.$googDebugFname || $href_stack$$;
  } catch ($e$17$$) {
    $fileName$$ = "Not available", $message$$ = !0;
  }
  $href_stack$$ = goog.debug.serializeErrorStack_($err$$);
  if (!(!$message$$ && $err$$.lineNumber && $err$$.fileName && $err$$.stack && $err$$.message && $err$$.name)) {
    $message$$ = $err$$.message;
    if (null == $message$$) {
      if ($err$$.constructor && $err$$.constructor instanceof Function) {
        var $ctorName$$ = $err$$.constructor.name ? $err$$.constructor.name : goog.debug.getFunctionName($err$$.constructor);
        $message$$ = 'Unknown Error of type "' + $ctorName$$ + '"';
        if (goog.debug.CHECK_FOR_THROWN_EVENT && "Event" == $ctorName$$) {
          try {
            $message$$ = $message$$ + ' with Event.type "' + ($err$$.type || "") + '"';
          } catch ($e$18$$) {
          }
        }
      } else {
        $message$$ = "Unknown Error of unknown type";
      }
      "function" === typeof $err$$.toString && Object.prototype.toString !== $err$$.toString && ($message$$ += ": " + $err$$.toString());
    }
    return {message:$message$$, name:$err$$.name || "UnknownError", lineNumber:$lineNumber$$, fileName:$fileName$$, stack:$href_stack$$ || "Not available"};
  }
  $err$$.stack = $href_stack$$;
  return {message:$err$$.message, name:$err$$.name, lineNumber:$err$$.lineNumber, fileName:$err$$.fileName, stack:$err$$.stack};
};
goog.debug.serializeErrorStack_ = function $goog$debug$serializeErrorStack_$($cause$jscomp$1_e$$, $seen$$) {
  $seen$$ || ($seen$$ = {});
  $seen$$[goog.debug.serializeErrorAsKey_($cause$jscomp$1_e$$)] = !0;
  var $stack$$ = $cause$jscomp$1_e$$.stack || "";
  ($cause$jscomp$1_e$$ = $cause$jscomp$1_e$$.cause) && !$seen$$[goog.debug.serializeErrorAsKey_($cause$jscomp$1_e$$)] && ($stack$$ += "\nCaused by: ", $cause$jscomp$1_e$$.stack && 0 == $cause$jscomp$1_e$$.stack.indexOf($cause$jscomp$1_e$$.toString()) || ($stack$$ += "string" === typeof $cause$jscomp$1_e$$ ? $cause$jscomp$1_e$$ : $cause$jscomp$1_e$$.message + "\n"), $stack$$ += goog.debug.serializeErrorStack_($cause$jscomp$1_e$$, $seen$$));
  return $stack$$;
};
goog.debug.serializeErrorAsKey_ = function $goog$debug$serializeErrorAsKey_$($e$$) {
  var $keyPrefix$$ = "";
  "function" === typeof $e$$.toString && ($keyPrefix$$ = "" + $e$$);
  return $keyPrefix$$ + $e$$.stack;
};
goog.debug.enhanceError = function $goog$debug$enhanceError$($err$jscomp$17_error$$, $opt_message$$) {
  $err$jscomp$17_error$$ instanceof Error || ($err$jscomp$17_error$$ = Error($err$jscomp$17_error$$), Error.captureStackTrace && Error.captureStackTrace($err$jscomp$17_error$$, goog.debug.enhanceError));
  $err$jscomp$17_error$$.stack || ($err$jscomp$17_error$$.stack = goog.debug.getStacktrace(goog.debug.enhanceError));
  if ($opt_message$$) {
    for (var $x$$ = 0; $err$jscomp$17_error$$["message" + $x$$];) {
      ++$x$$;
    }
    $err$jscomp$17_error$$["message" + $x$$] = String($opt_message$$);
  }
  return $err$jscomp$17_error$$;
};
goog.debug.enhanceErrorWithContext = function $goog$debug$enhanceErrorWithContext$($err$jscomp$18_error$$, $opt_context$$) {
  $err$jscomp$18_error$$ = goog.debug.enhanceError($err$jscomp$18_error$$);
  if ($opt_context$$) {
    for (var $key$$ in $opt_context$$) {
      goog.debug.errorcontext.addErrorContext($err$jscomp$18_error$$, $key$$, $opt_context$$[$key$$]);
    }
  }
  return $err$jscomp$18_error$$;
};
goog.debug.getStacktraceSimple = function $goog$debug$getStacktraceSimple$($opt_depth$$) {
  if (!goog.debug.FORCE_SLOPPY_STACKS) {
    var $sb$jscomp$2_stack$$ = goog.debug.getNativeStackTrace_(goog.debug.getStacktraceSimple);
    if ($sb$jscomp$2_stack$$) {
      return $sb$jscomp$2_stack$$;
    }
  }
  $sb$jscomp$2_stack$$ = [];
  for (var $fn$$ = arguments.callee.caller, $depth$$ = 0; $fn$$ && (!$opt_depth$$ || $depth$$ < $opt_depth$$);) {
    $sb$jscomp$2_stack$$.push(goog.debug.getFunctionName($fn$$));
    $sb$jscomp$2_stack$$.push("()\n");
    try {
      $fn$$ = $fn$$.caller;
    } catch ($e$$) {
      $sb$jscomp$2_stack$$.push("[exception trying to get caller]\n");
      break;
    }
    $depth$$++;
    if ($depth$$ >= goog.debug.MAX_STACK_DEPTH) {
      $sb$jscomp$2_stack$$.push("[...long stack...]");
      break;
    }
  }
  $opt_depth$$ && $depth$$ >= $opt_depth$$ ? $sb$jscomp$2_stack$$.push("[...reached max depth limit...]") : $sb$jscomp$2_stack$$.push("[end]");
  return $sb$jscomp$2_stack$$.join("");
};
goog.debug.MAX_STACK_DEPTH = 50;
goog.debug.getNativeStackTrace_ = function $goog$debug$getNativeStackTrace_$($fn$jscomp$11_stack$$) {
  var $tempErr$$ = Error();
  if (Error.captureStackTrace) {
    return Error.captureStackTrace($tempErr$$, $fn$jscomp$11_stack$$), String($tempErr$$.stack);
  }
  try {
    throw $tempErr$$;
  } catch ($e$$) {
    $tempErr$$ = $e$$;
  }
  return ($fn$jscomp$11_stack$$ = $tempErr$$.stack) ? String($fn$jscomp$11_stack$$) : null;
};
goog.debug.getStacktrace = function $goog$debug$getStacktrace$($fn$$) {
  var $stack$$;
  goog.debug.FORCE_SLOPPY_STACKS || ($stack$$ = goog.debug.getNativeStackTrace_($fn$$ || goog.debug.getStacktrace));
  $stack$$ || ($stack$$ = goog.debug.getStacktraceHelper_($fn$$ || arguments.callee.caller, []));
  return $stack$$;
};
goog.debug.getStacktraceHelper_ = function $goog$debug$getStacktraceHelper_$($fn$$, $visited$$) {
  var $sb$$ = [];
  if (module$contents$goog$array_contains($visited$$, $fn$$)) {
    $sb$$.push("[...circular reference...]");
  } else {
    if ($fn$$ && $visited$$.length < goog.debug.MAX_STACK_DEPTH) {
      $sb$$.push(goog.debug.getFunctionName($fn$$) + "(");
      for (var $args$$ = $fn$$.arguments, $i$$ = 0; $args$$ && $i$$ < $args$$.length; $i$$++) {
        0 < $i$$ && $sb$$.push(", ");
        var $arg$$ = $args$$[$i$$];
        switch(typeof $arg$$) {
          case "object":
            $arg$$ = $arg$$ ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            $arg$$ = String($arg$$);
            break;
          case "boolean":
            $arg$$ = $arg$$ ? "true" : "false";
            break;
          case "function":
            $arg$$ = ($arg$$ = goog.debug.getFunctionName($arg$$)) ? $arg$$ : "[fn]";
            break;
          default:
            $arg$$ = typeof $arg$$;
        }
        40 < $arg$$.length && ($arg$$ = $arg$$.substr(0, 40) + "...");
        $sb$$.push($arg$$);
      }
      $visited$$.push($fn$$);
      $sb$$.push(")\n");
      try {
        $sb$$.push(goog.debug.getStacktraceHelper_($fn$$.caller, $visited$$));
      } catch ($e$$) {
        $sb$$.push("[exception trying to get caller]\n");
      }
    } else {
      $fn$$ ? $sb$$.push("[...long stack...]") : $sb$$.push("[end]");
    }
  }
  return $sb$$.join("");
};
goog.debug.getFunctionName = function $goog$debug$getFunctionName$($fn$$) {
  if (goog.debug.fnNameCache_[$fn$$]) {
    return goog.debug.fnNameCache_[$fn$$];
  }
  $fn$$ = String($fn$$);
  if (!goog.debug.fnNameCache_[$fn$$]) {
    var $matches$$ = /function\s+([^\(]+)/m.exec($fn$$);
    goog.debug.fnNameCache_[$fn$$] = $matches$$ ? $matches$$[1] : "[Anonymous]";
  }
  return goog.debug.fnNameCache_[$fn$$];
};
goog.debug.makeWhitespaceVisible = function $goog$debug$makeWhitespaceVisible$($string$$) {
  return $string$$.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
goog.debug.runtimeType = function $goog$debug$runtimeType$($value$$) {
  return $value$$ instanceof Function ? $value$$.displayName || $value$$.name || "unknown type name" : $value$$ instanceof Object ? $value$$.constructor.displayName || $value$$.constructor.name || Object.prototype.toString.call($value$$) : null === $value$$ ? "null" : typeof $value$$;
};
goog.debug.fnNameCache_ = {};
goog.debug.freezeInternal_ = goog.DEBUG && Object.freeze || function($arg$$) {
  return $arg$$;
};
goog.debug.freeze = function $goog$debug$freeze$($arg$$) {
  return goog.debug.freezeInternal_($arg$$);
};
goog.events = {};
goog.events.EventId = function $goog$events$EventId$($eventId$$) {
  this.id = $eventId$$;
};
goog.events.EventId.prototype.toString = function $goog$events$EventId$$toString$() {
  return this.id;
};
goog.events.Event = function $goog$events$Event$($type$$, $opt_target$$) {
  this.type = $type$$ instanceof goog.events.EventId ? String($type$$) : $type$$;
  this.currentTarget = this.target = $opt_target$$;
  this.defaultPrevented = this.propagationStopped_ = !1;
};
goog.events.Event.prototype.hasPropagationStopped = function $goog$events$Event$$hasPropagationStopped$() {
  return this.propagationStopped_;
};
goog.events.Event.prototype.stopPropagation = function $goog$events$Event$$stopPropagation$() {
  this.propagationStopped_ = !0;
};
goog.events.Event.prototype.preventDefault = function $goog$events$Event$$preventDefault$() {
  this.defaultPrevented = !0;
};
goog.events.Event.stopPropagation = function $goog$events$Event$stopPropagation$($e$$) {
  $e$$.stopPropagation();
};
goog.events.Event.preventDefault = function $goog$events$Event$preventDefault$($e$$) {
  $e$$.preventDefault();
};
var module$contents$goog$events$BrowserFeature_purify = function $module$contents$goog$events$BrowserFeature_purify$($fn$$) {
  return {valueOf:$fn$$}.valueOf();
};
goog.events.BrowserFeature = {HAS_W3C_BUTTON:!0, HAS_W3C_EVENT_SUPPORT:!0, SET_KEY_CODE_TO_PREVENT_DEFAULT:!1, HAS_NAVIGATOR_ONLINE_PROPERTY:!0, HAS_HTML5_NETWORK_EVENT_SUPPORT:!0, HTML5_NETWORK_EVENTS_FIRE_ON_BODY:!1, TOUCH_ENABLED:"ontouchstart" in goog.global || !!(goog.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!goog.global.navigator || !goog.global.navigator.maxTouchPoints && !goog.global.navigator.msMaxTouchPoints), POINTER_EVENTS:"PointerEvent" in 
goog.global, MSPOINTER_EVENTS:"MSPointerEvent" in goog.global && !(!goog.global.navigator || !goog.global.navigator.msPointerEnabled), PASSIVE_EVENTS:module$contents$goog$events$BrowserFeature_purify(function() {
  if (!goog.global.addEventListener || !Object.defineProperty) {
    return !1;
  }
  var $passive$$ = !1, $options$$ = Object.defineProperty({}, "passive", {get:function() {
    $passive$$ = !0;
  }});
  try {
    goog.global.addEventListener("test", goog.nullFunction, $options$$), goog.global.removeEventListener("test", goog.nullFunction, $options$$);
  } catch ($e$$) {
  }
  return $passive$$;
})};
goog.events.getVendorPrefixedName_ = function $goog$events$getVendorPrefixedName_$($eventName$$) {
  return goog.userAgent.WEBKIT ? "webkit" + $eventName$$ : $eventName$$.toLowerCase();
};
goog.events.EventType = {CLICK:"click", RIGHTCLICK:"rightclick", DBLCLICK:"dblclick", AUXCLICK:"auxclick", MOUSEDOWN:"mousedown", MOUSEUP:"mouseup", MOUSEOVER:"mouseover", MOUSEOUT:"mouseout", MOUSEMOVE:"mousemove", MOUSEENTER:"mouseenter", MOUSELEAVE:"mouseleave", MOUSECANCEL:"mousecancel", SELECTIONCHANGE:"selectionchange", SELECTSTART:"selectstart", WHEEL:"wheel", KEYPRESS:"keypress", KEYDOWN:"keydown", KEYUP:"keyup", BLUR:"blur", FOCUS:"focus", DEACTIVATE:"deactivate", FOCUSIN:"focusin", FOCUSOUT:"focusout", 
CHANGE:"change", RESET:"reset", SELECT:"select", SUBMIT:"submit", INPUT:"input", PROPERTYCHANGE:"propertychange", DRAGSTART:"dragstart", DRAG:"drag", DRAGENTER:"dragenter", DRAGOVER:"dragover", DRAGLEAVE:"dragleave", DROP:"drop", DRAGEND:"dragend", TOUCHSTART:"touchstart", TOUCHMOVE:"touchmove", TOUCHEND:"touchend", TOUCHCANCEL:"touchcancel", BEFOREUNLOAD:"beforeunload", CONSOLEMESSAGE:"consolemessage", CONTEXTMENU:"contextmenu", DEVICECHANGE:"devicechange", DEVICEMOTION:"devicemotion", DEVICEORIENTATION:"deviceorientation", 
DOMCONTENTLOADED:"DOMContentLoaded", ERROR:"error", HELP:"help", LOAD:"load", LOSECAPTURE:"losecapture", ORIENTATIONCHANGE:"orientationchange", READYSTATECHANGE:"readystatechange", RESIZE:"resize", SCROLL:"scroll", UNLOAD:"unload", CANPLAY:"canplay", CANPLAYTHROUGH:"canplaythrough", DURATIONCHANGE:"durationchange", EMPTIED:"emptied", ENDED:"ended", LOADEDDATA:"loadeddata", LOADEDMETADATA:"loadedmetadata", PAUSE:"pause", PLAY:"play", PLAYING:"playing", PROGRESS:"progress", RATECHANGE:"ratechange", 
SEEKED:"seeked", SEEKING:"seeking", STALLED:"stalled", SUSPEND:"suspend", TIMEUPDATE:"timeupdate", VOLUMECHANGE:"volumechange", WAITING:"waiting", SOURCEOPEN:"sourceopen", SOURCEENDED:"sourceended", SOURCECLOSED:"sourceclosed", ABORT:"abort", UPDATE:"update", UPDATESTART:"updatestart", UPDATEEND:"updateend", HASHCHANGE:"hashchange", PAGEHIDE:"pagehide", PAGESHOW:"pageshow", POPSTATE:"popstate", COPY:"copy", PASTE:"paste", CUT:"cut", BEFORECOPY:"beforecopy", BEFORECUT:"beforecut", BEFOREPASTE:"beforepaste", 
ONLINE:"online", OFFLINE:"offline", MESSAGE:"message", CONNECT:"connect", INSTALL:"install", ACTIVATE:"activate", FETCH:"fetch", FOREIGNFETCH:"foreignfetch", MESSAGEERROR:"messageerror", STATECHANGE:"statechange", UPDATEFOUND:"updatefound", CONTROLLERCHANGE:"controllerchange", ANIMATIONSTART:goog.events.getVendorPrefixedName_("AnimationStart"), ANIMATIONEND:goog.events.getVendorPrefixedName_("AnimationEnd"), ANIMATIONITERATION:goog.events.getVendorPrefixedName_("AnimationIteration"), TRANSITIONEND:goog.events.getVendorPrefixedName_("TransitionEnd"), 
POINTERDOWN:"pointerdown", POINTERUP:"pointerup", POINTERCANCEL:"pointercancel", POINTERMOVE:"pointermove", POINTEROVER:"pointerover", POINTEROUT:"pointerout", POINTERENTER:"pointerenter", POINTERLEAVE:"pointerleave", GOTPOINTERCAPTURE:"gotpointercapture", LOSTPOINTERCAPTURE:"lostpointercapture", MSGESTURECHANGE:"MSGestureChange", MSGESTUREEND:"MSGestureEnd", MSGESTUREHOLD:"MSGestureHold", MSGESTURESTART:"MSGestureStart", MSGESTURETAP:"MSGestureTap", MSGOTPOINTERCAPTURE:"MSGotPointerCapture", MSINERTIASTART:"MSInertiaStart", 
MSLOSTPOINTERCAPTURE:"MSLostPointerCapture", MSPOINTERCANCEL:"MSPointerCancel", MSPOINTERDOWN:"MSPointerDown", MSPOINTERENTER:"MSPointerEnter", MSPOINTERHOVER:"MSPointerHover", MSPOINTERLEAVE:"MSPointerLeave", MSPOINTERMOVE:"MSPointerMove", MSPOINTEROUT:"MSPointerOut", MSPOINTEROVER:"MSPointerOver", MSPOINTERUP:"MSPointerUp", TEXT:"text", TEXTINPUT:goog.userAgent.IE ? "textinput" : "textInput", COMPOSITIONSTART:"compositionstart", COMPOSITIONUPDATE:"compositionupdate", COMPOSITIONEND:"compositionend", 
BEFOREINPUT:"beforeinput", EXIT:"exit", LOADABORT:"loadabort", LOADCOMMIT:"loadcommit", LOADREDIRECT:"loadredirect", LOADSTART:"loadstart", LOADSTOP:"loadstop", RESPONSIVE:"responsive", SIZECHANGED:"sizechanged", UNRESPONSIVE:"unresponsive", VISIBILITYCHANGE:"visibilitychange", STORAGE:"storage", DOMSUBTREEMODIFIED:"DOMSubtreeModified", DOMNODEINSERTED:"DOMNodeInserted", DOMNODEREMOVED:"DOMNodeRemoved", DOMNODEREMOVEDFROMDOCUMENT:"DOMNodeRemovedFromDocument", DOMNODEINSERTEDINTODOCUMENT:"DOMNodeInsertedIntoDocument", 
DOMATTRMODIFIED:"DOMAttrModified", DOMCHARACTERDATAMODIFIED:"DOMCharacterDataModified", BEFOREPRINT:"beforeprint", AFTERPRINT:"afterprint", BEFOREINSTALLPROMPT:"beforeinstallprompt", APPINSTALLED:"appinstalled"};
goog.events.getPointerFallbackEventName_ = function $goog$events$getPointerFallbackEventName_$($pointerEventName$$, $msPointerEventName$$, $fallbackEventName$$) {
  return goog.events.BrowserFeature.POINTER_EVENTS ? $pointerEventName$$ : goog.events.BrowserFeature.MSPOINTER_EVENTS ? $msPointerEventName$$ : $fallbackEventName$$;
};
goog.events.PointerFallbackEventType = {POINTERDOWN:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERDOWN, goog.events.EventType.MSPOINTERDOWN, goog.events.EventType.MOUSEDOWN), POINTERUP:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERUP, goog.events.EventType.MSPOINTERUP, goog.events.EventType.MOUSEUP), POINTERCANCEL:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERCANCEL, goog.events.EventType.MSPOINTERCANCEL, goog.events.EventType.MOUSECANCEL), 
POINTERMOVE:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERMOVE, goog.events.EventType.MSPOINTERMOVE, goog.events.EventType.MOUSEMOVE), POINTEROVER:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTEROVER, goog.events.EventType.MSPOINTEROVER, goog.events.EventType.MOUSEOVER), POINTEROUT:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTEROUT, goog.events.EventType.MSPOINTEROUT, goog.events.EventType.MOUSEOUT), POINTERENTER:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERENTER, 
goog.events.EventType.MSPOINTERENTER, goog.events.EventType.MOUSEENTER), POINTERLEAVE:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERLEAVE, goog.events.EventType.MSPOINTERLEAVE, goog.events.EventType.MOUSELEAVE)};
goog.events.PointerTouchFallbackEventType = {POINTERDOWN:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERDOWN, goog.events.EventType.MSPOINTERDOWN, goog.events.EventType.TOUCHSTART), POINTERUP:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERUP, goog.events.EventType.MSPOINTERUP, goog.events.EventType.TOUCHEND), POINTERCANCEL:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERCANCEL, goog.events.EventType.MSPOINTERCANCEL, goog.events.EventType.TOUCHCANCEL), 
POINTERMOVE:goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERMOVE, goog.events.EventType.MSPOINTERMOVE, goog.events.EventType.TOUCHMOVE)};
goog.events.PointerAsMouseEventType = {MOUSEDOWN:goog.events.PointerFallbackEventType.POINTERDOWN, MOUSEUP:goog.events.PointerFallbackEventType.POINTERUP, MOUSECANCEL:goog.events.PointerFallbackEventType.POINTERCANCEL, MOUSEMOVE:goog.events.PointerFallbackEventType.POINTERMOVE, MOUSEOVER:goog.events.PointerFallbackEventType.POINTEROVER, MOUSEOUT:goog.events.PointerFallbackEventType.POINTEROUT, MOUSEENTER:goog.events.PointerFallbackEventType.POINTERENTER, MOUSELEAVE:goog.events.PointerFallbackEventType.POINTERLEAVE};
goog.events.MouseAsMouseEventType = {MOUSEDOWN:goog.events.EventType.MOUSEDOWN, MOUSEUP:goog.events.EventType.MOUSEUP, MOUSECANCEL:goog.events.EventType.MOUSECANCEL, MOUSEMOVE:goog.events.EventType.MOUSEMOVE, MOUSEOVER:goog.events.EventType.MOUSEOVER, MOUSEOUT:goog.events.EventType.MOUSEOUT, MOUSEENTER:goog.events.EventType.MOUSEENTER, MOUSELEAVE:goog.events.EventType.MOUSELEAVE};
goog.events.PointerAsTouchEventType = {TOUCHCANCEL:goog.events.PointerTouchFallbackEventType.POINTERCANCEL, TOUCHEND:goog.events.PointerTouchFallbackEventType.POINTERUP, TOUCHMOVE:goog.events.PointerTouchFallbackEventType.POINTERMOVE, TOUCHSTART:goog.events.PointerTouchFallbackEventType.POINTERDOWN};
goog.events.USE_LAYER_XY_AS_OFFSET_XY = !1;
goog.events.BrowserEvent = function $goog$events$BrowserEvent$($opt_e$$, $opt_currentTarget$$) {
  goog.events.Event.call(this, $opt_e$$ ? $opt_e$$.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.platformModifierKey = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.event_ = null;
  $opt_e$$ && this.init($opt_e$$, $opt_currentTarget$$);
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
goog.events.BrowserEvent.PointerType = {MOUSE:"mouse", PEN:"pen", TOUCH:"touch"};
goog.events.BrowserEvent.IEButtonMap = goog.debug.freeze([1, 4, 2]);
goog.events.BrowserEvent.IE_BUTTON_MAP = goog.events.BrowserEvent.IEButtonMap;
goog.events.BrowserEvent.IE_POINTER_TYPE_MAP = goog.debug.freeze({2:goog.events.BrowserEvent.PointerType.TOUCH, 3:goog.events.BrowserEvent.PointerType.PEN, 4:goog.events.BrowserEvent.PointerType.MOUSE});
goog.events.BrowserEvent.prototype.init = function $goog$events$BrowserEvent$$init$($e$$, $opt_currentTarget$$) {
  var $type$$ = this.type = $e$$.type, $relevantTouch$$ = $e$$.changedTouches && $e$$.changedTouches.length ? $e$$.changedTouches[0] : null;
  this.target = $e$$.target || $e$$.srcElement;
  this.currentTarget = $opt_currentTarget$$;
  ($opt_currentTarget$$ = $e$$.relatedTarget) ? goog.userAgent.GECKO && (goog.reflect.canAccessProperty($opt_currentTarget$$, "nodeName") || ($opt_currentTarget$$ = null)) : $type$$ == goog.events.EventType.MOUSEOVER ? $opt_currentTarget$$ = $e$$.fromElement : $type$$ == goog.events.EventType.MOUSEOUT && ($opt_currentTarget$$ = $e$$.toElement);
  this.relatedTarget = $opt_currentTarget$$;
  $relevantTouch$$ ? (this.clientX = void 0 !== $relevantTouch$$.clientX ? $relevantTouch$$.clientX : $relevantTouch$$.pageX, this.clientY = void 0 !== $relevantTouch$$.clientY ? $relevantTouch$$.clientY : $relevantTouch$$.pageY, this.screenX = $relevantTouch$$.screenX || 0, this.screenY = $relevantTouch$$.screenY || 0) : (goog.events.USE_LAYER_XY_AS_OFFSET_XY ? (this.offsetX = void 0 !== $e$$.layerX ? $e$$.layerX : $e$$.offsetX, this.offsetY = void 0 !== $e$$.layerY ? $e$$.layerY : $e$$.offsetY) : 
  (this.offsetX = goog.userAgent.WEBKIT || void 0 !== $e$$.offsetX ? $e$$.offsetX : $e$$.layerX, this.offsetY = goog.userAgent.WEBKIT || void 0 !== $e$$.offsetY ? $e$$.offsetY : $e$$.layerY), this.clientX = void 0 !== $e$$.clientX ? $e$$.clientX : $e$$.pageX, this.clientY = void 0 !== $e$$.clientY ? $e$$.clientY : $e$$.pageY, this.screenX = $e$$.screenX || 0, this.screenY = $e$$.screenY || 0);
  this.button = $e$$.button;
  this.keyCode = $e$$.keyCode || 0;
  this.key = $e$$.key || "";
  this.charCode = $e$$.charCode || ("keypress" == $type$$ ? $e$$.keyCode : 0);
  this.ctrlKey = $e$$.ctrlKey;
  this.altKey = $e$$.altKey;
  this.shiftKey = $e$$.shiftKey;
  this.metaKey = $e$$.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? $e$$.metaKey : $e$$.ctrlKey;
  this.pointerId = $e$$.pointerId || 0;
  this.pointerType = goog.events.BrowserEvent.getPointerType_($e$$);
  this.state = $e$$.state;
  this.event_ = $e$$;
  $e$$.defaultPrevented && goog.events.BrowserEvent.superClass_.preventDefault.call(this);
};
goog.events.BrowserEvent.prototype.isButton = function $goog$events$BrowserEvent$$isButton$($button$$) {
  return this.event_.button == $button$$;
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function $goog$events$BrowserEvent$$isMouseActionButton$() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.MAC && this.ctrlKey);
};
goog.events.BrowserEvent.prototype.stopPropagation = function $goog$events$BrowserEvent$$stopPropagation$() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0;
};
goog.events.BrowserEvent.prototype.preventDefault = function $goog$events$BrowserEvent$$preventDefault$() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var $be$$ = this.event_;
  $be$$.preventDefault ? $be$$.preventDefault() : $be$$.returnValue = !1;
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function $goog$events$BrowserEvent$$getBrowserEvent$() {
  return this.event_;
};
goog.events.BrowserEvent.getPointerType_ = function $goog$events$BrowserEvent$getPointerType_$($e$$) {
  return "string" === typeof $e$$.pointerType ? $e$$.pointerType : goog.events.BrowserEvent.IE_POINTER_TYPE_MAP[$e$$.pointerType] || "";
};
goog.events.Listenable = function $goog$events$Listenable$() {
};
goog.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (1e6 * Math.random() | 0);
goog.events.Listenable.addImplementation = function $goog$events$Listenable$addImplementation$($cls$$) {
  $cls$$.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = !0;
};
goog.events.Listenable.isImplementedBy = function $goog$events$Listenable$isImplementedBy$($obj$$) {
  return !(!$obj$$ || !$obj$$[goog.events.Listenable.IMPLEMENTED_BY_PROP]);
};
goog.events.Listenable.prototype.listen = function $goog$events$Listenable$$listen$($type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
};
goog.events.Listenable.prototype.listenOnce = function $goog$events$Listenable$$listenOnce$($type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
};
goog.events.Listenable.prototype.unlisten = function $goog$events$Listenable$$unlisten$($type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
};
goog.events.Listenable.prototype.unlistenByKey = function $goog$events$Listenable$$unlistenByKey$($key$$) {
};
goog.events.Listenable.prototype.dispatchEvent = function $goog$events$Listenable$$dispatchEvent$($e$$) {
};
goog.events.Listenable.prototype.removeAllListeners = function $goog$events$Listenable$$removeAllListeners$($opt_type$$) {
};
goog.events.Listenable.prototype.getParentEventTarget = function $goog$events$Listenable$$getParentEventTarget$() {
};
goog.events.Listenable.prototype.fireListeners = function $goog$events$Listenable$$fireListeners$($type$$, $capture$$, $eventObject$$) {
};
goog.events.Listenable.prototype.getListeners = function $goog$events$Listenable$$getListeners$($type$$, $capture$$) {
};
goog.events.Listenable.prototype.getListener = function $goog$events$Listenable$$getListener$($type$$, $listener$$, $capture$$, $opt_listenerScope$$) {
};
goog.events.Listenable.prototype.hasListener = function $goog$events$Listenable$$hasListener$($opt_type$$, $opt_capture$$) {
};
goog.events.ListenableKey = function $goog$events$ListenableKey$() {
};
goog.events.ListenableKey.counter_ = 0;
goog.events.ListenableKey.reserveKey = function $goog$events$ListenableKey$reserveKey$() {
  return ++goog.events.ListenableKey.counter_;
};
goog.events.Listener = function $goog$events$Listener$($listener$$, $proxy$$, $src$$, $type$$, $capture$$, $opt_handler$$) {
  goog.events.Listener.ENABLE_MONITORING && (this.creationStack = Error().stack);
  this.listener = $listener$$;
  this.proxy = $proxy$$;
  this.src = $src$$;
  this.type = $type$$;
  this.capture = !!$capture$$;
  this.handler = $opt_handler$$;
  this.key = goog.events.ListenableKey.reserveKey();
  this.removed = this.callOnce = !1;
};
goog.events.Listener.ENABLE_MONITORING = !1;
goog.events.Listener.prototype.markAsRemoved = function $goog$events$Listener$$markAsRemoved$() {
  this.removed = !0;
  this.handler = this.src = this.proxy = this.listener = null;
};
goog.events.ListenerMap = function $goog$events$ListenerMap$($src$$) {
  this.src = $src$$;
  this.listeners = {};
  this.typeCount_ = 0;
};
goog.events.ListenerMap.prototype.getTypeCount = function $goog$events$ListenerMap$$getTypeCount$() {
  return this.typeCount_;
};
goog.events.ListenerMap.prototype.getListenerCount = function $goog$events$ListenerMap$$getListenerCount$() {
  var $count$$ = 0, $type$$;
  for ($type$$ in this.listeners) {
    $count$$ += this.listeners[$type$$].length;
  }
  return $count$$;
};
goog.events.ListenerMap.prototype.add = function $goog$events$ListenerMap$$add$($listenerArray_type$$, $listener$$, $callOnce$$, $opt_useCapture$$, $opt_listenerScope$$) {
  var $typeStr$$ = $listenerArray_type$$.toString();
  $listenerArray_type$$ = this.listeners[$typeStr$$];
  $listenerArray_type$$ || ($listenerArray_type$$ = this.listeners[$typeStr$$] = [], this.typeCount_++);
  var $index$$ = goog.events.ListenerMap.findListenerIndex_($listenerArray_type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$);
  -1 < $index$$ ? ($listener$$ = $listenerArray_type$$[$index$$], $callOnce$$ || ($listener$$.callOnce = !1)) : ($listener$$ = new goog.events.Listener($listener$$, null, this.src, $typeStr$$, !!$opt_useCapture$$, $opt_listenerScope$$), $listener$$.callOnce = $callOnce$$, $listenerArray_type$$.push($listener$$));
  return $listener$$;
};
goog.events.ListenerMap.prototype.remove = function $goog$events$ListenerMap$$remove$($type$jscomp$164_typeStr$$, $index$jscomp$87_listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  $type$jscomp$164_typeStr$$ = $type$jscomp$164_typeStr$$.toString();
  if (!($type$jscomp$164_typeStr$$ in this.listeners)) {
    return !1;
  }
  var $listenerArray$$ = this.listeners[$type$jscomp$164_typeStr$$];
  $index$jscomp$87_listener$$ = goog.events.ListenerMap.findListenerIndex_($listenerArray$$, $index$jscomp$87_listener$$, $opt_useCapture$$, $opt_listenerScope$$);
  return -1 < $index$jscomp$87_listener$$ ? ($listenerArray$$[$index$jscomp$87_listener$$].markAsRemoved(), module$contents$goog$array_removeAt($listenerArray$$, $index$jscomp$87_listener$$), 0 == $listenerArray$$.length && (delete this.listeners[$type$jscomp$164_typeStr$$], this.typeCount_--), !0) : !1;
};
goog.events.ListenerMap.prototype.removeByKey = function $goog$events$ListenerMap$$removeByKey$($listener$$) {
  var $type$$ = $listener$$.type;
  if (!($type$$ in this.listeners)) {
    return !1;
  }
  var $removed$$ = module$contents$goog$array_remove(this.listeners[$type$$], $listener$$);
  $removed$$ && ($listener$$.markAsRemoved(), 0 == this.listeners[$type$$].length && (delete this.listeners[$type$$], this.typeCount_--));
  return $removed$$;
};
goog.events.ListenerMap.prototype.removeAll = function $goog$events$ListenerMap$$removeAll$($opt_type$jscomp$14_typeStr$$) {
  $opt_type$jscomp$14_typeStr$$ = $opt_type$jscomp$14_typeStr$$ && $opt_type$jscomp$14_typeStr$$.toString();
  var $count$$ = 0, $type$$;
  for ($type$$ in this.listeners) {
    if (!$opt_type$jscomp$14_typeStr$$ || $type$$ == $opt_type$jscomp$14_typeStr$$) {
      for (var $listenerArray$$ = this.listeners[$type$$], $i$$ = 0; $i$$ < $listenerArray$$.length; $i$$++) {
        ++$count$$, $listenerArray$$[$i$$].markAsRemoved();
      }
      delete this.listeners[$type$$];
      this.typeCount_--;
    }
  }
  return $count$$;
};
goog.events.ListenerMap.prototype.getListeners = function $goog$events$ListenerMap$$getListeners$($listenerArray$jscomp$3_type$$, $capture$$) {
  $listenerArray$jscomp$3_type$$ = this.listeners[$listenerArray$jscomp$3_type$$.toString()];
  var $rv$$ = [];
  if ($listenerArray$jscomp$3_type$$) {
    for (var $i$$ = 0; $i$$ < $listenerArray$jscomp$3_type$$.length; ++$i$$) {
      var $listenerObj$$ = $listenerArray$jscomp$3_type$$[$i$$];
      $listenerObj$$.capture == $capture$$ && $rv$$.push($listenerObj$$);
    }
  }
  return $rv$$;
};
goog.events.ListenerMap.prototype.getListener = function $goog$events$ListenerMap$$getListener$($listenerArray$jscomp$4_type$$, $listener$$, $capture$$, $opt_listenerScope$$) {
  $listenerArray$jscomp$4_type$$ = this.listeners[$listenerArray$jscomp$4_type$$.toString()];
  var $i$$ = -1;
  $listenerArray$jscomp$4_type$$ && ($i$$ = goog.events.ListenerMap.findListenerIndex_($listenerArray$jscomp$4_type$$, $listener$$, $capture$$, $opt_listenerScope$$));
  return -1 < $i$$ ? $listenerArray$jscomp$4_type$$[$i$$] : null;
};
goog.events.ListenerMap.prototype.hasListener = function $goog$events$ListenerMap$$hasListener$($opt_type$$, $opt_capture$$) {
  var $hasType$$ = void 0 !== $opt_type$$, $typeStr$$ = $hasType$$ ? $opt_type$$.toString() : "", $hasCapture$$ = void 0 !== $opt_capture$$;
  return module$contents$goog$object_some(this.listeners, function($listenerArray$$, $i$jscomp$115_type$$) {
    for ($i$jscomp$115_type$$ = 0; $i$jscomp$115_type$$ < $listenerArray$$.length; ++$i$jscomp$115_type$$) {
      if (!($hasType$$ && $listenerArray$$[$i$jscomp$115_type$$].type != $typeStr$$ || $hasCapture$$ && $listenerArray$$[$i$jscomp$115_type$$].capture != $opt_capture$$)) {
        return !0;
      }
    }
    return !1;
  });
};
goog.events.ListenerMap.findListenerIndex_ = function $goog$events$ListenerMap$findListenerIndex_$($listenerArray$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  for (var $i$$ = 0; $i$$ < $listenerArray$$.length; ++$i$$) {
    var $listenerObj$$ = $listenerArray$$[$i$$];
    if (!$listenerObj$$.removed && $listenerObj$$.listener == $listener$$ && $listenerObj$$.capture == !!$opt_useCapture$$ && $listenerObj$$.handler == $opt_listenerScope$$) {
      return $i$$;
    }
  }
  return -1;
};
goog.events.LISTENER_MAP_PROP_ = "closure_lm_" + (1e6 * Math.random() | 0);
goog.events.onString_ = "on";
goog.events.onStringMap_ = {};
goog.events.CaptureSimulationMode = {OFF_AND_FAIL:0, OFF_AND_SILENT:1, ON:2};
goog.events.CAPTURE_SIMULATION_MODE = 2;
goog.events.listenerCountEstimate_ = 0;
goog.events.listen = function $goog$events$listen$($src$$, $type$$, $listener$$, $capture$jscomp$6_opt_options$$, $opt_handler$$) {
  if ($capture$jscomp$6_opt_options$$ && $capture$jscomp$6_opt_options$$.once) {
    return goog.events.listenOnce($src$$, $type$$, $listener$$, $capture$jscomp$6_opt_options$$, $opt_handler$$);
  }
  if (Array.isArray($type$$)) {
    for (var $i$$ = 0; $i$$ < $type$$.length; $i$$++) {
      goog.events.listen($src$$, $type$$[$i$$], $listener$$, $capture$jscomp$6_opt_options$$, $opt_handler$$);
    }
    return null;
  }
  $listener$$ = goog.events.wrapListener($listener$$);
  return goog.events.Listenable.isImplementedBy($src$$) ? ($capture$jscomp$6_opt_options$$ = goog.isObject($capture$jscomp$6_opt_options$$) ? !!$capture$jscomp$6_opt_options$$.capture : !!$capture$jscomp$6_opt_options$$, $src$$.listen($type$$, $listener$$, $capture$jscomp$6_opt_options$$, $opt_handler$$)) : goog.events.listen_($src$$, $type$$, $listener$$, !1, $capture$jscomp$6_opt_options$$, $opt_handler$$);
};
goog.events.listen_ = function $goog$events$listen_$($src$$, $type$$, $listener$jscomp$75_listenerObj$$, $callOnce$jscomp$1_proxy$$, $opt_options$$, $opt_handler$$) {
  if (!$type$$) {
    throw Error("Invalid event type");
  }
  var $capture$$ = goog.isObject($opt_options$$) ? !!$opt_options$$.capture : !!$opt_options$$, $listenerMap$$ = goog.events.getListenerMap_($src$$);
  $listenerMap$$ || ($src$$[goog.events.LISTENER_MAP_PROP_] = $listenerMap$$ = new goog.events.ListenerMap($src$$));
  $listener$jscomp$75_listenerObj$$ = $listenerMap$$.add($type$$, $listener$jscomp$75_listenerObj$$, $callOnce$jscomp$1_proxy$$, $capture$$, $opt_handler$$);
  if ($listener$jscomp$75_listenerObj$$.proxy) {
    return $listener$jscomp$75_listenerObj$$;
  }
  $callOnce$jscomp$1_proxy$$ = goog.events.getProxy();
  $listener$jscomp$75_listenerObj$$.proxy = $callOnce$jscomp$1_proxy$$;
  $callOnce$jscomp$1_proxy$$.src = $src$$;
  $callOnce$jscomp$1_proxy$$.listener = $listener$jscomp$75_listenerObj$$;
  if ($src$$.addEventListener) {
    goog.events.BrowserFeature.PASSIVE_EVENTS || ($opt_options$$ = $capture$$), void 0 === $opt_options$$ && ($opt_options$$ = !1), $src$$.addEventListener($type$$.toString(), $callOnce$jscomp$1_proxy$$, $opt_options$$);
  } else {
    if ($src$$.attachEvent) {
      $src$$.attachEvent(goog.events.getOnString_($type$$.toString()), $callOnce$jscomp$1_proxy$$);
    } else {
      if ($src$$.addListener && $src$$.removeListener) {
        goog.asserts.assert("change" === $type$$, "MediaQueryList only has a change event"), $src$$.addListener($callOnce$jscomp$1_proxy$$);
      } else {
        throw Error("addEventListener and attachEvent are unavailable.");
      }
    }
  }
  goog.events.listenerCountEstimate_++;
  return $listener$jscomp$75_listenerObj$$;
};
goog.events.getProxy = function $goog$events$getProxy$() {
  var $proxyCallbackFunction$$ = goog.events.handleBrowserEvent_, $f$$ = goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function($eventObject$$) {
    return $proxyCallbackFunction$$.call($f$$.src, $f$$.listener, $eventObject$$);
  } : function($eventObject$jscomp$2_v$$) {
    $eventObject$jscomp$2_v$$ = $proxyCallbackFunction$$.call($f$$.src, $f$$.listener, $eventObject$jscomp$2_v$$);
    if (!$eventObject$jscomp$2_v$$) {
      return $eventObject$jscomp$2_v$$;
    }
  };
  return $f$$;
};
goog.events.listenOnce = function $goog$events$listenOnce$($src$$, $type$$, $listener$$, $capture$jscomp$8_opt_options$$, $opt_handler$$) {
  if (Array.isArray($type$$)) {
    for (var $i$$ = 0; $i$$ < $type$$.length; $i$$++) {
      goog.events.listenOnce($src$$, $type$$[$i$$], $listener$$, $capture$jscomp$8_opt_options$$, $opt_handler$$);
    }
    return null;
  }
  $listener$$ = goog.events.wrapListener($listener$$);
  return goog.events.Listenable.isImplementedBy($src$$) ? ($capture$jscomp$8_opt_options$$ = goog.isObject($capture$jscomp$8_opt_options$$) ? !!$capture$jscomp$8_opt_options$$.capture : !!$capture$jscomp$8_opt_options$$, $src$$.listenOnce($type$$, $listener$$, $capture$jscomp$8_opt_options$$, $opt_handler$$)) : goog.events.listen_($src$$, $type$$, $listener$$, !0, $capture$jscomp$8_opt_options$$, $opt_handler$$);
};
goog.events.listenWithWrapper = function $goog$events$listenWithWrapper$($src$$, $wrapper$$, $listener$$, $opt_capt$$, $opt_handler$$) {
  $wrapper$$.listen($src$$, $listener$$, $opt_capt$$, $opt_handler$$);
};
goog.events.unlisten = function $goog$events$unlisten$($listenerMap$jscomp$1_src$$, $listenerObj$jscomp$5_type$$, $listener$$, $capture$jscomp$9_opt_options$$, $opt_handler$$) {
  if (Array.isArray($listenerObj$jscomp$5_type$$)) {
    for (var $i$$ = 0; $i$$ < $listenerObj$jscomp$5_type$$.length; $i$$++) {
      goog.events.unlisten($listenerMap$jscomp$1_src$$, $listenerObj$jscomp$5_type$$[$i$$], $listener$$, $capture$jscomp$9_opt_options$$, $opt_handler$$);
    }
    return null;
  }
  $capture$jscomp$9_opt_options$$ = goog.isObject($capture$jscomp$9_opt_options$$) ? !!$capture$jscomp$9_opt_options$$.capture : !!$capture$jscomp$9_opt_options$$;
  $listener$$ = goog.events.wrapListener($listener$$);
  if (goog.events.Listenable.isImplementedBy($listenerMap$jscomp$1_src$$)) {
    return $listenerMap$jscomp$1_src$$.unlisten($listenerObj$jscomp$5_type$$, $listener$$, $capture$jscomp$9_opt_options$$, $opt_handler$$);
  }
  if (!$listenerMap$jscomp$1_src$$) {
    return !1;
  }
  if ($listenerMap$jscomp$1_src$$ = goog.events.getListenerMap_($listenerMap$jscomp$1_src$$)) {
    if ($listenerObj$jscomp$5_type$$ = $listenerMap$jscomp$1_src$$.getListener($listenerObj$jscomp$5_type$$, $listener$$, $capture$jscomp$9_opt_options$$, $opt_handler$$)) {
      return goog.events.unlistenByKey($listenerObj$jscomp$5_type$$);
    }
  }
  return !1;
};
goog.events.unlistenByKey = function $goog$events$unlistenByKey$($key$$) {
  if ("number" === typeof $key$$ || !$key$$ || $key$$.removed) {
    return !1;
  }
  var $src$$ = $key$$.src;
  if (goog.events.Listenable.isImplementedBy($src$$)) {
    return $src$$.unlistenByKey($key$$);
  }
  var $listenerMap$jscomp$2_type$$ = $key$$.type, $proxy$$ = $key$$.proxy;
  $src$$.removeEventListener ? $src$$.removeEventListener($listenerMap$jscomp$2_type$$, $proxy$$, $key$$.capture) : $src$$.detachEvent ? $src$$.detachEvent(goog.events.getOnString_($listenerMap$jscomp$2_type$$), $proxy$$) : $src$$.addListener && $src$$.removeListener && $src$$.removeListener($proxy$$);
  goog.events.listenerCountEstimate_--;
  ($listenerMap$jscomp$2_type$$ = goog.events.getListenerMap_($src$$)) ? ($listenerMap$jscomp$2_type$$.removeByKey($key$$), 0 == $listenerMap$jscomp$2_type$$.getTypeCount() && ($listenerMap$jscomp$2_type$$.src = null, $src$$[goog.events.LISTENER_MAP_PROP_] = null)) : $key$$.markAsRemoved();
  return !0;
};
goog.events.unlistenWithWrapper = function $goog$events$unlistenWithWrapper$($src$$, $wrapper$$, $listener$$, $opt_capt$$, $opt_handler$$) {
  $wrapper$$.unlisten($src$$, $listener$$, $opt_capt$$, $opt_handler$$);
};
goog.events.removeAll = function $goog$events$removeAll$($listenerMap$jscomp$3_obj$$, $opt_type$jscomp$16_typeStr$$) {
  if (!$listenerMap$jscomp$3_obj$$) {
    return 0;
  }
  if (goog.events.Listenable.isImplementedBy($listenerMap$jscomp$3_obj$$)) {
    return $listenerMap$jscomp$3_obj$$.removeAllListeners($opt_type$jscomp$16_typeStr$$);
  }
  $listenerMap$jscomp$3_obj$$ = goog.events.getListenerMap_($listenerMap$jscomp$3_obj$$);
  if (!$listenerMap$jscomp$3_obj$$) {
    return 0;
  }
  var $count$$ = 0;
  $opt_type$jscomp$16_typeStr$$ = $opt_type$jscomp$16_typeStr$$ && $opt_type$jscomp$16_typeStr$$.toString();
  for (var $type$$ in $listenerMap$jscomp$3_obj$$.listeners) {
    if (!$opt_type$jscomp$16_typeStr$$ || $type$$ == $opt_type$jscomp$16_typeStr$$) {
      for (var $listeners$$ = $listenerMap$jscomp$3_obj$$.listeners[$type$$].concat(), $i$$ = 0; $i$$ < $listeners$$.length; ++$i$$) {
        goog.events.unlistenByKey($listeners$$[$i$$]) && ++$count$$;
      }
    }
  }
  return $count$$;
};
goog.events.getListeners = function $goog$events$getListeners$($listenerMap$jscomp$4_obj$$, $type$$, $capture$$) {
  return goog.events.Listenable.isImplementedBy($listenerMap$jscomp$4_obj$$) ? $listenerMap$jscomp$4_obj$$.getListeners($type$$, $capture$$) : $listenerMap$jscomp$4_obj$$ ? ($listenerMap$jscomp$4_obj$$ = goog.events.getListenerMap_($listenerMap$jscomp$4_obj$$)) ? $listenerMap$jscomp$4_obj$$.getListeners($type$$, $capture$$) : [] : [];
};
goog.events.getListener = function $goog$events$getListener$($listenerMap$jscomp$5_src$$, $type$$, $listener$$, $capture$jscomp$11_opt_capt$$, $opt_handler$$) {
  $listener$$ = goog.events.wrapListener($listener$$);
  $capture$jscomp$11_opt_capt$$ = !!$capture$jscomp$11_opt_capt$$;
  return goog.events.Listenable.isImplementedBy($listenerMap$jscomp$5_src$$) ? $listenerMap$jscomp$5_src$$.getListener($type$$, $listener$$, $capture$jscomp$11_opt_capt$$, $opt_handler$$) : $listenerMap$jscomp$5_src$$ ? ($listenerMap$jscomp$5_src$$ = goog.events.getListenerMap_($listenerMap$jscomp$5_src$$)) ? $listenerMap$jscomp$5_src$$.getListener($type$$, $listener$$, $capture$jscomp$11_opt_capt$$, $opt_handler$$) : null : null;
};
goog.events.hasListener = function $goog$events$hasListener$($listenerMap$jscomp$6_obj$$, $opt_type$$, $opt_capture$$) {
  if (goog.events.Listenable.isImplementedBy($listenerMap$jscomp$6_obj$$)) {
    return $listenerMap$jscomp$6_obj$$.hasListener($opt_type$$, $opt_capture$$);
  }
  $listenerMap$jscomp$6_obj$$ = goog.events.getListenerMap_($listenerMap$jscomp$6_obj$$);
  return !!$listenerMap$jscomp$6_obj$$ && $listenerMap$jscomp$6_obj$$.hasListener($opt_type$$, $opt_capture$$);
};
goog.events.expose = function $goog$events$expose$($e$$) {
  var $str$$ = [], $key$$;
  for ($key$$ in $e$$) {
    $e$$[$key$$] && $e$$[$key$$].id ? $str$$.push($key$$ + " = " + $e$$[$key$$] + " (" + $e$$[$key$$].id + ")") : $str$$.push($key$$ + " = " + $e$$[$key$$]);
  }
  return $str$$.join("\n");
};
goog.events.getOnString_ = function $goog$events$getOnString_$($type$$) {
  return $type$$ in goog.events.onStringMap_ ? goog.events.onStringMap_[$type$$] : goog.events.onStringMap_[$type$$] = goog.events.onString_ + $type$$;
};
goog.events.fireListeners = function $goog$events$fireListeners$($obj$$, $type$$, $capture$$, $eventObject$$) {
  return goog.events.Listenable.isImplementedBy($obj$$) ? $obj$$.fireListeners($type$$, $capture$$, $eventObject$$) : goog.events.fireListeners_($obj$$, $type$$, $capture$$, $eventObject$$);
};
goog.events.fireListeners_ = function $goog$events$fireListeners_$($i$jscomp$121_listenerMap$jscomp$7_obj$$, $listenerArray$jscomp$7_type$$, $capture$$, $eventObject$$) {
  var $retval$$ = !0;
  if ($i$jscomp$121_listenerMap$jscomp$7_obj$$ = goog.events.getListenerMap_($i$jscomp$121_listenerMap$jscomp$7_obj$$)) {
    if ($listenerArray$jscomp$7_type$$ = $i$jscomp$121_listenerMap$jscomp$7_obj$$.listeners[$listenerArray$jscomp$7_type$$.toString()]) {
      for ($listenerArray$jscomp$7_type$$ = $listenerArray$jscomp$7_type$$.concat(), $i$jscomp$121_listenerMap$jscomp$7_obj$$ = 0; $i$jscomp$121_listenerMap$jscomp$7_obj$$ < $listenerArray$jscomp$7_type$$.length; $i$jscomp$121_listenerMap$jscomp$7_obj$$++) {
        var $listener$jscomp$82_result$$ = $listenerArray$jscomp$7_type$$[$i$jscomp$121_listenerMap$jscomp$7_obj$$];
        $listener$jscomp$82_result$$ && $listener$jscomp$82_result$$.capture == $capture$$ && !$listener$jscomp$82_result$$.removed && ($listener$jscomp$82_result$$ = goog.events.fireListener($listener$jscomp$82_result$$, $eventObject$$), $retval$$ = $retval$$ && !1 !== $listener$jscomp$82_result$$);
      }
    }
  }
  return $retval$$;
};
goog.events.fireListener = function $goog$events$fireListener$($listener$$, $eventObject$$) {
  var $listenerFn$$ = $listener$$.listener, $listenerHandler$$ = $listener$$.handler || $listener$$.src;
  $listener$$.callOnce && goog.events.unlistenByKey($listener$$);
  return $listenerFn$$.call($listenerHandler$$, $eventObject$$);
};
goog.events.getTotalListenerCount = function $goog$events$getTotalListenerCount$() {
  return goog.events.listenerCountEstimate_;
};
goog.events.dispatchEvent = function $goog$events$dispatchEvent$($src$$, $e$$) {
  goog.asserts.assert(goog.events.Listenable.isImplementedBy($src$$), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
  return $src$$.dispatchEvent($e$$);
};
goog.events.protectBrowserEventEntryPoint = function $goog$events$protectBrowserEventEntryPoint$($errorHandler$$) {
  goog.events.handleBrowserEvent_ = $errorHandler$$.protectEntryPoint(goog.events.handleBrowserEvent_);
};
goog.events.handleBrowserEvent_ = function $goog$events$handleBrowserEvent_$($listener$jscomp$84_type$$, $evt$$) {
  if ($listener$jscomp$84_type$$.removed) {
    return !0;
  }
  if (!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
    var $ancestors$$ = $evt$$ || goog.getObjectByName("window.event");
    $evt$$ = new goog.events.BrowserEvent($ancestors$$, this);
    var $retval$$ = !0;
    if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.ON) {
      if (!goog.events.isMarkedIeEvent_($ancestors$$)) {
        goog.events.markIeEvent_($ancestors$$);
        $ancestors$$ = [];
        for (var $i$jscomp$122_parent$$ = $evt$$.currentTarget; $i$jscomp$122_parent$$; $i$jscomp$122_parent$$ = $i$jscomp$122_parent$$.parentNode) {
          $ancestors$$.push($i$jscomp$122_parent$$);
        }
        $listener$jscomp$84_type$$ = $listener$jscomp$84_type$$.type;
        for ($i$jscomp$122_parent$$ = $ancestors$$.length - 1; !$evt$$.hasPropagationStopped() && 0 <= $i$jscomp$122_parent$$; $i$jscomp$122_parent$$--) {
          $evt$$.currentTarget = $ancestors$$[$i$jscomp$122_parent$$];
          var $result$$ = goog.events.fireListeners_($ancestors$$[$i$jscomp$122_parent$$], $listener$jscomp$84_type$$, !0, $evt$$);
          $retval$$ = $retval$$ && $result$$;
        }
        for ($i$jscomp$122_parent$$ = 0; !$evt$$.hasPropagationStopped() && $i$jscomp$122_parent$$ < $ancestors$$.length; $i$jscomp$122_parent$$++) {
          $evt$$.currentTarget = $ancestors$$[$i$jscomp$122_parent$$], $result$$ = goog.events.fireListeners_($ancestors$$[$i$jscomp$122_parent$$], $listener$jscomp$84_type$$, !1, $evt$$), $retval$$ = $retval$$ && $result$$;
        }
      }
    } else {
      $retval$$ = goog.events.fireListener($listener$jscomp$84_type$$, $evt$$);
    }
    return $retval$$;
  }
  return goog.events.fireListener($listener$jscomp$84_type$$, new goog.events.BrowserEvent($evt$$, this));
};
goog.events.markIeEvent_ = function $goog$events$markIeEvent_$($e$$) {
  var $useReturnValue$$ = !1;
  if (0 == $e$$.keyCode) {
    try {
      $e$$.keyCode = -1;
      return;
    } catch ($ex$$) {
      $useReturnValue$$ = !0;
    }
  }
  if ($useReturnValue$$ || void 0 == $e$$.returnValue) {
    $e$$.returnValue = !0;
  }
};
goog.events.isMarkedIeEvent_ = function $goog$events$isMarkedIeEvent_$($e$$) {
  return 0 > $e$$.keyCode || void 0 != $e$$.returnValue;
};
goog.events.uniqueIdCounter_ = 0;
goog.events.getUniqueId = function $goog$events$getUniqueId$($identifier$$) {
  return $identifier$$ + "_" + goog.events.uniqueIdCounter_++;
};
goog.events.getListenerMap_ = function $goog$events$getListenerMap_$($listenerMap$jscomp$8_src$$) {
  $listenerMap$jscomp$8_src$$ = $listenerMap$jscomp$8_src$$[goog.events.LISTENER_MAP_PROP_];
  return $listenerMap$jscomp$8_src$$ instanceof goog.events.ListenerMap ? $listenerMap$jscomp$8_src$$ : null;
};
goog.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
goog.events.wrapListener = function $goog$events$wrapListener$($listener$$) {
  goog.asserts.assert($listener$$, "Listener can not be null.");
  if ("function" === typeof $listener$$) {
    return $listener$$;
  }
  goog.asserts.assert($listener$$.handleEvent, "An object listener must have handleEvent method.");
  $listener$$[goog.events.LISTENER_WRAPPER_PROP_] || ($listener$$[goog.events.LISTENER_WRAPPER_PROP_] = function $$listener$$$goog$events$LISTENER_WRAPPER_PROP_$($e$$) {
    return $listener$$.handleEvent($e$$);
  });
  return $listener$$[goog.events.LISTENER_WRAPPER_PROP_];
};
goog.debug.entryPointRegistry.register(function($transformer$$) {
  goog.events.handleBrowserEvent_ = $transformer$$(goog.events.handleBrowserEvent_);
});
goog.events.EventTarget = function $goog$events$EventTarget$() {
  goog.Disposable.call(this);
  this.eventTargetListeners_ = new goog.events.ListenerMap(this);
  this.actualEventTarget_ = this;
  this.parentEventTarget_ = null;
};
goog.inherits(goog.events.EventTarget, goog.Disposable);
goog.events.Listenable.addImplementation(goog.events.EventTarget);
goog.events.EventTarget.MAX_ANCESTORS_ = 1000;
goog.events.EventTarget.prototype.getParentEventTarget = function $goog$events$EventTarget$$getParentEventTarget$() {
  return this.parentEventTarget_;
};
goog.events.EventTarget.prototype.setParentEventTarget = function $goog$events$EventTarget$$setParentEventTarget$($parent$$) {
  this.parentEventTarget_ = $parent$$;
};
goog.events.EventTarget.prototype.addEventListener = function $goog$events$EventTarget$$addEventListener$($type$$, $handler$$, $opt_capture$$, $opt_handlerScope$$) {
  goog.events.listen(this, $type$$, $handler$$, $opt_capture$$, $opt_handlerScope$$);
};
goog.events.EventTarget.prototype.removeEventListener = function $goog$events$EventTarget$$removeEventListener$($type$$, $handler$$, $opt_capture$$, $opt_handlerScope$$) {
  goog.events.unlisten(this, $type$$, $handler$$, $opt_capture$$, $opt_handlerScope$$);
};
goog.events.EventTarget.prototype.dispatchEvent = function $goog$events$EventTarget$$dispatchEvent$($e$$) {
  this.assertInitialized_();
  var $ancestor$$ = this.getParentEventTarget();
  if ($ancestor$$) {
    var $ancestorsTree$$ = [];
    for (var $ancestorCount$$ = 1; $ancestor$$; $ancestor$$ = $ancestor$$.getParentEventTarget()) {
      $ancestorsTree$$.push($ancestor$$), goog.asserts.assert(++$ancestorCount$$ < goog.events.EventTarget.MAX_ANCESTORS_, "infinite loop");
    }
  }
  return goog.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_, $e$$, $ancestorsTree$$);
};
goog.events.EventTarget.prototype.disposeInternal = function $goog$events$EventTarget$$disposeInternal$() {
  goog.events.EventTarget.superClass_.disposeInternal.call(this);
  this.removeAllListeners();
  this.parentEventTarget_ = null;
};
goog.events.EventTarget.prototype.listen = function $goog$events$EventTarget$$listen$($type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  this.assertInitialized_();
  return this.eventTargetListeners_.add(String($type$$), $listener$$, !1, $opt_useCapture$$, $opt_listenerScope$$);
};
goog.events.EventTarget.prototype.listenOnce = function $goog$events$EventTarget$$listenOnce$($type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  return this.eventTargetListeners_.add(String($type$$), $listener$$, !0, $opt_useCapture$$, $opt_listenerScope$$);
};
goog.events.EventTarget.prototype.unlisten = function $goog$events$EventTarget$$unlisten$($type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  return this.eventTargetListeners_.remove(String($type$$), $listener$$, $opt_useCapture$$, $opt_listenerScope$$);
};
goog.events.EventTarget.prototype.unlistenByKey = function $goog$events$EventTarget$$unlistenByKey$($key$$) {
  return this.eventTargetListeners_.removeByKey($key$$);
};
goog.events.EventTarget.prototype.removeAllListeners = function $goog$events$EventTarget$$removeAllListeners$($opt_type$$) {
  return this.eventTargetListeners_ ? this.eventTargetListeners_.removeAll($opt_type$$) : 0;
};
goog.events.EventTarget.prototype.fireListeners = function $goog$events$EventTarget$$fireListeners$($listenerArray$jscomp$8_type$$, $capture$$, $eventObject$$) {
  $listenerArray$jscomp$8_type$$ = this.eventTargetListeners_.listeners[String($listenerArray$jscomp$8_type$$)];
  if (!$listenerArray$jscomp$8_type$$) {
    return !0;
  }
  $listenerArray$jscomp$8_type$$ = $listenerArray$jscomp$8_type$$.concat();
  for (var $rv$$ = !0, $i$$ = 0; $i$$ < $listenerArray$jscomp$8_type$$.length; ++$i$$) {
    var $listener$$ = $listenerArray$jscomp$8_type$$[$i$$];
    if ($listener$$ && !$listener$$.removed && $listener$$.capture == $capture$$) {
      var $listenerFn$$ = $listener$$.listener, $listenerHandler$$ = $listener$$.handler || $listener$$.src;
      $listener$$.callOnce && this.unlistenByKey($listener$$);
      $rv$$ = !1 !== $listenerFn$$.call($listenerHandler$$, $eventObject$$) && $rv$$;
    }
  }
  return $rv$$ && !$eventObject$$.defaultPrevented;
};
goog.events.EventTarget.prototype.getListeners = function $goog$events$EventTarget$$getListeners$($type$$, $capture$$) {
  return this.eventTargetListeners_.getListeners(String($type$$), $capture$$);
};
goog.events.EventTarget.prototype.getListener = function $goog$events$EventTarget$$getListener$($type$$, $listener$$, $capture$$, $opt_listenerScope$$) {
  return this.eventTargetListeners_.getListener(String($type$$), $listener$$, $capture$$, $opt_listenerScope$$);
};
goog.events.EventTarget.prototype.hasListener = function $goog$events$EventTarget$$hasListener$($opt_type$$, $opt_capture$$) {
  return this.eventTargetListeners_.hasListener(void 0 !== $opt_type$$ ? String($opt_type$$) : void 0, $opt_capture$$);
};
goog.events.EventTarget.prototype.setTargetForTesting = function $goog$events$EventTarget$$setTargetForTesting$($target$$) {
  this.actualEventTarget_ = $target$$;
};
goog.events.EventTarget.prototype.assertInitialized_ = function $goog$events$EventTarget$$assertInitialized_$() {
  goog.asserts.assert(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
goog.events.EventTarget.dispatchEventInternal_ = function $goog$events$EventTarget$dispatchEventInternal_$($target$$, $e$$, $opt_ancestorsTree$$) {
  var $type$$ = $e$$.type || $e$$;
  if ("string" === typeof $e$$) {
    $e$$ = new goog.events.Event($e$$, $target$$);
  } else {
    if ($e$$ instanceof goog.events.Event) {
      $e$$.target = $e$$.target || $target$$;
    } else {
      var $oldEvent_rv$$ = $e$$;
      $e$$ = new goog.events.Event($type$$, $target$$);
      module$contents$goog$object_extend($e$$, $oldEvent_rv$$);
    }
  }
  $oldEvent_rv$$ = !0;
  if ($opt_ancestorsTree$$) {
    for (var $i$$ = $opt_ancestorsTree$$.length - 1; !$e$$.hasPropagationStopped() && 0 <= $i$$; $i$$--) {
      var $currentTarget$$ = $e$$.currentTarget = $opt_ancestorsTree$$[$i$$];
      $oldEvent_rv$$ = $currentTarget$$.fireListeners($type$$, !0, $e$$) && $oldEvent_rv$$;
    }
  }
  $e$$.hasPropagationStopped() || ($currentTarget$$ = $e$$.currentTarget = $target$$, $oldEvent_rv$$ = $currentTarget$$.fireListeners($type$$, !0, $e$$) && $oldEvent_rv$$, $e$$.hasPropagationStopped() || ($oldEvent_rv$$ = $currentTarget$$.fireListeners($type$$, !1, $e$$) && $oldEvent_rv$$));
  if ($opt_ancestorsTree$$) {
    for ($i$$ = 0; !$e$$.hasPropagationStopped() && $i$$ < $opt_ancestorsTree$$.length; $i$$++) {
      $currentTarget$$ = $e$$.currentTarget = $opt_ancestorsTree$$[$i$$], $oldEvent_rv$$ = $currentTarget$$.fireListeners($type$$, !1, $e$$) && $oldEvent_rv$$;
    }
  }
  return $oldEvent_rv$$;
};
goog.Timer = function $goog$Timer$($opt_interval$$, $opt_timerObject$$) {
  goog.events.EventTarget.call(this);
  this.interval_ = $opt_interval$$ || 1;
  this.timerObject_ = $opt_timerObject$$ || goog.Timer.defaultTimerObject;
  this.boundTick_ = goog.bind(this.tick_, this);
  this.last_ = goog.now();
};
goog.inherits(goog.Timer, goog.events.EventTarget);
goog.Timer.MAX_TIMEOUT_ = 2147483647;
goog.Timer.INVALID_TIMEOUT_ID_ = -1;
goog.Timer.prototype.enabled = !1;
goog.Timer.defaultTimerObject = goog.global;
goog.Timer.intervalScale = 0.8;
goog.Timer.prototype.timer_ = null;
goog.Timer.prototype.getInterval = function $goog$Timer$$getInterval$() {
  return this.interval_;
};
goog.Timer.prototype.setInterval = function $goog$Timer$$setInterval$($interval$$) {
  this.interval_ = $interval$$;
  this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop();
};
goog.Timer.prototype.tick_ = function $goog$Timer$$tick_$() {
  if (this.enabled) {
    var $elapsed$$ = goog.now() - this.last_;
    0 < $elapsed$$ && $elapsed$$ < this.interval_ * goog.Timer.intervalScale ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - $elapsed$$) : (this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null), this.dispatchTick(), this.enabled && (this.stop(), this.start()));
  }
};
goog.Timer.prototype.dispatchTick = function $goog$Timer$$dispatchTick$() {
  this.dispatchEvent(goog.Timer.TICK);
};
goog.Timer.prototype.start = function $goog$Timer$$start$() {
  this.enabled = !0;
  this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now());
};
goog.Timer.prototype.stop = function $goog$Timer$$stop$() {
  this.enabled = !1;
  this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null);
};
goog.Timer.prototype.disposeInternal = function $goog$Timer$$disposeInternal$() {
  goog.Timer.superClass_.disposeInternal.call(this);
  this.stop();
  delete this.timerObject_;
};
goog.Timer.TICK = "tick";
goog.Timer.callOnce = function $goog$Timer$callOnce$($listener$$, $opt_delay$$, $opt_handler$$) {
  if ("function" === typeof $listener$$) {
    $opt_handler$$ && ($listener$$ = goog.bind($listener$$, $opt_handler$$));
  } else {
    if ($listener$$ && "function" == typeof $listener$$.handleEvent) {
      $listener$$ = goog.bind($listener$$.handleEvent, $listener$$);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return Number($opt_delay$$) > goog.Timer.MAX_TIMEOUT_ ? goog.Timer.INVALID_TIMEOUT_ID_ : goog.Timer.defaultTimerObject.setTimeout($listener$$, $opt_delay$$ || 0);
};
goog.Timer.clear = function $goog$Timer$clear$($timerId$$) {
  goog.Timer.defaultTimerObject.clearTimeout($timerId$$);
};
goog.Timer.promise = function $goog$Timer$promise$($delay$$, $opt_result$$) {
  var $timerKey$$ = null;
  return (new goog.Promise(function($resolve$$, $reject$$) {
    $timerKey$$ = goog.Timer.callOnce(function() {
      $resolve$$($opt_result$$);
    }, $delay$$);
    $timerKey$$ == goog.Timer.INVALID_TIMEOUT_ID_ && $reject$$(Error("Failed to schedule timer."));
  })).thenCatch(function($error$$) {
    goog.Timer.clear($timerKey$$);
    throw $error$$;
  });
};
goog.json = {};
goog.json.USE_NATIVE_JSON = !1;
goog.json.TRY_NATIVE_JSON = !0;
goog.json.isValid = function $goog$json$isValid$($s$$) {
  return /^\s*$/.test($s$$) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test($s$$.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
};
goog.json.errorLogger_ = goog.nullFunction;
goog.json.setErrorLogger = function $goog$json$setErrorLogger$($errorLogger$$) {
  goog.json.errorLogger_ = $errorLogger$$;
};
goog.json.parse = goog.json.USE_NATIVE_JSON ? goog.global.JSON.parse : function($o$jscomp$18_s$$) {
  if (goog.json.TRY_NATIVE_JSON) {
    try {
      return goog.global.JSON.parse($o$jscomp$18_s$$);
    } catch ($ex$$) {
      var $error$$ = $ex$$;
    }
  }
  $o$jscomp$18_s$$ = String($o$jscomp$18_s$$);
  if (goog.json.isValid($o$jscomp$18_s$$)) {
    try {
      var $result$$ = eval("(" + $o$jscomp$18_s$$ + ")");
      $error$$ && goog.json.errorLogger_("Invalid JSON: " + $o$jscomp$18_s$$, $error$$);
      return $result$$;
    } catch ($ex$19$$) {
    }
  }
  throw Error("Invalid JSON string: " + $o$jscomp$18_s$$);
};
goog.json.serialize = goog.json.USE_NATIVE_JSON ? goog.global.JSON.stringify : function($object$$, $opt_replacer$$) {
  return (new goog.json.Serializer($opt_replacer$$)).serialize($object$$);
};
goog.json.Serializer = function $goog$json$Serializer$($opt_replacer$$) {
  this.replacer_ = $opt_replacer$$;
};
goog.json.Serializer.prototype.serialize = function $goog$json$Serializer$$serialize$($object$$) {
  var $sb$$ = [];
  this.serializeInternal($object$$, $sb$$);
  return $sb$$.join("");
};
goog.json.Serializer.prototype.serializeInternal = function $goog$json$Serializer$$serializeInternal$($object$$, $sb$$) {
  if (null == $object$$) {
    $sb$$.push("null");
  } else {
    if ("object" == typeof $object$$) {
      if (Array.isArray($object$$)) {
        this.serializeArray($object$$, $sb$$);
        return;
      }
      if ($object$$ instanceof String || $object$$ instanceof Number || $object$$ instanceof Boolean) {
        $object$$ = $object$$.valueOf();
      } else {
        this.serializeObject_($object$$, $sb$$);
        return;
      }
    }
    switch(typeof $object$$) {
      case "string":
        this.serializeString_($object$$, $sb$$);
        break;
      case "number":
        this.serializeNumber_($object$$, $sb$$);
        break;
      case "boolean":
        $sb$$.push(String($object$$));
        break;
      case "function":
        $sb$$.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof $object$$);
    }
  }
};
goog.json.Serializer.charToJsonCharCache_ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
goog.json.Serializer.charsToReplace_ = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
goog.json.Serializer.prototype.serializeString_ = function $goog$json$Serializer$$serializeString_$($s$$, $sb$$) {
  $sb$$.push('"', $s$$.replace(goog.json.Serializer.charsToReplace_, function($c$$) {
    var $rv$$ = goog.json.Serializer.charToJsonCharCache_[$c$$];
    $rv$$ || ($rv$$ = "\\u" + ($c$$.charCodeAt(0) | 65536).toString(16).substr(1), goog.json.Serializer.charToJsonCharCache_[$c$$] = $rv$$);
    return $rv$$;
  }), '"');
};
goog.json.Serializer.prototype.serializeNumber_ = function $goog$json$Serializer$$serializeNumber_$($n$$, $sb$$) {
  $sb$$.push(isFinite($n$$) && !isNaN($n$$) ? String($n$$) : "null");
};
goog.json.Serializer.prototype.serializeArray = function $goog$json$Serializer$$serializeArray$($arr$$, $sb$$) {
  var $l$$ = $arr$$.length;
  $sb$$.push("[");
  for (var $sep_value$$ = "", $i$$ = 0; $i$$ < $l$$; $i$$++) {
    $sb$$.push($sep_value$$), $sep_value$$ = $arr$$[$i$$], this.serializeInternal(this.replacer_ ? this.replacer_.call($arr$$, String($i$$), $sep_value$$) : $sep_value$$, $sb$$), $sep_value$$ = ",";
  }
  $sb$$.push("]");
};
goog.json.Serializer.prototype.serializeObject_ = function $goog$json$Serializer$$serializeObject_$($obj$$, $sb$$) {
  $sb$$.push("{");
  var $sep$$ = "", $key$$;
  for ($key$$ in $obj$$) {
    if (Object.prototype.hasOwnProperty.call($obj$$, $key$$)) {
      var $value$$ = $obj$$[$key$$];
      "function" != typeof $value$$ && ($sb$$.push($sep$$), this.serializeString_($key$$, $sb$$), $sb$$.push(":"), this.serializeInternal(this.replacer_ ? this.replacer_.call($obj$$, $key$$, $value$$) : $value$$, $sb$$), $sep$$ = ",");
    }
  }
  $sb$$.push("}");
};
goog.json.hybrid = {};
goog.json.hybrid.stringify = goog.json.USE_NATIVE_JSON ? goog.global.JSON.stringify : function($obj$$) {
  if (goog.global.JSON) {
    try {
      return goog.global.JSON.stringify($obj$$);
    } catch ($e$$) {
    }
  }
  return goog.json.serialize($obj$$);
};
goog.json.hybrid.parse_ = function $goog$json$hybrid$parse_$($jsonString$$, $fallbackParser$$) {
  if (goog.global.JSON) {
    try {
      var $obj$$ = goog.global.JSON.parse($jsonString$$);
      goog.asserts.assert("object" == typeof $obj$$);
      return $obj$$;
    } catch ($e$$) {
    }
  }
  return $fallbackParser$$($jsonString$$);
};
goog.json.hybrid.parse = goog.json.USE_NATIVE_JSON ? goog.global.JSON.parse : function($jsonString$$) {
  return goog.json.hybrid.parse_($jsonString$$, goog.json.parse);
};
goog.log = {};
goog.log.ENABLED = goog.debug.LOGGING_ENABLED;
goog.log.ROOT_LOGGER_NAME = "";
var node_modules$google_closure_library$closure$goog$log$log$classdecl$var0 = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var0$($name$$, $value$$) {
  this.name = $name$$;
  this.value = $value$$;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var0.prototype.toString = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var0$$toString$() {
  return this.name;
};
goog.log.Level = node_modules$google_closure_library$closure$goog$log$log$classdecl$var0;
goog.log.Level.OFF = new goog.log.Level("OFF", Infinity);
goog.log.Level.SHOUT = new goog.log.Level("SHOUT", 1200);
goog.log.Level.SEVERE = new goog.log.Level("SEVERE", 1000);
goog.log.Level.WARNING = new goog.log.Level("WARNING", 900);
goog.log.Level.INFO = new goog.log.Level("INFO", 800);
goog.log.Level.CONFIG = new goog.log.Level("CONFIG", 700);
goog.log.Level.FINE = new goog.log.Level("FINE", 500);
goog.log.Level.FINER = new goog.log.Level("FINER", 400);
goog.log.Level.FINEST = new goog.log.Level("FINEST", 300);
goog.log.Level.ALL = new goog.log.Level("ALL", 0);
goog.log.Level.PREDEFINED_LEVELS = [goog.log.Level.OFF, goog.log.Level.SHOUT, goog.log.Level.SEVERE, goog.log.Level.WARNING, goog.log.Level.INFO, goog.log.Level.CONFIG, goog.log.Level.FINE, goog.log.Level.FINER, goog.log.Level.FINEST, goog.log.Level.ALL];
goog.log.Level.predefinedLevelsCache_ = null;
goog.log.Level.createPredefinedLevelsCache_ = function $goog$log$Level$createPredefinedLevelsCache_$() {
  goog.log.Level.predefinedLevelsCache_ = {};
  for (var $i$$ = 0, $level$$; $level$$ = goog.log.Level.PREDEFINED_LEVELS[$i$$]; $i$$++) {
    goog.log.Level.predefinedLevelsCache_[$level$$.value] = $level$$, goog.log.Level.predefinedLevelsCache_[$level$$.name] = $level$$;
  }
};
goog.log.Level.getPredefinedLevel = function $goog$log$Level$getPredefinedLevel$($name$$) {
  goog.log.Level.predefinedLevelsCache_ || goog.log.Level.createPredefinedLevelsCache_();
  return goog.log.Level.predefinedLevelsCache_[$name$$] || null;
};
goog.log.Level.getPredefinedLevelByValue = function $goog$log$Level$getPredefinedLevelByValue$($value$$) {
  goog.log.Level.predefinedLevelsCache_ || goog.log.Level.createPredefinedLevelsCache_();
  if ($value$$ in goog.log.Level.predefinedLevelsCache_) {
    return goog.log.Level.predefinedLevelsCache_[$value$$];
  }
  for (var $i$$ = 0; $i$$ < goog.log.Level.PREDEFINED_LEVELS.length; ++$i$$) {
    var $level$$ = goog.log.Level.PREDEFINED_LEVELS[$i$$];
    if ($level$$.value <= $value$$) {
      return $level$$;
    }
  }
  return null;
};
var node_modules$google_closure_library$closure$goog$log$log$classdecl$var1 = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var1$() {
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var1.prototype.getName = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var1$$getName$() {
};
goog.log.Logger = node_modules$google_closure_library$closure$goog$log$log$classdecl$var1;
goog.log.Logger.Level = goog.log.Level;
var node_modules$google_closure_library$closure$goog$log$log$classdecl$var2 = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var2$($capacity$$) {
  this.capacity_ = "number" === typeof $capacity$$ ? $capacity$$ : goog.log.LogBuffer.CAPACITY;
  this.clear();
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var2.prototype.addRecord = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var2$$addRecord$($level$$, $msg$$, $loggerName$$) {
  if (!this.isBufferingEnabled()) {
    return new goog.log.LogRecord($level$$, $msg$$, $loggerName$$);
  }
  var $curIndex_ret$$ = (this.curIndex_ + 1) % this.capacity_;
  this.curIndex_ = $curIndex_ret$$;
  if (this.isFull_) {
    return $curIndex_ret$$ = this.buffer_[$curIndex_ret$$], $curIndex_ret$$.reset($level$$, $msg$$, $loggerName$$), $curIndex_ret$$;
  }
  this.isFull_ = $curIndex_ret$$ == this.capacity_ - 1;
  return this.buffer_[$curIndex_ret$$] = new goog.log.LogRecord($level$$, $msg$$, $loggerName$$);
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var2.prototype.forEachRecord = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var2$$forEachRecord$($func$$) {
  var $buffer$$ = this.buffer_;
  if ($buffer$$[0]) {
    var $curIndex$$ = this.curIndex_, $i$$ = this.isFull_ ? $curIndex$$ : -1;
    do {
      $i$$ = ($i$$ + 1) % this.capacity_, $func$$($buffer$$[$i$$]);
    } while ($i$$ !== $curIndex$$);
  }
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var2.prototype.isBufferingEnabled = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var2$$isBufferingEnabled$() {
  return 0 < this.capacity_;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var2.prototype.isFull = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var2$$isFull$() {
  return this.isFull_;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var2.prototype.clear = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var2$$clear$() {
  this.buffer_ = Array(this.capacity_);
  this.curIndex_ = -1;
  this.isFull_ = !1;
};
goog.log.LogBuffer = node_modules$google_closure_library$closure$goog$log$log$classdecl$var2;
goog.log.LogBuffer.CAPACITY = 0;
goog.log.LogBuffer.getInstance = function $goog$log$LogBuffer$getInstance$() {
  goog.log.LogBuffer.instance_ || (goog.log.LogBuffer.instance_ = new goog.log.LogBuffer(goog.log.LogBuffer.CAPACITY));
  return goog.log.LogBuffer.instance_;
};
goog.log.LogBuffer.isBufferingEnabled = function $goog$log$LogBuffer$isBufferingEnabled$() {
  return goog.log.LogBuffer.getInstance().isBufferingEnabled();
};
var node_modules$google_closure_library$closure$goog$log$log$classdecl$var3 = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$($level$$, $msg$$, $loggerName$$, $time$$, $sequenceNumber$$) {
  this.exception_ = null;
  this.reset($level$$ || goog.log.Level.OFF, $msg$$, $loggerName$$, $time$$, $sequenceNumber$$);
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.reset = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$reset$($level$$, $msg$$, $loggerName$$, $time$$, $sequenceNumber$$) {
  this.time_ = $time$$ || goog.now();
  this.level_ = $level$$;
  this.msg_ = $msg$$;
  this.loggerName_ = $loggerName$$;
  this.exception_ = null;
  this.sequenceNumber_ = "number" === typeof $sequenceNumber$$ ? $sequenceNumber$$ : goog.log.LogRecord.nextSequenceNumber_;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.getLoggerName = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$getLoggerName$() {
  return this.loggerName_;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.setLoggerName = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$setLoggerName$($name$$) {
  this.loggerName_ = $name$$;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.getException = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$getException$() {
  return this.exception_;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.setException = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$setException$($exception$$) {
  this.exception_ = $exception$$;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.getLevel = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$getLevel$() {
  return this.level_;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.setLevel = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$setLevel$($level$$) {
  this.level_ = $level$$;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.getMessage = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$getMessage$() {
  return this.msg_;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.setMessage = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$setMessage$($msg$$) {
  this.msg_ = $msg$$;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.getMillis = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$getMillis$() {
  return this.time_;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.setMillis = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$setMillis$($time$$) {
  this.time_ = $time$$;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var3.prototype.getSequenceNumber = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var3$$getSequenceNumber$() {
  return this.sequenceNumber_;
};
goog.log.LogRecord = node_modules$google_closure_library$closure$goog$log$log$classdecl$var3;
goog.log.LogRecord.nextSequenceNumber_ = 0;
var node_modules$google_closure_library$closure$goog$log$log$classdecl$var4 = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var4$($name$$, $parent$$) {
  this.level = null;
  this.handlers = [];
  this.parent = (void 0 === $parent$$ ? null : $parent$$) || null;
  this.children = [];
  this.logger = {getName:function $this$logger$getName$() {
    return $name$$;
  }};
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var4.prototype.getEffectiveLevel = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var4$$getEffectiveLevel$() {
  if (this.level) {
    return this.level;
  }
  if (this.parent) {
    return this.parent.getEffectiveLevel();
  }
  goog.asserts.fail("Root logger has no level set.");
  return goog.log.Level.OFF;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var4.prototype.publish = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var4$$publish$($logRecord$$) {
  for (var $target$$ = this; $target$$;) {
    $target$$.handlers.forEach(function($handler$$) {
      $handler$$($logRecord$$);
    }), $target$$ = $target$$.parent;
  }
};
goog.log.LogRegistryEntry_ = node_modules$google_closure_library$closure$goog$log$log$classdecl$var4;
var node_modules$google_closure_library$closure$goog$log$log$classdecl$var5 = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var5$() {
  this.entries = {};
  var $rootLogRegistryEntry$$ = new goog.log.LogRegistryEntry_(goog.log.ROOT_LOGGER_NAME);
  $rootLogRegistryEntry$$.level = goog.log.Level.CONFIG;
  this.entries[goog.log.ROOT_LOGGER_NAME] = $rootLogRegistryEntry$$;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var5.prototype.getLogRegistryEntry = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var5$$getLogRegistryEntry$($name$$, $level$$) {
  var $entry$$ = this.entries[$name$$];
  if ($entry$$) {
    return void 0 !== $level$$ && ($entry$$.level = $level$$), $entry$$;
  }
  $entry$$ = $name$$.lastIndexOf(".");
  $entry$$ = $name$$.substr(0, $entry$$);
  $entry$$ = this.getLogRegistryEntry($entry$$);
  var $logRegistryEntry$$ = new goog.log.LogRegistryEntry_($name$$, $entry$$);
  this.entries[$name$$] = $logRegistryEntry$$;
  $entry$$.children.push($logRegistryEntry$$);
  void 0 !== $level$$ && ($logRegistryEntry$$.level = $level$$);
  return $logRegistryEntry$$;
};
node_modules$google_closure_library$closure$goog$log$log$classdecl$var5.prototype.getAllLoggers = function $node_modules$google_closure_library$closure$goog$log$log$classdecl$var5$$getAllLoggers$() {
  var $$jscomp$this$$ = this;
  return Object.keys(this.entries).map(function($loggerName$$) {
    return $$jscomp$this$$.entries[$loggerName$$].logger;
  });
};
goog.log.LogRegistry_ = node_modules$google_closure_library$closure$goog$log$log$classdecl$var5;
goog.log.LogRegistry_.getInstance = function $goog$log$LogRegistry_$getInstance$() {
  goog.log.LogRegistry_.instance_ || (goog.log.LogRegistry_.instance_ = new goog.log.LogRegistry_);
  return goog.log.LogRegistry_.instance_;
};
goog.log.getLogger = function $goog$log$getLogger$($name$$, $level$$) {
  return goog.log.ENABLED ? goog.log.LogRegistry_.getInstance().getLogRegistryEntry($name$$, $level$$).logger : null;
};
goog.log.getRootLogger = function $goog$log$getRootLogger$() {
  return goog.log.ENABLED ? goog.log.LogRegistry_.getInstance().getLogRegistryEntry(goog.log.ROOT_LOGGER_NAME).logger : null;
};
goog.log.addHandler = function $goog$log$addHandler$($logger$$, $handler$$) {
  goog.log.ENABLED && $logger$$ && goog.log.LogRegistry_.getInstance().getLogRegistryEntry($logger$$.getName()).handlers.push($handler$$);
};
goog.log.removeHandler = function $goog$log$removeHandler$($logger$jscomp$1_loggerEntry$$, $handler$$) {
  return goog.log.ENABLED && $logger$jscomp$1_loggerEntry$$ && ($logger$jscomp$1_loggerEntry$$ = goog.log.LogRegistry_.getInstance().getLogRegistryEntry($logger$jscomp$1_loggerEntry$$.getName()), $handler$$ = $logger$jscomp$1_loggerEntry$$.handlers.indexOf($handler$$), -1 !== $handler$$) ? ($logger$jscomp$1_loggerEntry$$.handlers.splice($handler$$, 1), !0) : !1;
};
goog.log.setLevel = function $goog$log$setLevel$($logger$$, $level$$) {
  goog.log.ENABLED && $logger$$ && (goog.log.LogRegistry_.getInstance().getLogRegistryEntry($logger$$.getName()).level = $level$$);
};
goog.log.getLevel = function $goog$log$getLevel$($logger$$) {
  return goog.log.ENABLED && $logger$$ ? goog.log.LogRegistry_.getInstance().getLogRegistryEntry($logger$$.getName()).level : null;
};
goog.log.getEffectiveLevel = function $goog$log$getEffectiveLevel$($logger$$) {
  return goog.log.ENABLED && $logger$$ ? goog.log.LogRegistry_.getInstance().getLogRegistryEntry($logger$$.getName()).getEffectiveLevel() : goog.log.Level.OFF;
};
goog.log.isLoggable = function $goog$log$isLoggable$($logger$$, $level$$) {
  return goog.log.ENABLED && $logger$$ && $level$$ ? $level$$.value >= goog.log.getEffectiveLevel($logger$$).value : !1;
};
goog.log.getAllLoggers = function $goog$log$getAllLoggers$() {
  return goog.log.ENABLED ? goog.log.LogRegistry_.getInstance().getAllLoggers() : [];
};
goog.log.getLogRecord = function $goog$log$getLogRecord$($logRecord$jscomp$1_logger$$, $level$$, $msg$$, $exception$$) {
  $logRecord$jscomp$1_logger$$ = goog.log.LogBuffer.getInstance().addRecord($level$$ || goog.log.Level.OFF, $msg$$, $logRecord$jscomp$1_logger$$.getName());
  $exception$$ && $logRecord$jscomp$1_logger$$.setException($exception$$);
  return $logRecord$jscomp$1_logger$$;
};
goog.log.publishLogRecord = function $goog$log$publishLogRecord$($logger$$, $logRecord$$) {
  goog.log.ENABLED && $logger$$ && goog.log.isLoggable($logger$$, $logRecord$$.getLevel()) && goog.log.LogRegistry_.getInstance().getLogRegistryEntry($logger$$.getName()).publish($logRecord$$);
};
goog.log.log = function $goog$log$log$($logRecord$jscomp$3_logger$$, $level$$, $msg$$, $exception$$) {
  if (goog.log.ENABLED && $logRecord$jscomp$3_logger$$ && goog.log.isLoggable($logRecord$jscomp$3_logger$$, $level$$)) {
    $level$$ = $level$$ || goog.log.Level.OFF;
    var $loggerEntry$$ = goog.log.LogRegistry_.getInstance().getLogRegistryEntry($logRecord$jscomp$3_logger$$.getName());
    "function" === typeof $msg$$ && ($msg$$ = $msg$$());
    $logRecord$jscomp$3_logger$$ = goog.log.LogBuffer.getInstance().addRecord($level$$, $msg$$, $logRecord$jscomp$3_logger$$.getName());
    $exception$$ && $logRecord$jscomp$3_logger$$.setException($exception$$);
    $loggerEntry$$.publish($logRecord$jscomp$3_logger$$);
  }
};
goog.log.error = function $goog$log$error$($logger$$, $msg$$, $exception$$) {
  goog.log.ENABLED && $logger$$ && goog.log.log($logger$$, goog.log.Level.SEVERE, $msg$$, $exception$$);
};
goog.log.warning = function $goog$log$warning$($logger$$, $msg$$, $exception$$) {
  goog.log.ENABLED && $logger$$ && goog.log.log($logger$$, goog.log.Level.WARNING, $msg$$, $exception$$);
};
goog.log.info = function $goog$log$info$($logger$$, $msg$$, $exception$$) {
  goog.log.ENABLED && $logger$$ && goog.log.log($logger$$, goog.log.Level.INFO, $msg$$, $exception$$);
};
goog.log.fine = function $goog$log$fine$($logger$$, $msg$$, $exception$$) {
  goog.log.ENABLED && $logger$$ && goog.log.log($logger$$, goog.log.Level.FINE, $msg$$, $exception$$);
};
goog.net.HttpStatus = {CONTINUE:100, SWITCHING_PROTOCOLS:101, OK:200, CREATED:201, ACCEPTED:202, NON_AUTHORITATIVE_INFORMATION:203, NO_CONTENT:204, RESET_CONTENT:205, PARTIAL_CONTENT:206, MULTI_STATUS:207, MULTIPLE_CHOICES:300, MOVED_PERMANENTLY:301, FOUND:302, SEE_OTHER:303, NOT_MODIFIED:304, USE_PROXY:305, TEMPORARY_REDIRECT:307, PERMANENT_REDIRECT:308, BAD_REQUEST:400, UNAUTHORIZED:401, PAYMENT_REQUIRED:402, FORBIDDEN:403, NOT_FOUND:404, METHOD_NOT_ALLOWED:405, NOT_ACCEPTABLE:406, PROXY_AUTHENTICATION_REQUIRED:407, 
REQUEST_TIMEOUT:408, CONFLICT:409, GONE:410, LENGTH_REQUIRED:411, PRECONDITION_FAILED:412, REQUEST_ENTITY_TOO_LARGE:413, REQUEST_URI_TOO_LONG:414, UNSUPPORTED_MEDIA_TYPE:415, REQUEST_RANGE_NOT_SATISFIABLE:416, EXPECTATION_FAILED:417, UNPROCESSABLE_ENTITY:422, LOCKED:423, FAILED_DEPENDENCY:424, PRECONDITION_REQUIRED:428, TOO_MANY_REQUESTS:429, REQUEST_HEADER_FIELDS_TOO_LARGE:431, INTERNAL_SERVER_ERROR:500, NOT_IMPLEMENTED:501, BAD_GATEWAY:502, SERVICE_UNAVAILABLE:503, GATEWAY_TIMEOUT:504, HTTP_VERSION_NOT_SUPPORTED:505, 
INSUFFICIENT_STORAGE:507, NETWORK_AUTHENTICATION_REQUIRED:511, QUIRK_IE_NO_CONTENT:1223};
goog.net.HttpStatus.isSuccess = function $goog$net$HttpStatus$isSuccess$($status$$) {
  switch($status$$) {
    case goog.net.HttpStatus.OK:
    case goog.net.HttpStatus.CREATED:
    case goog.net.HttpStatus.ACCEPTED:
    case goog.net.HttpStatus.NO_CONTENT:
    case goog.net.HttpStatus.PARTIAL_CONTENT:
    case goog.net.HttpStatus.NOT_MODIFIED:
    case goog.net.HttpStatus.QUIRK_IE_NO_CONTENT:
      return !0;
    default:
      return !1;
  }
};
goog.net.XhrLike = function $goog$net$XhrLike$() {
};
goog.net.XhrLike.prototype.open = function $goog$net$XhrLike$$open$($method$$, $url$$, $opt_async$$, $opt_user$$, $opt_password$$) {
};
goog.net.XhrLike.prototype.send = function $goog$net$XhrLike$$send$($opt_data$$) {
};
goog.net.XhrLike.prototype.abort = function $goog$net$XhrLike$$abort$() {
};
goog.net.XhrLike.prototype.setRequestHeader = function $goog$net$XhrLike$$setRequestHeader$($header$$, $value$$) {
};
goog.net.XhrLike.prototype.getResponseHeader = function $goog$net$XhrLike$$getResponseHeader$($header$$) {
};
goog.net.XhrLike.prototype.getAllResponseHeaders = function $goog$net$XhrLike$$getAllResponseHeaders$() {
};
goog.net.XhrLike.prototype.setTrustToken = function $goog$net$XhrLike$$setTrustToken$($trustTokenAttribute$$) {
};
goog.net.XmlHttpFactory = function $goog$net$XmlHttpFactory$() {
};
goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;
goog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;
goog.net.XmlHttpFactory.prototype.getOptions = function $goog$net$XmlHttpFactory$$getOptions$() {
  return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions());
};
goog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;
goog.net.WrapperXmlHttpFactory = function $goog$net$WrapperXmlHttpFactory$($xhrFactory$$, $optionsFactory$$) {
  goog.net.XmlHttpFactory.call(this);
  this.xhrFactory_ = $xhrFactory$$;
  this.optionsFactory_ = $optionsFactory$$;
};
goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.WrapperXmlHttpFactory.prototype.createInstance = function $goog$net$WrapperXmlHttpFactory$$createInstance$() {
  return this.xhrFactory_();
};
goog.net.WrapperXmlHttpFactory.prototype.getOptions = function $goog$net$WrapperXmlHttpFactory$$getOptions$() {
  return this.optionsFactory_();
};
goog.net.XmlHttp = function $goog$net$XmlHttp$() {
  return goog.net.XmlHttp.factory_.createInstance();
};
goog.net.XmlHttp.ASSUME_NATIVE_XHR = !1;
goog.net.XmlHttpDefines = {};
goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR = !1;
goog.net.XmlHttp.getOptions = function $goog$net$XmlHttp$getOptions$() {
  return goog.net.XmlHttp.factory_.getOptions();
};
goog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION:0, LOCAL_REQUEST_ERROR:1};
goog.net.XmlHttp.ReadyState = {UNINITIALIZED:0, LOADING:1, LOADED:2, INTERACTIVE:3, COMPLETE:4};
goog.net.XmlHttp.setFactory = function $goog$net$XmlHttp$setFactory$($factory$$, $optionsFactory$$) {
  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(goog.asserts.assert($factory$$), goog.asserts.assert($optionsFactory$$)));
};
goog.net.XmlHttp.setGlobalFactory = function $goog$net$XmlHttp$setGlobalFactory$($factory$$) {
  goog.net.XmlHttp.factory_ = $factory$$;
};
goog.net.DefaultXmlHttpFactory = function $goog$net$DefaultXmlHttpFactory$() {
  goog.net.XmlHttpFactory.call(this);
};
goog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.DefaultXmlHttpFactory.prototype.createInstance = function $goog$net$DefaultXmlHttpFactory$$createInstance$() {
  var $progId$$ = this.getProgId_();
  return $progId$$ ? new ActiveXObject($progId$$) : new XMLHttpRequest;
};
goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function $goog$net$DefaultXmlHttpFactory$$internalGetOptions$() {
  var $options$$ = {};
  this.getProgId_() && ($options$$[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = !0, $options$$[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = !0);
  return $options$$;
};
goog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function $goog$net$DefaultXmlHttpFactory$$getProgId_$() {
  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR || goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {
    return "";
  }
  if (!this.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var $ACTIVE_X_IDENTS$$ = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], $i$$ = 0; $i$$ < $ACTIVE_X_IDENTS$$.length; $i$$++) {
      var $candidate$$ = $ACTIVE_X_IDENTS$$[$i$$];
      try {
        return new ActiveXObject($candidate$$), this.ieProgId_ = $candidate$$;
      } catch ($e$$) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.ieProgId_;
};
goog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);
goog.structs = {};
goog.structs.getCount = function $goog$structs$getCount$($col$$) {
  return $col$$.getCount && "function" == typeof $col$$.getCount ? $col$$.getCount() : goog.isArrayLike($col$$) || "string" === typeof $col$$ ? $col$$.length : module$contents$goog$object_getCount($col$$);
};
goog.structs.getValues = function $goog$structs$getValues$($col$$) {
  if ($col$$.getValues && "function" == typeof $col$$.getValues) {
    return $col$$.getValues();
  }
  if ("undefined" !== typeof Map && $col$$ instanceof Map || "undefined" !== typeof Set && $col$$ instanceof Set) {
    return Array.from($col$$.values());
  }
  if ("string" === typeof $col$$) {
    return $col$$.split("");
  }
  if (goog.isArrayLike($col$$)) {
    for (var $rv$$ = [], $l$$ = $col$$.length, $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $rv$$.push($col$$[$i$$]);
    }
    return $rv$$;
  }
  return module$contents$goog$object_getValues($col$$);
};
goog.structs.getKeys = function $goog$structs$getKeys$($col$jscomp$2_l$$) {
  if ($col$jscomp$2_l$$.getKeys && "function" == typeof $col$jscomp$2_l$$.getKeys) {
    return $col$jscomp$2_l$$.getKeys();
  }
  if (!$col$jscomp$2_l$$.getValues || "function" != typeof $col$jscomp$2_l$$.getValues) {
    if ("undefined" !== typeof Map && $col$jscomp$2_l$$ instanceof Map) {
      return Array.from($col$jscomp$2_l$$.keys());
    }
    if (!("undefined" !== typeof Set && $col$jscomp$2_l$$ instanceof Set)) {
      if (goog.isArrayLike($col$jscomp$2_l$$) || "string" === typeof $col$jscomp$2_l$$) {
        var $rv$$ = [];
        $col$jscomp$2_l$$ = $col$jscomp$2_l$$.length;
        for (var $i$$ = 0; $i$$ < $col$jscomp$2_l$$; $i$$++) {
          $rv$$.push($i$$);
        }
        return $rv$$;
      }
      return module$contents$goog$object_getKeys($col$jscomp$2_l$$);
    }
  }
};
goog.structs.contains = function $goog$structs$contains$($col$$, $val$$) {
  return $col$$.contains && "function" == typeof $col$$.contains ? $col$$.contains($val$$) : $col$$.containsValue && "function" == typeof $col$$.containsValue ? $col$$.containsValue($val$$) : goog.isArrayLike($col$$) || "string" === typeof $col$$ ? module$contents$goog$array_contains($col$$, $val$$) : module$contents$goog$object_containsValue($col$$, $val$$);
};
goog.structs.isEmpty = function $goog$structs$isEmpty$($col$$) {
  return $col$$.isEmpty && "function" == typeof $col$$.isEmpty ? $col$$.isEmpty() : goog.isArrayLike($col$$) || "string" === typeof $col$$ ? 0 === $col$$.length : module$contents$goog$object_isEmpty($col$$);
};
goog.structs.clear = function $goog$structs$clear$($col$$) {
  $col$$.clear && "function" == typeof $col$$.clear ? $col$$.clear() : goog.isArrayLike($col$$) ? module$contents$goog$array_clear($col$$) : module$contents$goog$object_clear($col$$);
};
goog.structs.forEach = function $goog$structs$forEach$($col$$, $f$$, $opt_obj$$) {
  if ($col$$.forEach && "function" == typeof $col$$.forEach) {
    $col$$.forEach($f$$, $opt_obj$$);
  } else {
    if (goog.isArrayLike($col$$) || "string" === typeof $col$$) {
      Array.prototype.forEach.call($col$$, $f$$, $opt_obj$$);
    } else {
      for (var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length, $i$$ = 0; $i$$ < $l$$; $i$$++) {
        $f$$.call($opt_obj$$, $values$$[$i$$], $keys$$ && $keys$$[$i$$], $col$$);
      }
    }
  }
};
goog.structs.filter = function $goog$structs$filter$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.filter) {
    return $col$$.filter($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || "string" === typeof $col$$) {
    return Array.prototype.filter.call($col$$, $f$$, $opt_obj$$);
  }
  var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length;
  if ($keys$$) {
    var $rv$$ = {};
    for (var $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $f$$.call($opt_obj$$, $values$$[$i$$], $keys$$[$i$$], $col$$) && ($rv$$[$keys$$[$i$$]] = $values$$[$i$$]);
    }
  } else {
    for ($rv$$ = [], $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $f$$.call($opt_obj$$, $values$$[$i$$], void 0, $col$$) && $rv$$.push($values$$[$i$$]);
    }
  }
  return $rv$$;
};
goog.structs.map = function $goog$structs$map$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.map) {
    return $col$$.map($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || "string" === typeof $col$$) {
    return Array.prototype.map.call($col$$, $f$$, $opt_obj$$);
  }
  var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length;
  if ($keys$$) {
    var $rv$$ = {};
    for (var $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $rv$$[$keys$$[$i$$]] = $f$$.call($opt_obj$$, $values$$[$i$$], $keys$$[$i$$], $col$$);
    }
  } else {
    for ($rv$$ = [], $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $rv$$[$i$$] = $f$$.call($opt_obj$$, $values$$[$i$$], void 0, $col$$);
    }
  }
  return $rv$$;
};
goog.structs.some = function $goog$structs$some$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.some) {
    return $col$$.some($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || "string" === typeof $col$$) {
    return Array.prototype.some.call($col$$, $f$$, $opt_obj$$);
  }
  for (var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($f$$.call($opt_obj$$, $values$$[$i$$], $keys$$ && $keys$$[$i$$], $col$$)) {
      return !0;
    }
  }
  return !1;
};
goog.structs.every = function $goog$structs$every$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.every) {
    return $col$$.every($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || "string" === typeof $col$$) {
    return Array.prototype.every.call($col$$, $f$$, $opt_obj$$);
  }
  for (var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if (!$f$$.call($opt_obj$$, $values$$[$i$$], $keys$$ && $keys$$[$i$$], $col$$)) {
      return !1;
    }
  }
  return !0;
};
goog.collections = {};
goog.collections.iters = {};
function module$contents$goog$collections$iters_getIterator($iterable$$) {
  return $iterable$$[goog.global.Symbol.iterator]();
}
goog.collections.iters.getIterator = module$contents$goog$collections$iters_getIterator;
goog.collections.iters.forEach = function $goog$collections$iters$forEach$($$jscomp$iter$0_iterable$$, $f$$) {
  $$jscomp$iter$0_iterable$$ = $jscomp.makeIterator($$jscomp$iter$0_iterable$$);
  for (var $$jscomp$key$elem$$ = $$jscomp$iter$0_iterable$$.next(); !$$jscomp$key$elem$$.done; $$jscomp$key$elem$$ = $$jscomp$iter$0_iterable$$.next()) {
    $f$$($$jscomp$key$elem$$.value);
  }
};
$jscomp.initSymbol();
$jscomp.initSymbolIterator();
var module$contents$goog$collections$iters_MapIterator = function $module$contents$goog$collections$iters_MapIterator$($childIter$$, $mapFn$$) {
  this.childIterator_ = module$contents$goog$collections$iters_getIterator($childIter$$);
  this.mapFn_ = $mapFn$$;
  this.nextIndex_ = 0;
};
module$contents$goog$collections$iters_MapIterator.prototype[Symbol.iterator] = function $module$contents$goog$collections$iters_MapIterator$$Symbol$iterator$() {
  return this;
};
module$contents$goog$collections$iters_MapIterator.prototype.next = function $module$contents$goog$collections$iters_MapIterator$$next$() {
  var $childResult$$ = this.childIterator_.next();
  return {value:$childResult$$.done ? void 0 : this.mapFn_.call(void 0, $childResult$$.value, this.nextIndex_++), done:$childResult$$.done};
};
goog.collections.iters.map = function $goog$collections$iters$map$($iterable$$, $f$$) {
  return new module$contents$goog$collections$iters_MapIterator($iterable$$, $f$$);
};
$jscomp.initSymbol();
$jscomp.initSymbolIterator();
var module$contents$goog$collections$iters_FilterIterator = function $module$contents$goog$collections$iters_FilterIterator$($childIter$$, $filterFn$$) {
  this.childIter_ = module$contents$goog$collections$iters_getIterator($childIter$$);
  this.filterFn_ = $filterFn$$;
  this.nextIndex_ = 0;
};
module$contents$goog$collections$iters_FilterIterator.prototype[Symbol.iterator] = function $module$contents$goog$collections$iters_FilterIterator$$Symbol$iterator$() {
  return this;
};
module$contents$goog$collections$iters_FilterIterator.prototype.next = function $module$contents$goog$collections$iters_FilterIterator$$next$() {
  for (;;) {
    var $childResult$$ = this.childIter_.next();
    if ($childResult$$.done) {
      return {done:!0, value:void 0};
    }
    if (this.filterFn_.call(void 0, $childResult$$.value, this.nextIndex_++)) {
      return $childResult$$;
    }
  }
};
goog.collections.iters.filter = function $goog$collections$iters$filter$($iterable$$, $f$$) {
  return new module$contents$goog$collections$iters_FilterIterator($iterable$$, $f$$);
};
$jscomp.initSymbol();
$jscomp.initSymbolIterator();
var module$contents$goog$collections$iters_ConcatIterator = function $module$contents$goog$collections$iters_ConcatIterator$($iterators$$) {
  this.iterators_ = $iterators$$;
  this.iterIndex_ = 0;
};
module$contents$goog$collections$iters_ConcatIterator.prototype[Symbol.iterator] = function $module$contents$goog$collections$iters_ConcatIterator$$Symbol$iterator$() {
  return this;
};
module$contents$goog$collections$iters_ConcatIterator.prototype.next = function $module$contents$goog$collections$iters_ConcatIterator$$next$() {
  for (; this.iterIndex_ < this.iterators_.length;) {
    var $result$$ = this.iterators_[this.iterIndex_].next();
    if (!$result$$.done) {
      return $result$$;
    }
    this.iterIndex_++;
  }
  return {done:!0};
};
goog.collections.iters.concat = function $goog$collections$iters$concat$($iterables$$) {
  for (var $$jscomp$restParams$$ = [], $$jscomp$restIndex$$ = 0; $$jscomp$restIndex$$ < arguments.length; ++$$jscomp$restIndex$$) {
    $$jscomp$restParams$$[$$jscomp$restIndex$$ - 0] = arguments[$$jscomp$restIndex$$];
  }
  return new module$contents$goog$collections$iters_ConcatIterator($$jscomp$restParams$$.map(module$contents$goog$collections$iters_getIterator));
};
goog.iter = {};
goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global.StopIteration : {message:"StopIteration", stack:""};
goog.iter.Iterator = function $goog$iter$Iterator$() {
};
goog.iter.Iterator.prototype.next = function $goog$iter$Iterator$$next$() {
  return goog.iter.Iterator.prototype.nextValueOrThrow.call(this);
};
goog.iter.Iterator.prototype.nextValueOrThrow = function $goog$iter$Iterator$$nextValueOrThrow$() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function $goog$iter$Iterator$$__iterator__$($opt_keys$$) {
  return this;
};
goog.iter.toIterator = function $goog$iter$toIterator$($iterable$$) {
  if ($iterable$$ instanceof goog.iter.Iterator) {
    return $iterable$$;
  }
  if ("function" == typeof $iterable$$.__iterator__) {
    return $iterable$$.__iterator__(!1);
  }
  if (goog.isArrayLike($iterable$$)) {
    var $i$$ = 0, $newIter$$ = new goog.iter.Iterator;
    $newIter$$.nextValueOrThrow = function $$newIter$$$nextValueOrThrow$() {
      for (;;) {
        if ($i$$ >= $iterable$$.length) {
          throw goog.iter.StopIteration;
        }
        if ($i$$ in $iterable$$) {
          return $iterable$$[$i$$++];
        }
        $i$$++;
      }
    };
    $newIter$$.next = $newIter$$.nextValueOrThrow.bind($newIter$$);
    return $newIter$$;
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function $goog$iter$forEach$($iterable$$, $f$$, $opt_obj$$) {
  if (goog.isArrayLike($iterable$$)) {
    try {
      module$contents$goog$array_forEach($iterable$$, $f$$, $opt_obj$$);
    } catch ($ex$$) {
      if ($ex$$ !== goog.iter.StopIteration) {
        throw $ex$$;
      }
    }
  } else {
    $iterable$$ = goog.iter.toIterator($iterable$$);
    try {
      for (;;) {
        $f$$.call($opt_obj$$, $iterable$$.nextValueOrThrow(), void 0, $iterable$$);
      }
    } catch ($ex$21$$) {
      if ($ex$21$$ !== goog.iter.StopIteration) {
        throw $ex$21$$;
      }
    }
  }
};
goog.iter.filter = function $goog$iter$filter$($iterable$jscomp$11_newIter$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$jscomp$11_newIter$$);
  $iterable$jscomp$11_newIter$$ = new goog.iter.Iterator;
  $iterable$jscomp$11_newIter$$.nextValueOrThrow = function $$iterable$jscomp$11_newIter$$$nextValueOrThrow$() {
    for (;;) {
      var $val$$ = $iterator$$.nextValueOrThrow();
      if ($f$$.call($opt_obj$$, $val$$, void 0, $iterator$$)) {
        return $val$$;
      }
    }
  };
  $iterable$jscomp$11_newIter$$.next = $iterable$jscomp$11_newIter$$.nextValueOrThrow.bind($iterable$jscomp$11_newIter$$);
  return $iterable$jscomp$11_newIter$$;
};
goog.iter.filterFalse = function $goog$iter$filterFalse$($iterable$$, $f$$, $opt_obj$$) {
  return goog.iter.filter($iterable$$, goog.functions.not($f$$), $opt_obj$$);
};
goog.iter.range = function $goog$iter$range$($startOrStop$$, $opt_stop$$, $opt_step$$) {
  var $start$$ = 0, $stop$$ = $startOrStop$$, $step$$ = $opt_step$$ || 1;
  1 < arguments.length && ($start$$ = $startOrStop$$, $stop$$ = +$opt_stop$$);
  if (0 == $step$$) {
    throw Error("Range step argument must not be zero");
  }
  var $newIter$$ = new goog.iter.Iterator;
  $newIter$$.nextValueOrThrow = function $$newIter$$$nextValueOrThrow$() {
    if (0 < $step$$ && $start$$ >= $stop$$ || 0 > $step$$ && $start$$ <= $stop$$) {
      throw goog.iter.StopIteration;
    }
    var $rv$$ = $start$$;
    $start$$ += $step$$;
    return $rv$$;
  };
  $newIter$$.next = $newIter$$.nextValueOrThrow.bind($newIter$$);
  return $newIter$$;
};
goog.iter.join = function $goog$iter$join$($iterable$$, $deliminator$$) {
  return goog.iter.toArray($iterable$$).join($deliminator$$);
};
goog.iter.map = function $goog$iter$map$($iterable$jscomp$14_newIter$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$jscomp$14_newIter$$);
  $iterable$jscomp$14_newIter$$ = new goog.iter.Iterator;
  $iterable$jscomp$14_newIter$$.nextValueOrThrow = function $$iterable$jscomp$14_newIter$$$nextValueOrThrow$() {
    var $val$$ = $iterator$$.nextValueOrThrow();
    return $f$$.call($opt_obj$$, $val$$, void 0, $iterator$$);
  };
  $iterable$jscomp$14_newIter$$.next = $iterable$jscomp$14_newIter$$.nextValueOrThrow.bind($iterable$jscomp$14_newIter$$);
  return $iterable$jscomp$14_newIter$$;
};
goog.iter.reduce = function $goog$iter$reduce$($iterable$$, $f$$, $val$jscomp$0$$, $opt_obj$$) {
  var $rval$$ = $val$jscomp$0$$;
  goog.iter.forEach($iterable$$, function($val$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$);
  });
  return $rval$$;
};
goog.iter.some = function $goog$iter$some$($iterable$$, $f$$, $opt_obj$$) {
  $iterable$$ = goog.iter.toIterator($iterable$$);
  try {
    for (;;) {
      if ($f$$.call($opt_obj$$, $iterable$$.nextValueOrThrow(), void 0, $iterable$$)) {
        return !0;
      }
    }
  } catch ($ex$$) {
    if ($ex$$ !== goog.iter.StopIteration) {
      throw $ex$$;
    }
  }
  return !1;
};
goog.iter.every = function $goog$iter$every$($iterable$$, $f$$, $opt_obj$$) {
  $iterable$$ = goog.iter.toIterator($iterable$$);
  try {
    for (;;) {
      if (!$f$$.call($opt_obj$$, $iterable$$.nextValueOrThrow(), void 0, $iterable$$)) {
        return !1;
      }
    }
  } catch ($ex$$) {
    if ($ex$$ !== goog.iter.StopIteration) {
      throw $ex$$;
    }
  }
  return !0;
};
goog.iter.chain = function $goog$iter$chain$($var_args$$) {
  return goog.iter.chainFromIterable(arguments);
};
goog.iter.chainFromIterable = function $goog$iter$chainFromIterable$($iter$jscomp$6_iterable$$) {
  var $iterator$$ = goog.iter.toIterator($iter$jscomp$6_iterable$$);
  $iter$jscomp$6_iterable$$ = new goog.iter.Iterator;
  var $current$$ = null;
  $iter$jscomp$6_iterable$$.nextValueOrThrow = function $$iter$jscomp$6_iterable$$$nextValueOrThrow$() {
    for (;;) {
      if (null == $current$$) {
        var $it$$ = $iterator$$.nextValueOrThrow();
        $current$$ = goog.iter.toIterator($it$$);
      }
      try {
        return $current$$.nextValueOrThrow();
      } catch ($ex$$) {
        if ($ex$$ !== goog.iter.StopIteration) {
          throw $ex$$;
        }
        $current$$ = null;
      }
    }
  };
  $iter$jscomp$6_iterable$$.next = $iter$jscomp$6_iterable$$.nextValueOrThrow.bind($iter$jscomp$6_iterable$$);
  return $iter$jscomp$6_iterable$$;
};
goog.iter.dropWhile = function $goog$iter$dropWhile$($iterable$jscomp$19_newIter$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$jscomp$19_newIter$$);
  $iterable$jscomp$19_newIter$$ = new goog.iter.Iterator;
  var $dropping$$ = !0;
  $iterable$jscomp$19_newIter$$.nextValueOrThrow = function $$iterable$jscomp$19_newIter$$$nextValueOrThrow$() {
    for (;;) {
      var $val$$ = $iterator$$.nextValueOrThrow();
      if (!$dropping$$ || !$f$$.call($opt_obj$$, $val$$, void 0, $iterator$$)) {
        return $dropping$$ = !1, $val$$;
      }
    }
  };
  $iterable$jscomp$19_newIter$$.next = $iterable$jscomp$19_newIter$$.nextValueOrThrow.bind($iterable$jscomp$19_newIter$$);
  return $iterable$jscomp$19_newIter$$;
};
goog.iter.takeWhile = function $goog$iter$takeWhile$($iter$jscomp$7_iterable$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iter$jscomp$7_iterable$$);
  $iter$jscomp$7_iterable$$ = new goog.iter.Iterator;
  $iter$jscomp$7_iterable$$.nextValueOrThrow = function $$iter$jscomp$7_iterable$$$nextValueOrThrow$() {
    var $val$$ = $iterator$$.nextValueOrThrow();
    if ($f$$.call($opt_obj$$, $val$$, void 0, $iterator$$)) {
      return $val$$;
    }
    throw goog.iter.StopIteration;
  };
  $iter$jscomp$7_iterable$$.next = $iter$jscomp$7_iterable$$.nextValueOrThrow.bind($iter$jscomp$7_iterable$$);
  return $iter$jscomp$7_iterable$$;
};
goog.iter.toArray = function $goog$iter$toArray$($iterable$$) {
  if (goog.isArrayLike($iterable$$)) {
    return module$contents$goog$array_toArray($iterable$$);
  }
  $iterable$$ = goog.iter.toIterator($iterable$$);
  var $array$$ = [];
  goog.iter.forEach($iterable$$, function($val$$) {
    $array$$.push($val$$);
  });
  return $array$$;
};
goog.iter.equals = function $goog$iter$equals$($iterable1_pairs$$, $iterable2$$, $opt_equalsFn$$) {
  $iterable1_pairs$$ = goog.iter.zipLongest({}, $iterable1_pairs$$, $iterable2$$);
  var $equalsFn$$ = $opt_equalsFn$$ || module$contents$goog$array_defaultCompareEquality;
  return goog.iter.every($iterable1_pairs$$, function($pair$$) {
    return $equalsFn$$($pair$$[0], $pair$$[1]);
  });
};
goog.iter.nextOrValue = function $goog$iter$nextOrValue$($iterable$$, $defaultValue$$) {
  try {
    return goog.iter.toIterator($iterable$$).nextValueOrThrow();
  } catch ($e$$) {
    if ($e$$ != goog.iter.StopIteration) {
      throw $e$$;
    }
    return $defaultValue$$;
  }
};
goog.iter.product = function $goog$iter$product$($var_args$$) {
  if (Array.prototype.some.call(arguments, function($arr$$) {
    return !$arr$$.length;
  }) || !arguments.length) {
    return new goog.iter.Iterator;
  }
  var $iter$$ = new goog.iter.Iterator, $arrays$$ = arguments, $indicies$$ = module$contents$goog$array_repeat(0, $arrays$$.length);
  $iter$$.nextValueOrThrow = function $$iter$$$nextValueOrThrow$() {
    if ($indicies$$) {
      for (var $retVal$$ = module$contents$goog$array_map($indicies$$, function($valueIndex$$, $arrayIndex$$) {
        return $arrays$$[$arrayIndex$$][$valueIndex$$];
      }), $i$$ = $indicies$$.length - 1; 0 <= $i$$; $i$$--) {
        goog.asserts.assert($indicies$$);
        if ($indicies$$[$i$$] < $arrays$$[$i$$].length - 1) {
          $indicies$$[$i$$]++;
          break;
        }
        if (0 == $i$$) {
          $indicies$$ = null;
          break;
        }
        $indicies$$[$i$$] = 0;
      }
      return $retVal$$;
    }
    throw goog.iter.StopIteration;
  };
  $iter$$.next = $iter$$.nextValueOrThrow.bind($iter$$);
  return $iter$$;
};
goog.iter.cycle = function $goog$iter$cycle$($iter$jscomp$9_iterable$$) {
  var $baseIterator$$ = goog.iter.toIterator($iter$jscomp$9_iterable$$), $cache$$ = [], $cacheIndex$$ = 0;
  $iter$jscomp$9_iterable$$ = new goog.iter.Iterator;
  var $useCache$$ = !1;
  $iter$jscomp$9_iterable$$.nextValueOrThrow = function $$iter$jscomp$9_iterable$$$nextValueOrThrow$() {
    var $returnElement$$ = null;
    if (!$useCache$$) {
      try {
        return $returnElement$$ = $baseIterator$$.nextValueOrThrow(), $cache$$.push($returnElement$$), $returnElement$$;
      } catch ($e$$) {
        if ($e$$ != goog.iter.StopIteration || module$contents$goog$array_isEmpty($cache$$)) {
          throw $e$$;
        }
        $useCache$$ = !0;
      }
    }
    $returnElement$$ = $cache$$[$cacheIndex$$];
    $cacheIndex$$ = ($cacheIndex$$ + 1) % $cache$$.length;
    return $returnElement$$;
  };
  $iter$jscomp$9_iterable$$.next = $iter$jscomp$9_iterable$$.nextValueOrThrow.bind($iter$jscomp$9_iterable$$);
  return $iter$jscomp$9_iterable$$;
};
goog.iter.count = function $goog$iter$count$($iter$$, $opt_step$$) {
  var $counter$$ = $iter$$ || 0, $step$$ = void 0 !== $opt_step$$ ? $opt_step$$ : 1;
  $iter$$ = new goog.iter.Iterator;
  $iter$$.nextValueOrThrow = function $$iter$$$nextValueOrThrow$() {
    var $returnValue$$ = $counter$$;
    $counter$$ += $step$$;
    return $returnValue$$;
  };
  $iter$$.next = $iter$$.nextValueOrThrow.bind($iter$$);
  return $iter$$;
};
goog.iter.repeat = function $goog$iter$repeat$($value$$) {
  var $iter$$ = new goog.iter.Iterator;
  $iter$$.nextValueOrThrow = goog.functions.constant($value$$);
  $iter$$.next = $iter$$.nextValueOrThrow.bind($iter$$);
  return $iter$$;
};
goog.iter.accumulate = function $goog$iter$accumulate$($iter$jscomp$12_iterable$$) {
  var $iterator$$ = goog.iter.toIterator($iter$jscomp$12_iterable$$), $total$$ = 0;
  $iter$jscomp$12_iterable$$ = new goog.iter.Iterator;
  $iter$jscomp$12_iterable$$.nextValueOrThrow = function $$iter$jscomp$12_iterable$$$nextValueOrThrow$() {
    return $total$$ += $iterator$$.nextValueOrThrow();
  };
  $iter$jscomp$12_iterable$$.next = $iter$jscomp$12_iterable$$.nextValueOrThrow.bind($iter$jscomp$12_iterable$$);
  return $iter$jscomp$12_iterable$$;
};
goog.iter.zip = function $goog$iter$zip$($var_args$$) {
  var $args$$ = arguments, $iter$$ = new goog.iter.Iterator;
  if (0 < $args$$.length) {
    var $iterators$$ = module$contents$goog$array_map($args$$, goog.iter.toIterator);
    $iter$$.nextValueOrThrow = function $$iter$$$nextValueOrThrow$() {
      return module$contents$goog$array_map($iterators$$, function($it$$) {
        return $it$$.nextValueOrThrow();
      });
    };
    $iter$$.next = $iter$$.nextValueOrThrow.bind($iter$$);
  }
  return $iter$$;
};
goog.iter.zipLongest = function $goog$iter$zipLongest$($fillValue$$, $var_args$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1), $iter$$ = new goog.iter.Iterator;
  if (0 < $args$$.length) {
    var $iterators$$ = module$contents$goog$array_map($args$$, goog.iter.toIterator);
    $iter$$.nextValueOrThrow = function $$iter$$$nextValueOrThrow$() {
      var $iteratorsHaveValues$$ = !1, $arr$$ = module$contents$goog$array_map($iterators$$, function($it$$) {
        try {
          var $returnValue$$ = $it$$.nextValueOrThrow();
          $iteratorsHaveValues$$ = !0;
        } catch ($ex$$) {
          if ($ex$$ !== goog.iter.StopIteration) {
            throw $ex$$;
          }
          $returnValue$$ = $fillValue$$;
        }
        return $returnValue$$;
      });
      if (!$iteratorsHaveValues$$) {
        throw goog.iter.StopIteration;
      }
      return $arr$$;
    };
    $iter$$.next = $iter$$.nextValueOrThrow.bind($iter$$);
  }
  return $iter$$;
};
goog.iter.compress = function $goog$iter$compress$($iterable$$, $selectors$$) {
  var $selectorIterator$$ = goog.iter.toIterator($selectors$$);
  return goog.iter.filter($iterable$$, function() {
    return !!$selectorIterator$$.nextValueOrThrow();
  });
};
goog.iter.GroupByIterator_ = function $goog$iter$GroupByIterator_$($iterable$$, $opt_keyFunc$$) {
  this.iterator = goog.iter.toIterator($iterable$$);
  this.keyFunc = $opt_keyFunc$$ || goog.functions.identity;
};
goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator);
goog.iter.GroupByIterator_.prototype.nextValueOrThrow = function $goog$iter$GroupByIterator_$$nextValueOrThrow$() {
  for (; this.currentKey == this.targetKey;) {
    this.currentValue = this.iterator.nextValueOrThrow(), this.currentKey = this.keyFunc(this.currentValue);
  }
  this.targetKey = this.currentKey;
  return [this.currentKey, this.groupItems_(this.targetKey)];
};
goog.iter.GroupByIterator_.prototype.next = goog.iter.GroupByIterator_.prototype.nextValueOrThrow;
goog.iter.GroupByIterator_.prototype.groupItems_ = function $goog$iter$GroupByIterator_$$groupItems_$($targetKey$$) {
  for (var $arr$$ = []; this.currentKey == $targetKey$$;) {
    $arr$$.push(this.currentValue);
    try {
      this.currentValue = this.iterator.nextValueOrThrow();
    } catch ($ex$$) {
      if ($ex$$ !== goog.iter.StopIteration) {
        throw $ex$$;
      }
      break;
    }
    this.currentKey = this.keyFunc(this.currentValue);
  }
  return $arr$$;
};
goog.iter.groupBy = function $goog$iter$groupBy$($iterable$$, $opt_keyFunc$$) {
  return new goog.iter.GroupByIterator_($iterable$$, $opt_keyFunc$$);
};
goog.iter.starMap = function $goog$iter$starMap$($iter$jscomp$15_iterable$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iter$jscomp$15_iterable$$);
  $iter$jscomp$15_iterable$$ = new goog.iter.Iterator;
  $iter$jscomp$15_iterable$$.nextValueOrThrow = function $$iter$jscomp$15_iterable$$$nextValueOrThrow$() {
    var $args$$ = goog.iter.toArray($iterator$$.nextValueOrThrow());
    return $f$$.apply($opt_obj$$, module$contents$goog$array_concat($args$$, void 0, $iterator$$));
  };
  $iter$jscomp$15_iterable$$.next = $iter$jscomp$15_iterable$$.nextValueOrThrow.bind($iter$jscomp$15_iterable$$);
  return $iter$jscomp$15_iterable$$;
};
goog.iter.tee = function $goog$iter$tee$($iterable$$, $opt_num$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$$), $buffers$$ = module$contents$goog$array_map(module$contents$goog$array_range("number" === typeof $opt_num$$ ? $opt_num$$ : 2), function() {
    return [];
  }), $addNextIteratorValueToBuffers$$ = function $$addNextIteratorValueToBuffers$$$() {
    var $val$$ = $iterator$$.nextValueOrThrow();
    module$contents$goog$array_forEach($buffers$$, function($buffer$$) {
      $buffer$$.push($val$$);
    });
  };
  return module$contents$goog$array_map($buffers$$, function($buffer$$) {
    var $iter$$ = new goog.iter.Iterator;
    $iter$$.nextValueOrThrow = function $$iter$$$nextValueOrThrow$() {
      module$contents$goog$array_isEmpty($buffer$$) && $addNextIteratorValueToBuffers$$();
      goog.asserts.assert(!module$contents$goog$array_isEmpty($buffer$$));
      return $buffer$$.shift();
    };
    $iter$$.next = $iter$$.nextValueOrThrow.bind($iter$$);
    return $iter$$;
  });
};
goog.iter.enumerate = function $goog$iter$enumerate$($iterable$$, $opt_start$$) {
  return goog.iter.zip(goog.iter.count($opt_start$$), $iterable$$);
};
goog.iter.limit = function $goog$iter$limit$($iter$jscomp$17_iterable$$, $limitSize$$) {
  goog.asserts.assert(goog.math.isInt($limitSize$$) && 0 <= $limitSize$$);
  var $iterator$$ = goog.iter.toIterator($iter$jscomp$17_iterable$$);
  $iter$jscomp$17_iterable$$ = new goog.iter.Iterator;
  var $remaining$$ = $limitSize$$;
  $iter$jscomp$17_iterable$$.nextValueOrThrow = function $$iter$jscomp$17_iterable$$$nextValueOrThrow$() {
    if (0 < $remaining$$--) {
      return $iterator$$.nextValueOrThrow();
    }
    throw goog.iter.StopIteration;
  };
  $iter$jscomp$17_iterable$$.next = $iter$jscomp$17_iterable$$.nextValueOrThrow.bind($iter$jscomp$17_iterable$$);
  return $iter$jscomp$17_iterable$$;
};
goog.iter.consume = function $goog$iter$consume$($iterable$jscomp$32_iterator$$, $count$$) {
  goog.asserts.assert(goog.math.isInt($count$$) && 0 <= $count$$);
  for ($iterable$jscomp$32_iterator$$ = goog.iter.toIterator($iterable$jscomp$32_iterator$$); 0 < $count$$--;) {
    goog.iter.nextOrValue($iterable$jscomp$32_iterator$$, null);
  }
  return $iterable$jscomp$32_iterator$$;
};
goog.iter.slice = function $goog$iter$slice$($iterable$jscomp$33_iterator$$, $start$$, $opt_end$$) {
  goog.asserts.assert(goog.math.isInt($start$$) && 0 <= $start$$);
  $iterable$jscomp$33_iterator$$ = goog.iter.consume($iterable$jscomp$33_iterator$$, $start$$);
  "number" === typeof $opt_end$$ && (goog.asserts.assert(goog.math.isInt($opt_end$$) && $opt_end$$ >= $start$$), $iterable$jscomp$33_iterator$$ = goog.iter.limit($iterable$jscomp$33_iterator$$, $opt_end$$ - $start$$));
  return $iterable$jscomp$33_iterator$$;
};
goog.iter.hasDuplicates_ = function $goog$iter$hasDuplicates_$($arr$$) {
  var $deduped$$ = [];
  module$contents$goog$array_removeDuplicates($arr$$, $deduped$$);
  return $arr$$.length != $deduped$$.length;
};
goog.iter.permutations = function $goog$iter$permutations$($elements$jscomp$1_iterable$$, $opt_length$$) {
  $elements$jscomp$1_iterable$$ = goog.iter.toArray($elements$jscomp$1_iterable$$);
  $opt_length$$ = module$contents$goog$array_repeat($elements$jscomp$1_iterable$$, "number" === typeof $opt_length$$ ? $opt_length$$ : $elements$jscomp$1_iterable$$.length);
  $opt_length$$ = goog.iter.product.apply(void 0, $opt_length$$);
  return goog.iter.filter($opt_length$$, function($arr$$) {
    return !goog.iter.hasDuplicates_($arr$$);
  });
};
goog.iter.combinations = function $goog$iter$combinations$($indexes_iterable$$, $indexIterator_iter$jscomp$18_length$$) {
  function $getIndexFromElements$$($index$$) {
    return $elements$$[$index$$];
  }
  var $elements$$ = goog.iter.toArray($indexes_iterable$$);
  $indexes_iterable$$ = goog.iter.range($elements$$.length);
  $indexIterator_iter$jscomp$18_length$$ = goog.iter.permutations($indexes_iterable$$, $indexIterator_iter$jscomp$18_length$$);
  var $sortedIndexIterator$$ = goog.iter.filter($indexIterator_iter$jscomp$18_length$$, function($arr$$) {
    return module$contents$goog$array_isSorted($arr$$);
  });
  $indexIterator_iter$jscomp$18_length$$ = new goog.iter.Iterator;
  $indexIterator_iter$jscomp$18_length$$.nextValueOrThrow = function $$indexIterator_iter$jscomp$18_length$$$nextValueOrThrow$() {
    return module$contents$goog$array_map($sortedIndexIterator$$.nextValueOrThrow(), $getIndexFromElements$$);
  };
  $indexIterator_iter$jscomp$18_length$$.next = $indexIterator_iter$jscomp$18_length$$.nextValueOrThrow.bind($indexIterator_iter$jscomp$18_length$$);
  return $indexIterator_iter$jscomp$18_length$$;
};
goog.iter.combinationsWithReplacement = function $goog$iter$combinationsWithReplacement$($indexes$jscomp$1_iterable$$, $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$) {
  function $getIndexFromElements$$($index$$) {
    return $elements$$[$index$$];
  }
  var $elements$$ = goog.iter.toArray($indexes$jscomp$1_iterable$$);
  $indexes$jscomp$1_iterable$$ = module$contents$goog$array_range($elements$$.length);
  $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$ = module$contents$goog$array_repeat($indexes$jscomp$1_iterable$$, $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$);
  $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$ = goog.iter.product.apply(void 0, $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$);
  var $sortedIndexIterator$$ = goog.iter.filter($indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$, function($arr$$) {
    return module$contents$goog$array_isSorted($arr$$);
  });
  $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$ = new goog.iter.Iterator;
  $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$.nextValueOrThrow = function $$indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$$nextValueOrThrow$() {
    return module$contents$goog$array_map($sortedIndexIterator$$.nextValueOrThrow(), $getIndexFromElements$$);
  };
  $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$.next = $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$.nextValueOrThrow.bind($indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$);
  return $indexIterator$jscomp$1_iter$jscomp$19_length$jscomp$27_sets$$;
};
goog.iter.es6 = {};
var module$contents$goog$iter$es6_ShimIterable = function $module$contents$goog$iter$es6_ShimIterable$() {
};
module$contents$goog$iter$es6_ShimIterable.prototype.__iterator__ = function $module$contents$goog$iter$es6_ShimIterable$$__iterator__$() {
};
module$contents$goog$iter$es6_ShimIterable.prototype.toGoog = function $module$contents$goog$iter$es6_ShimIterable$$toGoog$() {
};
module$contents$goog$iter$es6_ShimIterable.prototype.toEs6 = function $module$contents$goog$iter$es6_ShimIterable$$toEs6$() {
};
module$contents$goog$iter$es6_ShimIterable.of = function $module$contents$goog$iter$es6_ShimIterable$of$($iter$$) {
  if ($iter$$ instanceof module$contents$goog$iter$es6_ShimIterableImpl || $iter$$ instanceof module$contents$goog$iter$es6_ShimGoogIterator || $iter$$ instanceof module$contents$goog$iter$es6_ShimEs6Iterator) {
    return $iter$$;
  }
  if ("function" == typeof $iter$$.next) {
    return new module$contents$goog$iter$es6_ShimIterableImpl(function() {
      return module$contents$goog$iter$es6_wrapGoog($iter$$);
    });
  }
  $jscomp.initSymbol();
  $jscomp.initSymbolIterator();
  if ("function" == typeof $iter$$[Symbol.iterator]) {
    return $jscomp.initSymbol(), $jscomp.initSymbolIterator(), new module$contents$goog$iter$es6_ShimIterableImpl(function() {
      return $iter$$[Symbol.iterator]();
    });
  }
  if ("function" == typeof $iter$$.__iterator__) {
    return new module$contents$goog$iter$es6_ShimIterableImpl(function() {
      return module$contents$goog$iter$es6_wrapGoog($iter$$.__iterator__());
    });
  }
  throw Error("Not an iterator or iterable.");
};
var module$contents$goog$iter$es6_wrapGoog = function $module$contents$goog$iter$es6_wrapGoog$($iter$$) {
  if (!($iter$$ instanceof goog.iter.Iterator)) {
    return $iter$$;
  }
  var $done$$ = !1;
  return {next:function() {
    for (var $value$$; !$done$$;) {
      try {
        $value$$ = $iter$$.nextValueOrThrow();
        break;
      } catch ($err$22$$) {
        if ($err$22$$ !== goog.iter.StopIteration) {
          throw $err$22$$;
        }
        $done$$ = !0;
      }
    }
    return {value:$value$$, done:$done$$};
  }};
};
$jscomp.initSymbol();
$jscomp.initSymbolIterator();
var module$contents$goog$iter$es6_ShimIterableImpl = function $module$contents$goog$iter$es6_ShimIterableImpl$($func$$) {
  this.func_ = $func$$;
};
module$contents$goog$iter$es6_ShimIterableImpl.prototype.__iterator__ = function $module$contents$goog$iter$es6_ShimIterableImpl$$__iterator__$() {
  return new module$contents$goog$iter$es6_ShimGoogIterator(this.func_());
};
module$contents$goog$iter$es6_ShimIterableImpl.prototype.toGoog = function $module$contents$goog$iter$es6_ShimIterableImpl$$toGoog$() {
  return new module$contents$goog$iter$es6_ShimGoogIterator(this.func_());
};
module$contents$goog$iter$es6_ShimIterableImpl.prototype[Symbol.iterator] = function $module$contents$goog$iter$es6_ShimIterableImpl$$Symbol$iterator$() {
  return new module$contents$goog$iter$es6_ShimEs6Iterator(this.func_());
};
module$contents$goog$iter$es6_ShimIterableImpl.prototype.toEs6 = function $module$contents$goog$iter$es6_ShimIterableImpl$$toEs6$() {
  return new module$contents$goog$iter$es6_ShimEs6Iterator(this.func_());
};
$jscomp.initSymbol();
$jscomp.initSymbolIterator();
var module$contents$goog$iter$es6_ShimGoogIterator = function $module$contents$goog$iter$es6_ShimGoogIterator$($iter$$) {
  goog.iter.Iterator.call(this);
  this.iter_ = $iter$$;
};
$jscomp.inherits(module$contents$goog$iter$es6_ShimGoogIterator, goog.iter.Iterator);
module$contents$goog$iter$es6_ShimGoogIterator.prototype.nextValueOrThrow = function $module$contents$goog$iter$es6_ShimGoogIterator$$nextValueOrThrow$() {
  var $result$$ = this.iter_.next();
  if ($result$$.done) {
    throw goog.iter.StopIteration;
  }
  return $result$$.value;
};
module$contents$goog$iter$es6_ShimGoogIterator.prototype.next = function $module$contents$goog$iter$es6_ShimGoogIterator$$next$() {
  return module$contents$goog$iter$es6_ShimGoogIterator.prototype.nextValueOrThrow.call(this);
};
module$contents$goog$iter$es6_ShimGoogIterator.prototype.toGoog = function $module$contents$goog$iter$es6_ShimGoogIterator$$toGoog$() {
  return this;
};
module$contents$goog$iter$es6_ShimGoogIterator.prototype[Symbol.iterator] = function $module$contents$goog$iter$es6_ShimGoogIterator$$Symbol$iterator$() {
  return new module$contents$goog$iter$es6_ShimEs6Iterator(this.iter_);
};
module$contents$goog$iter$es6_ShimGoogIterator.prototype.toEs6 = function $module$contents$goog$iter$es6_ShimGoogIterator$$toEs6$() {
  return new module$contents$goog$iter$es6_ShimEs6Iterator(this.iter_);
};
var module$contents$goog$iter$es6_ShimEs6Iterator = function $module$contents$goog$iter$es6_ShimEs6Iterator$($iter$$) {
  module$contents$goog$iter$es6_ShimIterableImpl.call(this, function() {
    return $iter$$;
  });
  this.iter_ = $iter$$;
};
$jscomp.inherits(module$contents$goog$iter$es6_ShimEs6Iterator, module$contents$goog$iter$es6_ShimIterableImpl);
module$contents$goog$iter$es6_ShimEs6Iterator.prototype.next = function $module$contents$goog$iter$es6_ShimEs6Iterator$$next$() {
  return this.iter_.next();
};
goog.iter.es6.ShimIterable = module$contents$goog$iter$es6_ShimIterable;
goog.iter.es6.ShimEs6Iterator = module$contents$goog$iter$es6_ShimEs6Iterator;
goog.iter.es6.ShimGoogIterator = module$contents$goog$iter$es6_ShimGoogIterator;
goog.structs.Map = function $goog$structs$Map$($opt_map$$, $var_args$$) {
  this.map_ = {};
  this.keys_ = [];
  this.version_ = this.size = 0;
  var $argLength$$ = arguments.length;
  if (1 < $argLength$$) {
    if ($argLength$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$$ = 0; $i$$ < $argLength$$; $i$$ += 2) {
      this.set(arguments[$i$$], arguments[$i$$ + 1]);
    }
  } else {
    $opt_map$$ && this.addAll($opt_map$$);
  }
};
goog.structs.Map.prototype.getCount = function $goog$structs$Map$$getCount$() {
  return this.size;
};
goog.structs.Map.prototype.getValues = function $goog$structs$Map$$getValues$() {
  this.cleanupKeysArray_();
  for (var $rv$$ = [], $i$$ = 0; $i$$ < this.keys_.length; $i$$++) {
    $rv$$.push(this.map_[this.keys_[$i$$]]);
  }
  return $rv$$;
};
goog.structs.Map.prototype.getKeys = function $goog$structs$Map$$getKeys$() {
  this.cleanupKeysArray_();
  return this.keys_.concat();
};
goog.structs.Map.prototype.containsKey = function $goog$structs$Map$$containsKey$($key$$) {
  return this.has($key$$);
};
goog.structs.Map.prototype.has = function $goog$structs$Map$$has$($key$$) {
  return goog.structs.Map.hasKey_(this.map_, $key$$);
};
goog.structs.Map.prototype.containsValue = function $goog$structs$Map$$containsValue$($val$$) {
  for (var $i$$ = 0; $i$$ < this.keys_.length; $i$$++) {
    var $key$$ = this.keys_[$i$$];
    if (goog.structs.Map.hasKey_(this.map_, $key$$) && this.map_[$key$$] == $val$$) {
      return !0;
    }
  }
  return !1;
};
goog.structs.Map.prototype.equals = function $goog$structs$Map$$equals$($otherMap$$, $equalityFn_opt_equalityFn$$) {
  if (this === $otherMap$$) {
    return !0;
  }
  if (this.size != $otherMap$$.getCount()) {
    return !1;
  }
  $equalityFn_opt_equalityFn$$ = $equalityFn_opt_equalityFn$$ || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for (var $key$$, $i$$ = 0; $key$$ = this.keys_[$i$$]; $i$$++) {
    if (!$equalityFn_opt_equalityFn$$(this.get($key$$), $otherMap$$.get($key$$))) {
      return !1;
    }
  }
  return !0;
};
goog.structs.Map.defaultEquals = function $goog$structs$Map$defaultEquals$($a$$, $b$$) {
  return $a$$ === $b$$;
};
goog.structs.Map.prototype.isEmpty = function $goog$structs$Map$$isEmpty$() {
  return 0 == this.size;
};
goog.structs.Map.prototype.clear = function $goog$structs$Map$$clear$() {
  this.map_ = {};
  this.keys_.length = 0;
  this.setSizeInternal_(0);
  this.version_ = 0;
};
goog.structs.Map.prototype.remove = function $goog$structs$Map$$remove$($key$$) {
  return this.delete($key$$);
};
goog.structs.Map.prototype.delete = function $goog$structs$Map$$delete$($key$$) {
  return goog.structs.Map.hasKey_(this.map_, $key$$) ? (delete this.map_[$key$$], this.setSizeInternal_(this.size - 1), this.version_++, this.keys_.length > 2 * this.size && this.cleanupKeysArray_(), !0) : !1;
};
goog.structs.Map.prototype.cleanupKeysArray_ = function $goog$structs$Map$$cleanupKeysArray_$() {
  if (this.size != this.keys_.length) {
    for (var $srcIndex$$ = 0, $destIndex$$ = 0; $srcIndex$$ < this.keys_.length;) {
      var $key$$ = this.keys_[$srcIndex$$];
      goog.structs.Map.hasKey_(this.map_, $key$$) && (this.keys_[$destIndex$$++] = $key$$);
      $srcIndex$$++;
    }
    this.keys_.length = $destIndex$$;
  }
  if (this.size != this.keys_.length) {
    var $seen$$ = {};
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < this.keys_.length;) {
      $key$$ = this.keys_[$srcIndex$$], goog.structs.Map.hasKey_($seen$$, $key$$) || (this.keys_[$destIndex$$++] = $key$$, $seen$$[$key$$] = 1), $srcIndex$$++;
    }
    this.keys_.length = $destIndex$$;
  }
};
goog.structs.Map.prototype.get = function $goog$structs$Map$$get$($key$$, $opt_val$$) {
  return goog.structs.Map.hasKey_(this.map_, $key$$) ? this.map_[$key$$] : $opt_val$$;
};
goog.structs.Map.prototype.set = function $goog$structs$Map$$set$($key$$, $value$$) {
  goog.structs.Map.hasKey_(this.map_, $key$$) || (this.setSizeInternal_(this.size + 1), this.keys_.push($key$$), this.version_++);
  this.map_[$key$$] = $value$$;
};
goog.structs.Map.prototype.addAll = function $goog$structs$Map$$addAll$($map$$) {
  if ($map$$ instanceof goog.structs.Map) {
    for (var $key$jscomp$111_keys$$ = $map$$.getKeys(), $i$$ = 0; $i$$ < $key$jscomp$111_keys$$.length; $i$$++) {
      this.set($key$jscomp$111_keys$$[$i$$], $map$$.get($key$jscomp$111_keys$$[$i$$]));
    }
  } else {
    for ($key$jscomp$111_keys$$ in $map$$) {
      this.set($key$jscomp$111_keys$$, $map$$[$key$jscomp$111_keys$$]);
    }
  }
};
goog.structs.Map.prototype.forEach = function $goog$structs$Map$$forEach$($f$$, $opt_obj$$) {
  for (var $keys$$ = this.getKeys(), $i$$ = 0; $i$$ < $keys$$.length; $i$$++) {
    var $key$$ = $keys$$[$i$$], $value$$ = this.get($key$$);
    $f$$.call($opt_obj$$, $value$$, $key$$, this);
  }
};
goog.structs.Map.prototype.clone = function $goog$structs$Map$$clone$() {
  return new goog.structs.Map(this);
};
goog.structs.Map.prototype.transpose = function $goog$structs$Map$$transpose$() {
  for (var $transposed$$ = new goog.structs.Map, $i$$ = 0; $i$$ < this.keys_.length; $i$$++) {
    var $key$$ = this.keys_[$i$$];
    $transposed$$.set(this.map_[$key$$], $key$$);
  }
  return $transposed$$;
};
goog.structs.Map.prototype.toObject = function $goog$structs$Map$$toObject$() {
  this.cleanupKeysArray_();
  for (var $obj$$ = {}, $i$$ = 0; $i$$ < this.keys_.length; $i$$++) {
    var $key$$ = this.keys_[$i$$];
    $obj$$[$key$$] = this.map_[$key$$];
  }
  return $obj$$;
};
goog.structs.Map.prototype.getKeyIterator = function $goog$structs$Map$$getKeyIterator$() {
  return this.__iterator__(!0);
};
goog.structs.Map.prototype.keys = function $goog$structs$Map$$keys$() {
  return module$contents$goog$iter$es6_ShimIterable.of(this.getKeyIterator()).toEs6();
};
goog.structs.Map.prototype.getValueIterator = function $goog$structs$Map$$getValueIterator$() {
  return this.__iterator__(!1);
};
goog.structs.Map.prototype.values = function $goog$structs$Map$$values$() {
  return module$contents$goog$iter$es6_ShimIterable.of(this.getValueIterator()).toEs6();
};
goog.structs.Map.prototype.entries = function $goog$structs$Map$$entries$() {
  var $self$$ = this;
  return goog.collections.iters.map(this.keys(), function($key$$) {
    return [$key$$, $self$$.get($key$$)];
  });
};
goog.structs.Map.prototype.__iterator__ = function $goog$structs$Map$$__iterator__$($opt_keys$$) {
  this.cleanupKeysArray_();
  var $i$$ = 0, $version$$ = this.version_, $selfObj$$ = this, $newIter$$ = new goog.iter.Iterator;
  $newIter$$.nextValueOrThrow = function $$newIter$$$nextValueOrThrow$() {
    if ($version$$ != $selfObj$$.version_) {
      throw Error("The map has changed since the iterator was created");
    }
    if ($i$$ >= $selfObj$$.keys_.length) {
      throw goog.iter.StopIteration;
    }
    var $key$$ = $selfObj$$.keys_[$i$$++];
    return $opt_keys$$ ? $key$$ : $selfObj$$.map_[$key$$];
  };
  $newIter$$.next = $newIter$$.nextValueOrThrow.bind($newIter$$);
  return $newIter$$;
};
goog.structs.Map.prototype.setSizeInternal_ = function $goog$structs$Map$$setSizeInternal_$($newSize$$) {
  this.size = $newSize$$;
};
goog.structs.Map.hasKey_ = function $goog$structs$Map$hasKey_$($obj$$, $key$$) {
  return Object.prototype.hasOwnProperty.call($obj$$, $key$$);
};
goog.uri = {};
goog.uri.utils = {};
goog.uri.utils.CharCode_ = {AMPERSAND:38, EQUAL:61, HASH:35, QUESTION:63};
goog.uri.utils.buildFromEncodedParts = function $goog$uri$utils$buildFromEncodedParts$($opt_scheme$$, $opt_userInfo$$, $opt_domain$$, $opt_port$$, $opt_path$$, $opt_queryData$$, $opt_fragment$$) {
  var $out$$ = "";
  $opt_scheme$$ && ($out$$ += $opt_scheme$$ + ":");
  $opt_domain$$ && ($out$$ += "//", $opt_userInfo$$ && ($out$$ += $opt_userInfo$$ + "@"), $out$$ += $opt_domain$$, $opt_port$$ && ($out$$ += ":" + $opt_port$$));
  $opt_path$$ && ($out$$ += $opt_path$$);
  $opt_queryData$$ && ($out$$ += "?" + $opt_queryData$$);
  $opt_fragment$$ && ($out$$ += "#" + $opt_fragment$$);
  return $out$$;
};
goog.uri.utils.splitRe_ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
goog.uri.utils.ComponentIndex = {SCHEME:1, USER_INFO:2, DOMAIN:3, PORT:4, PATH:5, QUERY_DATA:6, FRAGMENT:7};
goog.uri.utils.urlPackageSupportLoggingHandler_ = null;
goog.uri.utils.setUrlPackageSupportLoggingHandler = function $goog$uri$utils$setUrlPackageSupportLoggingHandler$($handler$$) {
  goog.uri.utils.urlPackageSupportLoggingHandler_ = $handler$$;
};
goog.uri.utils.split = function $goog$uri$utils$split$($uri$$) {
  var $result$$ = $uri$$.match(goog.uri.utils.splitRe_);
  goog.uri.utils.urlPackageSupportLoggingHandler_ && 0 <= ["http", "https", "ws", "wss", "ftp"].indexOf($result$$[goog.uri.utils.ComponentIndex.SCHEME]) && goog.uri.utils.urlPackageSupportLoggingHandler_($uri$$);
  return $result$$;
};
goog.uri.utils.decodeIfPossible_ = function $goog$uri$utils$decodeIfPossible_$($uri$$, $opt_preserveReserved$$) {
  return $uri$$ ? $opt_preserveReserved$$ ? decodeURI($uri$$) : decodeURIComponent($uri$$) : $uri$$;
};
goog.uri.utils.getComponentByIndex_ = function $goog$uri$utils$getComponentByIndex_$($componentIndex$$, $uri$$) {
  return goog.uri.utils.split($uri$$)[$componentIndex$$] || null;
};
goog.uri.utils.getScheme = function $goog$uri$utils$getScheme$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, $uri$$);
};
goog.uri.utils.getEffectiveScheme = function $goog$uri$utils$getEffectiveScheme$($protocol$jscomp$1_scheme$jscomp$3_uri$$) {
  $protocol$jscomp$1_scheme$jscomp$3_uri$$ = goog.uri.utils.getScheme($protocol$jscomp$1_scheme$jscomp$3_uri$$);
  !$protocol$jscomp$1_scheme$jscomp$3_uri$$ && goog.global.self && goog.global.self.location && ($protocol$jscomp$1_scheme$jscomp$3_uri$$ = goog.global.self.location.protocol, $protocol$jscomp$1_scheme$jscomp$3_uri$$ = $protocol$jscomp$1_scheme$jscomp$3_uri$$.substr(0, $protocol$jscomp$1_scheme$jscomp$3_uri$$.length - 1));
  return $protocol$jscomp$1_scheme$jscomp$3_uri$$ ? $protocol$jscomp$1_scheme$jscomp$3_uri$$.toLowerCase() : "";
};
goog.uri.utils.getUserInfoEncoded = function $goog$uri$utils$getUserInfoEncoded$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, $uri$$);
};
goog.uri.utils.getUserInfo = function $goog$uri$utils$getUserInfo$($uri$$) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded($uri$$));
};
goog.uri.utils.getDomainEncoded = function $goog$uri$utils$getDomainEncoded$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, $uri$$);
};
goog.uri.utils.getDomain = function $goog$uri$utils$getDomain$($uri$$) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded($uri$$), !0);
};
goog.uri.utils.getPort = function $goog$uri$utils$getPort$($uri$$) {
  return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, $uri$$)) || null;
};
goog.uri.utils.getPathEncoded = function $goog$uri$utils$getPathEncoded$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, $uri$$);
};
goog.uri.utils.getPath = function $goog$uri$utils$getPath$($uri$$) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded($uri$$), !0);
};
goog.uri.utils.getQueryData = function $goog$uri$utils$getQueryData$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, $uri$$);
};
goog.uri.utils.getFragmentEncoded = function $goog$uri$utils$getFragmentEncoded$($uri$$) {
  var $hashIndex$$ = $uri$$.indexOf("#");
  return 0 > $hashIndex$$ ? null : $uri$$.substr($hashIndex$$ + 1);
};
goog.uri.utils.setFragmentEncoded = function $goog$uri$utils$setFragmentEncoded$($uri$$, $fragment$$) {
  return goog.uri.utils.removeFragment($uri$$) + ($fragment$$ ? "#" + $fragment$$ : "");
};
goog.uri.utils.getFragment = function $goog$uri$utils$getFragment$($uri$$) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded($uri$$));
};
goog.uri.utils.getHost = function $goog$uri$utils$getHost$($pieces_uri$$) {
  $pieces_uri$$ = goog.uri.utils.split($pieces_uri$$);
  return goog.uri.utils.buildFromEncodedParts($pieces_uri$$[goog.uri.utils.ComponentIndex.SCHEME], $pieces_uri$$[goog.uri.utils.ComponentIndex.USER_INFO], $pieces_uri$$[goog.uri.utils.ComponentIndex.DOMAIN], $pieces_uri$$[goog.uri.utils.ComponentIndex.PORT]);
};
goog.uri.utils.getOrigin = function $goog$uri$utils$getOrigin$($pieces$jscomp$1_uri$$) {
  $pieces$jscomp$1_uri$$ = goog.uri.utils.split($pieces$jscomp$1_uri$$);
  return goog.uri.utils.buildFromEncodedParts($pieces$jscomp$1_uri$$[goog.uri.utils.ComponentIndex.SCHEME], null, $pieces$jscomp$1_uri$$[goog.uri.utils.ComponentIndex.DOMAIN], $pieces$jscomp$1_uri$$[goog.uri.utils.ComponentIndex.PORT]);
};
goog.uri.utils.getPathAndAfter = function $goog$uri$utils$getPathAndAfter$($pieces$jscomp$2_uri$$) {
  $pieces$jscomp$2_uri$$ = goog.uri.utils.split($pieces$jscomp$2_uri$$);
  return goog.uri.utils.buildFromEncodedParts(null, null, null, null, $pieces$jscomp$2_uri$$[goog.uri.utils.ComponentIndex.PATH], $pieces$jscomp$2_uri$$[goog.uri.utils.ComponentIndex.QUERY_DATA], $pieces$jscomp$2_uri$$[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.removeFragment = function $goog$uri$utils$removeFragment$($uri$$) {
  var $hashIndex$$ = $uri$$.indexOf("#");
  return 0 > $hashIndex$$ ? $uri$$ : $uri$$.substr(0, $hashIndex$$);
};
goog.uri.utils.haveSameDomain = function $goog$uri$utils$haveSameDomain$($pieces1_uri1$$, $pieces2_uri2$$) {
  $pieces1_uri1$$ = goog.uri.utils.split($pieces1_uri1$$);
  $pieces2_uri2$$ = goog.uri.utils.split($pieces2_uri2$$);
  return $pieces1_uri1$$[goog.uri.utils.ComponentIndex.DOMAIN] == $pieces2_uri2$$[goog.uri.utils.ComponentIndex.DOMAIN] && $pieces1_uri1$$[goog.uri.utils.ComponentIndex.SCHEME] == $pieces2_uri2$$[goog.uri.utils.ComponentIndex.SCHEME] && $pieces1_uri1$$[goog.uri.utils.ComponentIndex.PORT] == $pieces2_uri2$$[goog.uri.utils.ComponentIndex.PORT];
};
goog.uri.utils.assertNoFragmentsOrQueries_ = function $goog$uri$utils$assertNoFragmentsOrQueries_$($uri$$) {
  goog.asserts.assert(0 > $uri$$.indexOf("#") && 0 > $uri$$.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", $uri$$);
};
goog.uri.utils.parseQueryData = function $goog$uri$utils$parseQueryData$($encodedQuery_pairs$$, $callback$$) {
  if ($encodedQuery_pairs$$) {
    $encodedQuery_pairs$$ = $encodedQuery_pairs$$.split("&");
    for (var $i$$ = 0; $i$$ < $encodedQuery_pairs$$.length; $i$$++) {
      var $indexOfEquals$$ = $encodedQuery_pairs$$[$i$$].indexOf("="), $value$$ = null;
      if (0 <= $indexOfEquals$$) {
        var $name$$ = $encodedQuery_pairs$$[$i$$].substring(0, $indexOfEquals$$);
        $value$$ = $encodedQuery_pairs$$[$i$$].substring($indexOfEquals$$ + 1);
      } else {
        $name$$ = $encodedQuery_pairs$$[$i$$];
      }
      $callback$$($name$$, $value$$ ? goog.string.urlDecode($value$$) : "");
    }
  }
};
goog.uri.utils.splitQueryData_ = function $goog$uri$utils$splitQueryData_$($uri$$) {
  var $hashIndex$$ = $uri$$.indexOf("#");
  0 > $hashIndex$$ && ($hashIndex$$ = $uri$$.length);
  var $questionIndex$$ = $uri$$.indexOf("?");
  if (0 > $questionIndex$$ || $questionIndex$$ > $hashIndex$$) {
    $questionIndex$$ = $hashIndex$$;
    var $queryData$$ = "";
  } else {
    $queryData$$ = $uri$$.substring($questionIndex$$ + 1, $hashIndex$$);
  }
  return [$uri$$.substr(0, $questionIndex$$), $queryData$$, $uri$$.substr($hashIndex$$)];
};
goog.uri.utils.joinQueryData_ = function $goog$uri$utils$joinQueryData_$($parts$$) {
  return $parts$$[0] + ($parts$$[1] ? "?" + $parts$$[1] : "") + $parts$$[2];
};
goog.uri.utils.appendQueryData_ = function $goog$uri$utils$appendQueryData_$($queryData$$, $newData$$) {
  return $newData$$ ? $queryData$$ ? $queryData$$ + "&" + $newData$$ : $newData$$ : $queryData$$;
};
goog.uri.utils.appendQueryDataToUri_ = function $goog$uri$utils$appendQueryDataToUri_$($parts$jscomp$9_uri$$, $queryData$$) {
  if (!$queryData$$) {
    return $parts$jscomp$9_uri$$;
  }
  $parts$jscomp$9_uri$$ = goog.uri.utils.splitQueryData_($parts$jscomp$9_uri$$);
  $parts$jscomp$9_uri$$[1] = goog.uri.utils.appendQueryData_($parts$jscomp$9_uri$$[1], $queryData$$);
  return goog.uri.utils.joinQueryData_($parts$jscomp$9_uri$$);
};
goog.uri.utils.appendKeyValuePairs_ = function $goog$uri$utils$appendKeyValuePairs_$($key$$, $value$$, $pairs$$) {
  goog.asserts.assertString($key$$);
  if (Array.isArray($value$$)) {
    goog.asserts.assertArray($value$$);
    for (var $j$$ = 0; $j$$ < $value$$.length; $j$$++) {
      goog.uri.utils.appendKeyValuePairs_($key$$, String($value$$[$j$$]), $pairs$$);
    }
  } else {
    null != $value$$ && $pairs$$.push($key$$ + ("" === $value$$ ? "" : "=" + goog.string.urlEncode($value$$)));
  }
};
goog.uri.utils.buildQueryData = function $goog$uri$utils$buildQueryData$($keysAndValues$$, $i$$) {
  goog.asserts.assert(0 == Math.max($keysAndValues$$.length - ($i$$ || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
  var $params$$ = [];
  for ($i$$ = $i$$ || 0; $i$$ < $keysAndValues$$.length; $i$$ += 2) {
    goog.uri.utils.appendKeyValuePairs_($keysAndValues$$[$i$$], $keysAndValues$$[$i$$ + 1], $params$$);
  }
  return $params$$.join("&");
};
goog.uri.utils.buildQueryDataFromMap = function $goog$uri$utils$buildQueryDataFromMap$($map$$) {
  var $params$$ = [], $key$$;
  for ($key$$ in $map$$) {
    goog.uri.utils.appendKeyValuePairs_($key$$, $map$$[$key$$], $params$$);
  }
  return $params$$.join("&");
};
goog.uri.utils.appendParams = function $goog$uri$utils$appendParams$($uri$$, $var_args$$) {
  var $queryData$$ = 2 == arguments.length ? goog.uri.utils.buildQueryData(arguments[1], 0) : goog.uri.utils.buildQueryData(arguments, 1);
  return goog.uri.utils.appendQueryDataToUri_($uri$$, $queryData$$);
};
goog.uri.utils.appendParamsFromMap = function $goog$uri$utils$appendParamsFromMap$($uri$$, $map$jscomp$8_queryData$$) {
  $map$jscomp$8_queryData$$ = goog.uri.utils.buildQueryDataFromMap($map$jscomp$8_queryData$$);
  return goog.uri.utils.appendQueryDataToUri_($uri$$, $map$jscomp$8_queryData$$);
};
goog.uri.utils.appendParam = function $goog$uri$utils$appendParam$($uri$$, $key$$, $opt_value$jscomp$12_value$$) {
  $opt_value$jscomp$12_value$$ = null != $opt_value$jscomp$12_value$$ ? "=" + goog.string.urlEncode($opt_value$jscomp$12_value$$) : "";
  return goog.uri.utils.appendQueryDataToUri_($uri$$, $key$$ + $opt_value$jscomp$12_value$$);
};
goog.uri.utils.findParam_ = function $goog$uri$utils$findParam_$($uri$$, $index$jscomp$90_startIndex$$, $keyEncoded$$, $hashOrEndIndex$$) {
  for (var $keyLength$$ = $keyEncoded$$.length; 0 <= ($index$jscomp$90_startIndex$$ = $uri$$.indexOf($keyEncoded$$, $index$jscomp$90_startIndex$$)) && $index$jscomp$90_startIndex$$ < $hashOrEndIndex$$;) {
    var $followingChar_precedingChar$$ = $uri$$.charCodeAt($index$jscomp$90_startIndex$$ - 1);
    if ($followingChar_precedingChar$$ == goog.uri.utils.CharCode_.AMPERSAND || $followingChar_precedingChar$$ == goog.uri.utils.CharCode_.QUESTION) {
      if ($followingChar_precedingChar$$ = $uri$$.charCodeAt($index$jscomp$90_startIndex$$ + $keyLength$$), !$followingChar_precedingChar$$ || $followingChar_precedingChar$$ == goog.uri.utils.CharCode_.EQUAL || $followingChar_precedingChar$$ == goog.uri.utils.CharCode_.AMPERSAND || $followingChar_precedingChar$$ == goog.uri.utils.CharCode_.HASH) {
        return $index$jscomp$90_startIndex$$;
      }
    }
    $index$jscomp$90_startIndex$$ += $keyLength$$ + 1;
  }
  return -1;
};
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function $goog$uri$utils$hasParam$($uri$$, $keyEncoded$$) {
  return 0 <= goog.uri.utils.findParam_($uri$$, 0, $keyEncoded$$, $uri$$.search(goog.uri.utils.hashOrEndRe_));
};
goog.uri.utils.getParamValue = function $goog$uri$utils$getParamValue$($uri$$, $keyEncoded$$) {
  var $hashOrEndIndex$$ = $uri$$.search(goog.uri.utils.hashOrEndRe_), $foundIndex$$ = goog.uri.utils.findParam_($uri$$, 0, $keyEncoded$$, $hashOrEndIndex$$);
  if (0 > $foundIndex$$) {
    return null;
  }
  var $endPosition$$ = $uri$$.indexOf("&", $foundIndex$$);
  if (0 > $endPosition$$ || $endPosition$$ > $hashOrEndIndex$$) {
    $endPosition$$ = $hashOrEndIndex$$;
  }
  $foundIndex$$ += $keyEncoded$$.length + 1;
  return goog.string.urlDecode($uri$$.substr($foundIndex$$, $endPosition$$ - $foundIndex$$));
};
goog.uri.utils.getParamValues = function $goog$uri$utils$getParamValues$($uri$$, $keyEncoded$$) {
  for (var $hashOrEndIndex$$ = $uri$$.search(goog.uri.utils.hashOrEndRe_), $position$$ = 0, $foundIndex$$, $result$$ = []; 0 <= ($foundIndex$$ = goog.uri.utils.findParam_($uri$$, $position$$, $keyEncoded$$, $hashOrEndIndex$$));) {
    $position$$ = $uri$$.indexOf("&", $foundIndex$$);
    if (0 > $position$$ || $position$$ > $hashOrEndIndex$$) {
      $position$$ = $hashOrEndIndex$$;
    }
    $foundIndex$$ += $keyEncoded$$.length + 1;
    $result$$.push(goog.string.urlDecode($uri$$.substr($foundIndex$$, $position$$ - $foundIndex$$)));
  }
  return $result$$;
};
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function $goog$uri$utils$removeParam$($uri$$, $keyEncoded$$) {
  for (var $hashOrEndIndex$$ = $uri$$.search(goog.uri.utils.hashOrEndRe_), $position$$ = 0, $foundIndex$$, $buffer$$ = []; 0 <= ($foundIndex$$ = goog.uri.utils.findParam_($uri$$, $position$$, $keyEncoded$$, $hashOrEndIndex$$));) {
    $buffer$$.push($uri$$.substring($position$$, $foundIndex$$)), $position$$ = Math.min($uri$$.indexOf("&", $foundIndex$$) + 1 || $hashOrEndIndex$$, $hashOrEndIndex$$);
  }
  $buffer$$.push($uri$$.substr($position$$));
  return $buffer$$.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1");
};
goog.uri.utils.setParam = function $goog$uri$utils$setParam$($uri$$, $keyEncoded$$, $value$$) {
  return goog.uri.utils.appendParam(goog.uri.utils.removeParam($uri$$, $keyEncoded$$), $keyEncoded$$, $value$$);
};
goog.uri.utils.setParamsFromMap = function $goog$uri$utils$setParamsFromMap$($parts$jscomp$10_uri$$, $params$$) {
  $parts$jscomp$10_uri$$ = goog.uri.utils.splitQueryData_($parts$jscomp$10_uri$$);
  var $queryData$$ = $parts$jscomp$10_uri$$[1], $buffer$$ = [];
  $queryData$$ && $queryData$$.split("&").forEach(function($pair$$) {
    var $indexOfEquals$jscomp$1_name$$ = $pair$$.indexOf("=");
    $indexOfEquals$jscomp$1_name$$ = 0 <= $indexOfEquals$jscomp$1_name$$ ? $pair$$.substr(0, $indexOfEquals$jscomp$1_name$$) : $pair$$;
    $params$$.hasOwnProperty($indexOfEquals$jscomp$1_name$$) || $buffer$$.push($pair$$);
  });
  $parts$jscomp$10_uri$$[1] = goog.uri.utils.appendQueryData_($buffer$$.join("&"), goog.uri.utils.buildQueryDataFromMap($params$$));
  return goog.uri.utils.joinQueryData_($parts$jscomp$10_uri$$);
};
goog.uri.utils.appendPath = function $goog$uri$utils$appendPath$($baseUri$$, $path$$) {
  goog.uri.utils.assertNoFragmentsOrQueries_($baseUri$$);
  goog.string.endsWith($baseUri$$, "/") && ($baseUri$$ = $baseUri$$.substr(0, $baseUri$$.length - 1));
  goog.string.startsWith($path$$, "/") && ($path$$ = $path$$.substr(1));
  return "" + $baseUri$$ + "/" + $path$$;
};
goog.uri.utils.setPath = function $goog$uri$utils$setPath$($parts$jscomp$11_uri$$, $path$$) {
  goog.string.startsWith($path$$, "/") || ($path$$ = "/" + $path$$);
  $parts$jscomp$11_uri$$ = goog.uri.utils.split($parts$jscomp$11_uri$$);
  return goog.uri.utils.buildFromEncodedParts($parts$jscomp$11_uri$$[goog.uri.utils.ComponentIndex.SCHEME], $parts$jscomp$11_uri$$[goog.uri.utils.ComponentIndex.USER_INFO], $parts$jscomp$11_uri$$[goog.uri.utils.ComponentIndex.DOMAIN], $parts$jscomp$11_uri$$[goog.uri.utils.ComponentIndex.PORT], $path$$, $parts$jscomp$11_uri$$[goog.uri.utils.ComponentIndex.QUERY_DATA], $parts$jscomp$11_uri$$[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.StandardQueryParam = {RANDOM:"zx"};
goog.uri.utils.makeUnique = function $goog$uri$utils$makeUnique$($uri$$) {
  return goog.uri.utils.setParam($uri$$, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString());
};
goog.net.XhrIo = function $goog$net$XhrIo$($opt_xmlHttpFactory$$) {
  goog.events.EventTarget.call(this);
  this.headers = new goog.structs.Map;
  this.xmlHttpFactory_ = $opt_xmlHttpFactory$$ || null;
  this.active_ = !1;
  this.xhrOptions_ = this.xhr_ = null;
  this.lastMethod_ = this.lastUri_ = "";
  this.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
  this.lastError_ = "";
  this.inAbort_ = this.inOpen_ = this.inSend_ = this.errorDispatched_ = !1;
  this.timeoutInterval_ = 0;
  this.timeoutId_ = null;
  this.responseType_ = goog.net.XhrIo.ResponseType.DEFAULT;
  this.useXhr2Timeout_ = this.progressEventsEnabled_ = this.withCredentials_ = !1;
  this.trustToken_ = null;
};
goog.inherits(goog.net.XhrIo, goog.events.EventTarget);
goog.net.XhrIo.ResponseType = {DEFAULT:"", TEXT:"text", DOCUMENT:"document", BLOB:"blob", ARRAY_BUFFER:"arraybuffer"};
goog.net.XhrIo.prototype.logger_ = goog.log.getLogger("goog.net.XhrIo");
goog.net.XhrIo.CONTENT_TYPE_HEADER = "Content-Type";
goog.net.XhrIo.CONTENT_TRANSFER_ENCODING = "Content-Transfer-Encoding";
goog.net.XhrIo.HTTP_SCHEME_PATTERN = /^https?$/i;
goog.net.XhrIo.METHODS_WITH_FORM_DATA = ["POST", "PUT"];
goog.net.XhrIo.FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=utf-8";
goog.net.XhrIo.XHR2_TIMEOUT_ = "timeout";
goog.net.XhrIo.XHR2_ON_TIMEOUT_ = "ontimeout";
goog.net.XhrIo.sendInstances_ = [];
goog.net.XhrIo.send = function $goog$net$XhrIo$send$($url$$, $opt_callback$$, $opt_method$$, $opt_content$$, $opt_headers$$, $opt_timeoutInterval$$, $opt_withCredentials$$) {
  var $x$$ = new goog.net.XhrIo;
  goog.net.XhrIo.sendInstances_.push($x$$);
  $opt_callback$$ && $x$$.listen(goog.net.EventType.COMPLETE, $opt_callback$$);
  $x$$.listenOnce(goog.net.EventType.READY, $x$$.cleanupSend_);
  $opt_timeoutInterval$$ && $x$$.setTimeoutInterval($opt_timeoutInterval$$);
  $opt_withCredentials$$ && $x$$.setWithCredentials($opt_withCredentials$$);
  $x$$.send($url$$, $opt_method$$, $opt_content$$, $opt_headers$$);
  return $x$$;
};
goog.net.XhrIo.cleanup = function $goog$net$XhrIo$cleanup$() {
  for (var $instances$$ = goog.net.XhrIo.sendInstances_; $instances$$.length;) {
    $instances$$.pop().dispose();
  }
};
goog.net.XhrIo.protectEntryPoints = function $goog$net$XhrIo$protectEntryPoints$($errorHandler$$) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = $errorHandler$$.protectEntryPoint(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_);
};
goog.net.XhrIo.prototype.cleanupSend_ = function $goog$net$XhrIo$$cleanupSend_$() {
  this.dispose();
  module$contents$goog$array_remove(goog.net.XhrIo.sendInstances_, this);
};
goog.net.XhrIo.prototype.getTimeoutInterval = function $goog$net$XhrIo$$getTimeoutInterval$() {
  return this.timeoutInterval_;
};
goog.net.XhrIo.prototype.setTimeoutInterval = function $goog$net$XhrIo$$setTimeoutInterval$($ms$$) {
  this.timeoutInterval_ = Math.max(0, $ms$$);
};
goog.net.XhrIo.prototype.setResponseType = function $goog$net$XhrIo$$setResponseType$($type$$) {
  this.responseType_ = $type$$;
};
goog.net.XhrIo.prototype.getResponseType = function $goog$net$XhrIo$$getResponseType$() {
  return this.responseType_;
};
goog.net.XhrIo.prototype.setWithCredentials = function $goog$net$XhrIo$$setWithCredentials$($withCredentials$$) {
  this.withCredentials_ = $withCredentials$$;
};
goog.net.XhrIo.prototype.getWithCredentials = function $goog$net$XhrIo$$getWithCredentials$() {
  return this.withCredentials_;
};
goog.net.XhrIo.prototype.setProgressEventsEnabled = function $goog$net$XhrIo$$setProgressEventsEnabled$($enabled$$) {
  this.progressEventsEnabled_ = $enabled$$;
};
goog.net.XhrIo.prototype.getProgressEventsEnabled = function $goog$net$XhrIo$$getProgressEventsEnabled$() {
  return this.progressEventsEnabled_;
};
goog.net.XhrIo.prototype.setTrustToken = function $goog$net$XhrIo$$setTrustToken$($trustToken$$) {
  this.trustToken_ = $trustToken$$;
};
goog.net.XhrIo.prototype.send = function $goog$net$XhrIo$$send$($content$jscomp$12_url$$, $method$jscomp$8_opt_method$$, $contentIsFormData_opt_content$$, $contentTypeKey_opt_headers$$) {
  if (this.xhr_) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.lastUri_ + "; newUri=" + $content$jscomp$12_url$$);
  }
  $method$jscomp$8_opt_method$$ = $method$jscomp$8_opt_method$$ ? $method$jscomp$8_opt_method$$.toUpperCase() : "GET";
  this.lastUri_ = $content$jscomp$12_url$$;
  this.lastError_ = "";
  this.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
  this.lastMethod_ = $method$jscomp$8_opt_method$$;
  this.errorDispatched_ = !1;
  this.active_ = !0;
  this.xhr_ = this.createXhr();
  this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() : goog.net.XmlHttp.getOptions();
  this.xhr_.onreadystatechange = goog.bind(this.onReadyStateChange_, this);
  this.getProgressEventsEnabled() && "onprogress" in this.xhr_ && (this.xhr_.onprogress = goog.bind(function($e$$) {
    this.onProgressHandler_($e$$, !0);
  }, this), this.xhr_.upload && (this.xhr_.upload.onprogress = goog.bind(this.onProgressHandler_, this)));
  try {
    goog.log.fine(this.logger_, this.formatMsg_("Opening Xhr")), this.inOpen_ = !0, this.xhr_.open($method$jscomp$8_opt_method$$, String($content$jscomp$12_url$$), !0), this.inOpen_ = !1;
  } catch ($err$23$$) {
    goog.log.fine(this.logger_, this.formatMsg_("Error opening Xhr: " + $err$23$$.message));
    this.error_(goog.net.ErrorCode.EXCEPTION, $err$23$$);
    return;
  }
  $content$jscomp$12_url$$ = $contentIsFormData_opt_content$$ || "";
  var $headers$$ = this.headers.clone();
  $contentTypeKey_opt_headers$$ && goog.structs.forEach($contentTypeKey_opt_headers$$, function($value$$, $key$$) {
    $headers$$.set($key$$, $value$$);
  });
  $contentTypeKey_opt_headers$$ = $headers$$.getKeys().find(function($header$$) {
    return goog.string.caseInsensitiveEquals(goog.net.XhrIo.CONTENT_TYPE_HEADER, $header$$);
  });
  $contentIsFormData_opt_content$$ = goog.global.FormData && $content$jscomp$12_url$$ instanceof goog.global.FormData;
  !module$contents$goog$array_contains(goog.net.XhrIo.METHODS_WITH_FORM_DATA, $method$jscomp$8_opt_method$$) || $contentTypeKey_opt_headers$$ || $contentIsFormData_opt_content$$ || $headers$$.set(goog.net.XhrIo.CONTENT_TYPE_HEADER, goog.net.XhrIo.FORM_CONTENT_TYPE);
  $headers$$.forEach(function($value$$, $key$$) {
    this.xhr_.setRequestHeader($key$$, $value$$);
  }, this);
  this.responseType_ && (this.xhr_.responseType = this.responseType_);
  "withCredentials" in this.xhr_ && this.xhr_.withCredentials !== this.withCredentials_ && (this.xhr_.withCredentials = this.withCredentials_);
  if ("setTrustToken" in this.xhr_ && this.trustToken_) {
    try {
      this.xhr_.setTrustToken(this.trustToken_);
    } catch ($err$24$$) {
      goog.log.fine(this.logger_, this.formatMsg_("Error SetTrustToken: " + $err$24$$.message));
    }
  }
  try {
    this.cleanUpTimeoutTimer_(), 0 < this.timeoutInterval_ && (this.useXhr2Timeout_ = goog.net.XhrIo.shouldUseXhr2Timeout_(this.xhr_), goog.log.fine(this.logger_, this.formatMsg_("Will abort after " + this.timeoutInterval_ + "ms if incomplete, xhr2 " + this.useXhr2Timeout_)), this.useXhr2Timeout_ ? (this.xhr_[goog.net.XhrIo.XHR2_TIMEOUT_] = this.timeoutInterval_, this.xhr_[goog.net.XhrIo.XHR2_ON_TIMEOUT_] = goog.bind(this.timeout_, this)) : this.timeoutId_ = goog.Timer.callOnce(this.timeout_, this.timeoutInterval_, 
    this)), goog.log.fine(this.logger_, this.formatMsg_("Sending request")), this.inSend_ = !0, this.xhr_.send($content$jscomp$12_url$$), this.inSend_ = !1;
  } catch ($err$25$$) {
    goog.log.fine(this.logger_, this.formatMsg_("Send error: " + $err$25$$.message)), this.error_(goog.net.ErrorCode.EXCEPTION, $err$25$$);
  }
};
goog.net.XhrIo.shouldUseXhr2Timeout_ = function $goog$net$XhrIo$shouldUseXhr2Timeout_$($xhr$$) {
  return goog.userAgent.IE && goog.userAgent.isVersionOrHigher(9) && "number" === typeof $xhr$$[goog.net.XhrIo.XHR2_TIMEOUT_] && void 0 !== $xhr$$[goog.net.XhrIo.XHR2_ON_TIMEOUT_];
};
goog.net.XhrIo.prototype.createXhr = function $goog$net$XhrIo$$createXhr$() {
  return this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : goog.net.XmlHttp();
};
goog.net.XhrIo.prototype.timeout_ = function $goog$net$XhrIo$$timeout_$() {
  "undefined" != typeof goog && this.xhr_ && (this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting", this.lastErrorCode_ = goog.net.ErrorCode.TIMEOUT, goog.log.fine(this.logger_, this.formatMsg_(this.lastError_)), this.dispatchEvent(goog.net.EventType.TIMEOUT), this.abort(goog.net.ErrorCode.TIMEOUT));
};
goog.net.XhrIo.prototype.error_ = function $goog$net$XhrIo$$error_$($errorCode$$, $err$$) {
  this.active_ = !1;
  this.xhr_ && (this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1);
  this.lastError_ = $err$$;
  this.lastErrorCode_ = $errorCode$$;
  this.dispatchErrors_();
  this.cleanUpXhr_();
};
goog.net.XhrIo.prototype.dispatchErrors_ = function $goog$net$XhrIo$$dispatchErrors_$() {
  this.errorDispatched_ || (this.errorDispatched_ = !0, this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.ERROR));
};
goog.net.XhrIo.prototype.abort = function $goog$net$XhrIo$$abort$($opt_failureCode$$) {
  this.xhr_ && this.active_ && (goog.log.fine(this.logger_, this.formatMsg_("Aborting")), this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1, this.lastErrorCode_ = $opt_failureCode$$ || goog.net.ErrorCode.ABORT, this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.ABORT), this.cleanUpXhr_());
};
goog.net.XhrIo.prototype.disposeInternal = function $goog$net$XhrIo$$disposeInternal$() {
  this.xhr_ && (this.active_ && (this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1), this.cleanUpXhr_(!0));
  goog.net.XhrIo.superClass_.disposeInternal.call(this);
};
goog.net.XhrIo.prototype.onReadyStateChange_ = function $goog$net$XhrIo$$onReadyStateChange_$() {
  if (!this.isDisposed()) {
    if (this.inOpen_ || this.inSend_ || this.inAbort_) {
      this.onReadyStateChangeHelper_();
    } else {
      this.onReadyStateChangeEntryPoint_();
    }
  }
};
goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = function $goog$net$XhrIo$$onReadyStateChangeEntryPoint_$() {
  this.onReadyStateChangeHelper_();
};
goog.net.XhrIo.prototype.onReadyStateChangeHelper_ = function $goog$net$XhrIo$$onReadyStateChangeHelper_$() {
  if (this.active_ && "undefined" != typeof goog) {
    if (this.xhrOptions_[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE && 2 == this.getStatus()) {
      goog.log.fine(this.logger_, this.formatMsg_("Local request error detected and ignored"));
    } else {
      if (this.inSend_ && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE) {
        goog.Timer.callOnce(this.onReadyStateChange_, 0, this);
      } else {
        if (this.dispatchEvent(goog.net.EventType.READY_STATE_CHANGE), this.isComplete()) {
          goog.log.fine(this.logger_, this.formatMsg_("Request complete"));
          this.active_ = !1;
          try {
            this.isSuccess() ? (this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.SUCCESS)) : (this.lastErrorCode_ = goog.net.ErrorCode.HTTP_ERROR, this.lastError_ = this.getStatusText() + " [" + this.getStatus() + "]", this.dispatchErrors_());
          } finally {
            this.cleanUpXhr_();
          }
        }
      }
    }
  }
};
goog.net.XhrIo.prototype.onProgressHandler_ = function $goog$net$XhrIo$$onProgressHandler_$($e$$, $opt_isDownload$$) {
  goog.asserts.assert($e$$.type === goog.net.EventType.PROGRESS, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
  this.dispatchEvent(goog.net.XhrIo.buildProgressEvent_($e$$, goog.net.EventType.PROGRESS));
  this.dispatchEvent(goog.net.XhrIo.buildProgressEvent_($e$$, $opt_isDownload$$ ? goog.net.EventType.DOWNLOAD_PROGRESS : goog.net.EventType.UPLOAD_PROGRESS));
};
goog.net.XhrIo.buildProgressEvent_ = function $goog$net$XhrIo$buildProgressEvent_$($e$$, $eventType$$) {
  return {type:$eventType$$, lengthComputable:$e$$.lengthComputable, loaded:$e$$.loaded, total:$e$$.total};
};
goog.net.XhrIo.prototype.cleanUpXhr_ = function $goog$net$XhrIo$$cleanUpXhr_$($opt_fromDispose$$) {
  if (this.xhr_) {
    this.cleanUpTimeoutTimer_();
    var $xhr$$ = this.xhr_, $clearedOnReadyStateChange$$ = this.xhrOptions_[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] ? goog.nullFunction : null;
    this.xhrOptions_ = this.xhr_ = null;
    $opt_fromDispose$$ || this.dispatchEvent(goog.net.EventType.READY);
    try {
      $xhr$$.onreadystatechange = $clearedOnReadyStateChange$$;
    } catch ($e$$) {
      goog.log.error(this.logger_, "Problem encountered resetting onreadystatechange: " + $e$$.message);
    }
  }
};
goog.net.XhrIo.prototype.cleanUpTimeoutTimer_ = function $goog$net$XhrIo$$cleanUpTimeoutTimer_$() {
  this.xhr_ && this.useXhr2Timeout_ && (this.xhr_[goog.net.XhrIo.XHR2_ON_TIMEOUT_] = null);
  this.timeoutId_ && (goog.Timer.clear(this.timeoutId_), this.timeoutId_ = null);
};
goog.net.XhrIo.prototype.isActive = function $goog$net$XhrIo$$isActive$() {
  return !!this.xhr_;
};
goog.net.XhrIo.prototype.isComplete = function $goog$net$XhrIo$$isComplete$() {
  return this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE;
};
goog.net.XhrIo.prototype.isSuccess = function $goog$net$XhrIo$$isSuccess$() {
  var $status$$ = this.getStatus();
  return goog.net.HttpStatus.isSuccess($status$$) || 0 === $status$$ && !this.isLastUriEffectiveSchemeHttp_();
};
goog.net.XhrIo.prototype.isLastUriEffectiveSchemeHttp_ = function $goog$net$XhrIo$$isLastUriEffectiveSchemeHttp_$() {
  var $scheme$$ = goog.uri.utils.getEffectiveScheme(String(this.lastUri_));
  return goog.net.XhrIo.HTTP_SCHEME_PATTERN.test($scheme$$);
};
goog.net.XhrIo.prototype.getReadyState = function $goog$net$XhrIo$$getReadyState$() {
  return this.xhr_ ? this.xhr_.readyState : goog.net.XmlHttp.ReadyState.UNINITIALIZED;
};
goog.net.XhrIo.prototype.getStatus = function $goog$net$XhrIo$$getStatus$() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.status : -1;
  } catch ($e$$) {
    return -1;
  }
};
goog.net.XhrIo.prototype.getStatusText = function $goog$net$XhrIo$$getStatusText$() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.statusText : "";
  } catch ($e$$) {
    return goog.log.fine(this.logger_, "Can not get status: " + $e$$.message), "";
  }
};
goog.net.XhrIo.prototype.getLastUri = function $goog$net$XhrIo$$getLastUri$() {
  return String(this.lastUri_);
};
goog.net.XhrIo.prototype.getResponseText = function $goog$net$XhrIo$$getResponseText$() {
  try {
    return this.xhr_ ? this.xhr_.responseText : "";
  } catch ($e$$) {
    return goog.log.fine(this.logger_, "Can not get responseText: " + $e$$.message), "";
  }
};
goog.net.XhrIo.prototype.getResponseBody = function $goog$net$XhrIo$$getResponseBody$() {
  try {
    if (this.xhr_ && "responseBody" in this.xhr_) {
      return this.xhr_.responseBody;
    }
  } catch ($e$$) {
    goog.log.fine(this.logger_, "Can not get responseBody: " + $e$$.message);
  }
  return null;
};
goog.net.XhrIo.prototype.getResponseXml = function $goog$net$XhrIo$$getResponseXml$() {
  try {
    return this.xhr_ ? this.xhr_.responseXML : null;
  } catch ($e$$) {
    return goog.log.fine(this.logger_, "Can not get responseXML: " + $e$$.message), null;
  }
};
goog.net.XhrIo.prototype.getResponseJson = function $goog$net$XhrIo$$getResponseJson$($opt_xssiPrefix$$) {
  if (this.xhr_) {
    var $responseText$$ = this.xhr_.responseText;
    $opt_xssiPrefix$$ && 0 == $responseText$$.indexOf($opt_xssiPrefix$$) && ($responseText$$ = $responseText$$.substring($opt_xssiPrefix$$.length));
    return goog.json.hybrid.parse($responseText$$);
  }
};
goog.net.XhrIo.prototype.getResponse = function $goog$net$XhrIo$$getResponse$() {
  try {
    if (!this.xhr_) {
      return null;
    }
    if ("response" in this.xhr_) {
      return this.xhr_.response;
    }
    switch(this.responseType_) {
      case goog.net.XhrIo.ResponseType.DEFAULT:
      case goog.net.XhrIo.ResponseType.TEXT:
        return this.xhr_.responseText;
      case goog.net.XhrIo.ResponseType.ARRAY_BUFFER:
        if ("mozResponseArrayBuffer" in this.xhr_) {
          return this.xhr_.mozResponseArrayBuffer;
        }
    }
    goog.log.error(this.logger_, "Response type " + this.responseType_ + " is not supported on this browser");
    return null;
  } catch ($e$$) {
    return goog.log.fine(this.logger_, "Can not get response: " + $e$$.message), null;
  }
};
goog.net.XhrIo.prototype.getResponseHeader = function $goog$net$XhrIo$$getResponseHeader$($key$jscomp$124_value$$) {
  if (this.xhr_ && this.isComplete()) {
    return $key$jscomp$124_value$$ = this.xhr_.getResponseHeader($key$jscomp$124_value$$), null === $key$jscomp$124_value$$ ? void 0 : $key$jscomp$124_value$$;
  }
};
goog.net.XhrIo.prototype.getAllResponseHeaders = function $goog$net$XhrIo$$getAllResponseHeaders$() {
  return this.xhr_ && this.isComplete() ? this.xhr_.getAllResponseHeaders() || "" : "";
};
goog.net.XhrIo.prototype.getResponseHeaders = function $goog$net$XhrIo$$getResponseHeaders$() {
  for (var $headersObject$$ = {}, $headersArray$$ = this.getAllResponseHeaders().split("\r\n"), $i$$ = 0; $i$$ < $headersArray$$.length; $i$$++) {
    if (!goog.string.isEmptyOrWhitespace($headersArray$$[$i$$])) {
      var $keyValue_value$$ = goog.string.splitLimit($headersArray$$[$i$$], ":", 1), $key$$ = $keyValue_value$$[0];
      $keyValue_value$$ = $keyValue_value$$[1];
      if ("string" === typeof $keyValue_value$$) {
        $keyValue_value$$ = $keyValue_value$$.trim();
        var $values$jscomp$0$$ = $headersObject$$[$key$$] || [];
        $headersObject$$[$key$$] = $values$jscomp$0$$;
        $values$jscomp$0$$.push($keyValue_value$$);
      }
    }
  }
  return module$contents$goog$object_map($headersObject$$, function($values$$) {
    return $values$$.join(", ");
  });
};
goog.net.XhrIo.prototype.getStreamingResponseHeader = function $goog$net$XhrIo$$getStreamingResponseHeader$($key$$) {
  return this.xhr_ ? this.xhr_.getResponseHeader($key$$) : null;
};
goog.net.XhrIo.prototype.getAllStreamingResponseHeaders = function $goog$net$XhrIo$$getAllStreamingResponseHeaders$() {
  return this.xhr_ ? this.xhr_.getAllResponseHeaders() : "";
};
goog.net.XhrIo.prototype.getLastErrorCode = function $goog$net$XhrIo$$getLastErrorCode$() {
  return this.lastErrorCode_;
};
goog.net.XhrIo.prototype.getLastError = function $goog$net$XhrIo$$getLastError$() {
  return "string" === typeof this.lastError_ ? this.lastError_ : String(this.lastError_);
};
goog.net.XhrIo.prototype.formatMsg_ = function $goog$net$XhrIo$$formatMsg_$($msg$$) {
  return $msg$$ + " [" + this.lastMethod_ + " " + this.lastUri_ + " " + this.getStatus() + "]";
};
goog.debug.entryPointRegistry.register(function($transformer$$) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = $transformer$$(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_);
});
goog.crypt = {};
goog.crypt.stringToByteArray = function $goog$crypt$stringToByteArray$($str$$) {
  for (var $output$$ = [], $p$$ = 0, $i$$ = 0; $i$$ < $str$$.length; $i$$++) {
    var $c$$ = $str$$.charCodeAt($i$$);
    255 < $c$$ && ($output$$[$p$$++] = $c$$ & 255, $c$$ >>= 8);
    $output$$[$p$$++] = $c$$;
  }
  return $output$$;
};
goog.crypt.byteArrayToString = function $goog$crypt$byteArrayToString$($bytes$$) {
  if (8192 >= $bytes$$.length) {
    return String.fromCharCode.apply(null, $bytes$$);
  }
  for (var $str$$ = "", $i$$ = 0; $i$$ < $bytes$$.length; $i$$ += 8192) {
    var $chunk$$ = Array.prototype.slice.call($bytes$$, $i$$, $i$$ + 8192);
    $str$$ += String.fromCharCode.apply(null, $chunk$$);
  }
  return $str$$;
};
goog.crypt.byteArrayToHex = function $goog$crypt$byteArrayToHex$($array$$, $opt_separator$$) {
  return Array.prototype.map.call($array$$, function($hexByte_numByte$$) {
    $hexByte_numByte$$ = $hexByte_numByte$$.toString(16);
    return 1 < $hexByte_numByte$$.length ? $hexByte_numByte$$ : "0" + $hexByte_numByte$$;
  }).join($opt_separator$$ || "");
};
goog.crypt.hexToByteArray = function $goog$crypt$hexToByteArray$($hexString$$) {
  goog.asserts.assert(0 == $hexString$$.length % 2, "Key string length must be multiple of 2");
  for (var $arr$$ = [], $i$$ = 0; $i$$ < $hexString$$.length; $i$$ += 2) {
    $arr$$.push(parseInt($hexString$$.substring($i$$, $i$$ + 2), 16));
  }
  return $arr$$;
};
goog.crypt.stringToUtf8ByteArray = function $goog$crypt$stringToUtf8ByteArray$($str$$) {
  for (var $out$$ = [], $p$$ = 0, $i$$ = 0; $i$$ < $str$$.length; $i$$++) {
    var $c$$ = $str$$.charCodeAt($i$$);
    128 > $c$$ ? $out$$[$p$$++] = $c$$ : (2048 > $c$$ ? $out$$[$p$$++] = $c$$ >> 6 | 192 : (55296 == ($c$$ & 64512) && $i$$ + 1 < $str$$.length && 56320 == ($str$$.charCodeAt($i$$ + 1) & 64512) ? ($c$$ = 65536 + (($c$$ & 1023) << 10) + ($str$$.charCodeAt(++$i$$) & 1023), $out$$[$p$$++] = $c$$ >> 18 | 240, $out$$[$p$$++] = $c$$ >> 12 & 63 | 128) : $out$$[$p$$++] = $c$$ >> 12 | 224, $out$$[$p$$++] = $c$$ >> 6 & 63 | 128), $out$$[$p$$++] = $c$$ & 63 | 128);
  }
  return $out$$;
};
goog.crypt.utf8ByteArrayToString = function $goog$crypt$utf8ByteArrayToString$($bytes$$) {
  for (var $out$$ = [], $pos$$ = 0, $c$$ = 0; $pos$$ < $bytes$$.length;) {
    var $c1_u$$ = $bytes$$[$pos$$++];
    if (128 > $c1_u$$) {
      $out$$[$c$$++] = String.fromCharCode($c1_u$$);
    } else {
      if (191 < $c1_u$$ && 224 > $c1_u$$) {
        var $c2$$ = $bytes$$[$pos$$++];
        $out$$[$c$$++] = String.fromCharCode(($c1_u$$ & 31) << 6 | $c2$$ & 63);
      } else {
        if (239 < $c1_u$$ && 365 > $c1_u$$) {
          $c2$$ = $bytes$$[$pos$$++];
          var $c3$$ = $bytes$$[$pos$$++], $c4$$ = $bytes$$[$pos$$++];
          $c1_u$$ = (($c1_u$$ & 7) << 18 | ($c2$$ & 63) << 12 | ($c3$$ & 63) << 6 | $c4$$ & 63) - 65536;
          $out$$[$c$$++] = String.fromCharCode(55296 + ($c1_u$$ >> 10));
          $out$$[$c$$++] = String.fromCharCode(56320 + ($c1_u$$ & 1023));
        } else {
          $c2$$ = $bytes$$[$pos$$++], $c3$$ = $bytes$$[$pos$$++], $out$$[$c$$++] = String.fromCharCode(($c1_u$$ & 15) << 12 | ($c2$$ & 63) << 6 | $c3$$ & 63);
        }
      }
    }
  }
  return $out$$.join("");
};
goog.crypt.xorByteArray = function $goog$crypt$xorByteArray$($bytes1$$, $bytes2$$) {
  goog.asserts.assert($bytes1$$.length == $bytes2$$.length, "XOR array lengths must match");
  for (var $result$$ = [], $i$$ = 0; $i$$ < $bytes1$$.length; $i$$++) {
    $result$$.push($bytes1$$[$i$$] ^ $bytes2$$[$i$$]);
  }
  return $result$$;
};
goog.userAgent.product = {};
goog.userAgent.product.ASSUME_FIREFOX = !1;
goog.userAgent.product.ASSUME_IPHONE = !1;
goog.userAgent.product.ASSUME_IPAD = !1;
goog.userAgent.product.ASSUME_ANDROID = !1;
goog.userAgent.product.ASSUME_CHROME = !1;
goog.userAgent.product.ASSUME_SAFARI = !1;
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
goog.userAgent.product.OPERA = goog.userAgent.OPERA;
goog.userAgent.product.IE = goog.userAgent.IE;
goog.userAgent.product.EDGE = goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
goog.userAgent.product.isIphoneOrIpod_ = function $goog$userAgent$product$isIphoneOrIpod_$() {
  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
};
goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_ = function $goog$userAgent$product$isSafariDesktop_$() {
  return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
};
goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
goog.crypt.base64 = {};
goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
goog.crypt.base64.Alphabet = {DEFAULT:0, NO_PADDING:1, WEBSAFE:2, WEBSAFE_DOT_PADDING:3, WEBSAFE_NO_PADDING:4};
goog.crypt.base64.paddingChars_ = "=.";
goog.crypt.base64.isPadding_ = function $goog$crypt$base64$isPadding_$($char$$) {
  return goog.string.contains(goog.crypt.base64.paddingChars_, $char$$);
};
goog.crypt.base64.byteToCharMaps_ = {};
goog.crypt.base64.charToByteMap_ = null;
goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT;
goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa;
goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob;
goog.crypt.base64.encodeByteArray = function $goog$crypt$base64$encodeByteArray$($byte1$28_input$$, $alphabet_byteToCharMap$$) {
  goog.asserts.assert(goog.isArrayLike($byte1$28_input$$), "encodeByteArray takes an array as a parameter");
  void 0 === $alphabet_byteToCharMap$$ && ($alphabet_byteToCharMap$$ = goog.crypt.base64.Alphabet.DEFAULT);
  goog.crypt.base64.init_();
  $alphabet_byteToCharMap$$ = goog.crypt.base64.byteToCharMaps_[$alphabet_byteToCharMap$$];
  for (var $output$$ = Array(Math.floor($byte1$28_input$$.length / 3)), $paddingChar$$ = $alphabet_byteToCharMap$$[64] || "", $inputIdx$$ = 0, $outputIdx$$ = 0; $inputIdx$$ < $byte1$28_input$$.length - 2; $inputIdx$$ += 3) {
    var $byte1_outChar2$$ = $byte1$28_input$$[$inputIdx$$], $byte2$26_outChar3$27$$ = $byte1$28_input$$[$inputIdx$$ + 1], $byte3_outChar3_outChar4$$ = $byte1$28_input$$[$inputIdx$$ + 2], $byte2_outChar1$$ = $alphabet_byteToCharMap$$[$byte1_outChar2$$ >> 2];
    $byte1_outChar2$$ = $alphabet_byteToCharMap$$[($byte1_outChar2$$ & 3) << 4 | $byte2$26_outChar3$27$$ >> 4];
    $byte2$26_outChar3$27$$ = $alphabet_byteToCharMap$$[($byte2$26_outChar3$27$$ & 15) << 2 | $byte3_outChar3_outChar4$$ >> 6];
    $byte3_outChar3_outChar4$$ = $alphabet_byteToCharMap$$[$byte3_outChar3_outChar4$$ & 63];
    $output$$[$outputIdx$$++] = "" + $byte2_outChar1$$ + $byte1_outChar2$$ + $byte2$26_outChar3$27$$ + $byte3_outChar3_outChar4$$;
  }
  $byte2_outChar1$$ = 0;
  $byte3_outChar3_outChar4$$ = $paddingChar$$;
  switch($byte1$28_input$$.length - $inputIdx$$) {
    case 2:
      $byte2_outChar1$$ = $byte1$28_input$$[$inputIdx$$ + 1], $byte3_outChar3_outChar4$$ = $alphabet_byteToCharMap$$[($byte2_outChar1$$ & 15) << 2] || $paddingChar$$;
    case 1:
      $byte1$28_input$$ = $byte1$28_input$$[$inputIdx$$], $output$$[$outputIdx$$] = "" + $alphabet_byteToCharMap$$[$byte1$28_input$$ >> 2] + $alphabet_byteToCharMap$$[($byte1$28_input$$ & 3) << 4 | $byte2_outChar1$$ >> 4] + $byte3_outChar3_outChar4$$ + $paddingChar$$;
  }
  return $output$$.join("");
};
goog.crypt.base64.encodeString = function $goog$crypt$base64$encodeString$($input$$, $alphabet$$) {
  return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !$alphabet$$ ? goog.global.btoa($input$$) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray($input$$), $alphabet$$);
};
goog.crypt.base64.decodeString = function $goog$crypt$base64$decodeString$($input$$, $useCustomDecoder$$) {
  if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !$useCustomDecoder$$) {
    return goog.global.atob($input$$);
  }
  var $output$$ = "";
  goog.crypt.base64.decodeStringInternal_($input$$, function pushByte($b$$) {
    $output$$ += String.fromCharCode($b$$);
  });
  return $output$$;
};
goog.crypt.base64.decodeStringToByteArray = function $goog$crypt$base64$decodeStringToByteArray$($input$$, $opt_ignored$$) {
  var $output$$ = [];
  goog.crypt.base64.decodeStringInternal_($input$$, function pushByte($b$$) {
    $output$$.push($b$$);
  });
  return $output$$;
};
goog.crypt.base64.decodeStringToUint8Array = function $goog$crypt$base64$decodeStringToUint8Array$($input$$) {
  goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
  var $len$$ = $input$$.length, $approxByteLength$$ = 3 * $len$$ / 4;
  $approxByteLength$$ % 3 ? $approxByteLength$$ = Math.floor($approxByteLength$$) : goog.crypt.base64.isPadding_($input$$[$len$$ - 1]) && ($approxByteLength$$ = goog.crypt.base64.isPadding_($input$$[$len$$ - 2]) ? $approxByteLength$$ - 2 : $approxByteLength$$ - 1);
  var $output$$ = new Uint8Array($approxByteLength$$), $outLen$$ = 0;
  goog.crypt.base64.decodeStringInternal_($input$$, function pushByte($b$$) {
    $output$$[$outLen$$++] = $b$$;
  });
  return $output$$.subarray(0, $outLen$$);
};
goog.crypt.base64.decodeStringInternal_ = function $goog$crypt$base64$decodeStringInternal_$($input$$, $pushByte$$) {
  function $getByte$$($default_val$$) {
    for (; $nextCharIndex$$ < $input$$.length;) {
      var $ch$$ = $input$$.charAt($nextCharIndex$$++), $b$$ = goog.crypt.base64.charToByteMap_[$ch$$];
      if (null != $b$$) {
        return $b$$;
      }
      if (!goog.string.isEmptyOrWhitespace($ch$$)) {
        throw Error("Unknown base64 encoding at char: " + $ch$$);
      }
    }
    return $default_val$$;
  }
  goog.crypt.base64.init_();
  for (var $nextCharIndex$$ = 0;;) {
    var $byte1$$ = $getByte$$(-1), $byte2$$ = $getByte$$(0), $byte3$$ = $getByte$$(64), $byte4$$ = $getByte$$(64);
    if (64 === $byte4$$ && -1 === $byte1$$) {
      break;
    }
    $pushByte$$($byte1$$ << 2 | $byte2$$ >> 4);
    64 != $byte3$$ && ($pushByte$$($byte2$$ << 4 & 240 | $byte3$$ >> 2), 64 != $byte4$$ && $pushByte$$($byte3$$ << 6 & 192 | $byte4$$));
  }
};
goog.crypt.base64.init_ = function $goog$crypt$base64$init_$() {
  if (!goog.crypt.base64.charToByteMap_) {
    goog.crypt.base64.charToByteMap_ = {};
    for (var $commonChars$$ = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), $specialChars$$ = ["+/=", "+/", "-_=", "-_.", "-_"], $i$$ = 0; 5 > $i$$; $i$$++) {
      var $chars$$ = $commonChars$$.concat($specialChars$$[$i$$].split(""));
      goog.crypt.base64.byteToCharMaps_[$i$$] = $chars$$;
      for (var $j$$ = 0; $j$$ < $chars$$.length; $j$$++) {
        var $char$$ = $chars$$[$j$$], $existingByte$$ = goog.crypt.base64.charToByteMap_[$char$$];
        void 0 === $existingByte$$ ? goog.crypt.base64.charToByteMap_[$char$$] = $j$$ : goog.asserts.assert($existingByte$$ === $j$$);
      }
    }
  }
};
goog.net.streams.NodeReadableStream = function $goog$net$streams$NodeReadableStream$() {
};
goog.net.streams.NodeReadableStream.EventType = {READABLE:"readable", DATA:"data", END:"end", CLOSE:"close", ERROR:"error"};
goog.net.streams.NodeReadableStream.prototype.on = goog.abstractMethod;
goog.net.streams.NodeReadableStream.prototype.addListener = goog.abstractMethod;
goog.net.streams.NodeReadableStream.prototype.removeListener = goog.abstractMethod;
goog.net.streams.NodeReadableStream.prototype.once = goog.abstractMethod;
grpc.web.GenericTransportInterface = {};
grpc.web.Status = {};
function module$contents$grpc$web$Status_Status() {
}
grpc.web.Status.Status = module$contents$grpc$web$Status_Status;
var module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS = "grpc-status", module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS_MESSAGE = "grpc-message", module$contents$grpc$web$GrpcWebClientReadableStream_EXCLUDED_RESPONSE_HEADERS = ["content-type", module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS, module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS_MESSAGE], module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$($genericTransportInterface$$) {
  this.xhr_ = $genericTransportInterface$$.xhr;
  this.responseDeserializeFn_ = null;
  this.onDataCallbacks_ = [];
  this.onStatusCallbacks_ = [];
  this.onMetadataCallbacks_ = [];
  this.onErrorCallbacks_ = [];
  this.onEndCallbacks_ = [];
  this.aborted_ = !1;
  this.pos_ = 0;
  this.parser_ = new module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser;
  var $self$$ = this;
  goog.events.listen(this.xhr_, goog.net.EventType.READY_STATE_CHANGE, function($contentType$jscomp$4_e$$) {
    if ($contentType$jscomp$4_e$$ = $self$$.xhr_.getStreamingResponseHeader("Content-Type")) {
      $contentType$jscomp$4_e$$ = $contentType$jscomp$4_e$$.toLowerCase();
      if (goog.string.startsWith($contentType$jscomp$4_e$$, "application/grpc-web-text")) {
        var $FrameType_byteSource_newData$jscomp$1_responseText$$ = $self$$.xhr_.getResponseText() || "";
        $contentType$jscomp$4_e$$ = $FrameType_byteSource_newData$jscomp$1_responseText$$.length - $FrameType_byteSource_newData$jscomp$1_responseText$$.length % 4;
        $FrameType_byteSource_newData$jscomp$1_responseText$$ = $FrameType_byteSource_newData$jscomp$1_responseText$$.substr($self$$.pos_, $contentType$jscomp$4_e$$ - $self$$.pos_);
        if (0 == $FrameType_byteSource_newData$jscomp$1_responseText$$.length) {
          return;
        }
        $self$$.pos_ = $contentType$jscomp$4_e$$;
        $FrameType_byteSource_newData$jscomp$1_responseText$$ = goog.crypt.base64.decodeStringToUint8Array($FrameType_byteSource_newData$jscomp$1_responseText$$);
      } else {
        if (goog.string.startsWith($contentType$jscomp$4_e$$, "application/grpc")) {
          $FrameType_byteSource_newData$jscomp$1_responseText$$ = new Uint8Array($self$$.xhr_.getResponse());
        } else {
          $self$$.handleError_(new module$exports$grpc$web$RpcError(module$exports$grpc$web$StatusCode.UNKNOWN, "Unknown Content-type received."));
          return;
        }
      }
      $contentType$jscomp$4_e$$ = null;
      try {
        $contentType$jscomp$4_e$$ = $self$$.parser_.parse($FrameType_byteSource_newData$jscomp$1_responseText$$);
      } catch ($err$31$$) {
        $self$$.handleError_(new module$exports$grpc$web$RpcError(module$exports$grpc$web$StatusCode.UNKNOWN, "Error in parsing response body"));
      }
      if ($contentType$jscomp$4_e$$) {
        $FrameType_byteSource_newData$jscomp$1_responseText$$ = module$contents$grpc$web$GrpcWebStreamParser_GrpcWebStreamParser.FrameType;
        for (var $i$$ = 0; $i$$ < $contentType$jscomp$4_e$$.length; $i$$++) {
          if ($FrameType_byteSource_newData$jscomp$1_responseText$$.DATA in $contentType$jscomp$4_e$$[$i$$]) {
            var $data$$ = $contentType$jscomp$4_e$$[$i$$][$FrameType_byteSource_newData$jscomp$1_responseText$$.DATA];
            if ($data$$) {
              var $grpcStatusCode_isResponseDeserialized_pos$$ = !1, $grpcStatusMessage_response$$ = void 0;
              try {
                $grpcStatusMessage_response$$ = $self$$.responseDeserializeFn_($data$$), $grpcStatusCode_isResponseDeserialized_pos$$ = !0;
              } catch ($err$32$$) {
                $self$$.handleError_(new module$exports$grpc$web$RpcError(module$exports$grpc$web$StatusCode.INTERNAL, "Error when deserializing response data; error: " + $err$32$$ + (", response: " + $grpcStatusMessage_response$$)));
              }
              $grpcStatusCode_isResponseDeserialized_pos$$ && $self$$.sendDataCallbacks_($grpcStatusMessage_response$$);
            }
          }
          if ($FrameType_byteSource_newData$jscomp$1_responseText$$.TRAILER in $contentType$jscomp$4_e$$[$i$$] && 0 < $contentType$jscomp$4_e$$[$i$$][$FrameType_byteSource_newData$jscomp$1_responseText$$.TRAILER].length) {
            $data$$ = "";
            for ($grpcStatusCode_isResponseDeserialized_pos$$ = 0; $grpcStatusCode_isResponseDeserialized_pos$$ < $contentType$jscomp$4_e$$[$i$$][$FrameType_byteSource_newData$jscomp$1_responseText$$.TRAILER].length; $grpcStatusCode_isResponseDeserialized_pos$$++) {
              $data$$ += String.fromCharCode($contentType$jscomp$4_e$$[$i$$][$FrameType_byteSource_newData$jscomp$1_responseText$$.TRAILER][$grpcStatusCode_isResponseDeserialized_pos$$]);
            }
            $data$$ = $self$$.parseHttp1Headers_($data$$);
            $grpcStatusCode_isResponseDeserialized_pos$$ = module$exports$grpc$web$StatusCode.OK;
            $grpcStatusMessage_response$$ = "";
            module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS in $data$$ && ($grpcStatusCode_isResponseDeserialized_pos$$ = Number($data$$[module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS]), delete $data$$[module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS]);
            module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS_MESSAGE in $data$$ && ($grpcStatusMessage_response$$ = $data$$[module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS_MESSAGE], delete $data$$[module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS_MESSAGE]);
            $self$$.handleError_(new module$exports$grpc$web$RpcError($grpcStatusCode_isResponseDeserialized_pos$$, $grpcStatusMessage_response$$, $data$$));
          }
        }
      }
    }
  });
  goog.events.listen(this.xhr_, goog.net.EventType.COMPLETE, function($e$jscomp$60_grpcStatusCode$$) {
    var $lastErrorCode$$ = $self$$.xhr_.getLastErrorCode();
    $e$jscomp$60_grpcStatusCode$$ = module$exports$grpc$web$StatusCode.UNKNOWN;
    var $errorMessage$jscomp$2_grpcStatusMessage$$ = "", $initialMetadata$$ = {}, $responseHeaders$$ = $self$$.xhr_.getResponseHeaders();
    Object.keys($responseHeaders$$).forEach(function($header_$$) {
      module$contents$grpc$web$GrpcWebClientReadableStream_EXCLUDED_RESPONSE_HEADERS.includes($header_$$) || ($initialMetadata$$[$header_$$] = $responseHeaders$$[$header_$$]);
    });
    $self$$.sendMetadataCallbacks_($initialMetadata$$);
    var $errorEmitted_xhrStatusCode$$ = -1;
    if ($lastErrorCode$$ != goog.net.ErrorCode.NO_ERROR) {
      switch($lastErrorCode$$) {
        case goog.net.ErrorCode.ABORT:
          $e$jscomp$60_grpcStatusCode$$ = module$exports$grpc$web$StatusCode.ABORTED;
          break;
        case goog.net.ErrorCode.TIMEOUT:
          $e$jscomp$60_grpcStatusCode$$ = module$exports$grpc$web$StatusCode.DEADLINE_EXCEEDED;
          break;
        case goog.net.ErrorCode.HTTP_ERROR:
          $errorEmitted_xhrStatusCode$$ = $self$$.xhr_.getStatus();
          $e$jscomp$60_grpcStatusCode$$ = module$exports$grpc$web$StatusCode.fromHttpStatus($errorEmitted_xhrStatusCode$$);
          break;
        default:
          $e$jscomp$60_grpcStatusCode$$ = module$exports$grpc$web$StatusCode.UNAVAILABLE;
      }
      $e$jscomp$60_grpcStatusCode$$ == module$exports$grpc$web$StatusCode.ABORTED && $self$$.aborted_ || ($errorMessage$jscomp$2_grpcStatusMessage$$ = goog.net.ErrorCode.getDebugMessage($lastErrorCode$$), -1 != $errorEmitted_xhrStatusCode$$ && ($errorMessage$jscomp$2_grpcStatusMessage$$ += ", http status code: " + $errorEmitted_xhrStatusCode$$), $self$$.handleError_(new module$exports$grpc$web$RpcError($e$jscomp$60_grpcStatusCode$$, $errorMessage$jscomp$2_grpcStatusMessage$$)));
    } else {
      $errorEmitted_xhrStatusCode$$ = !1, module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS in $responseHeaders$$ && ($e$jscomp$60_grpcStatusCode$$ = Number($self$$.xhr_.getResponseHeader(module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS)), module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS_MESSAGE in $responseHeaders$$ && ($errorMessage$jscomp$2_grpcStatusMessage$$ = $self$$.xhr_.getResponseHeader(module$contents$grpc$web$GrpcWebClientReadableStream_GRPC_STATUS_MESSAGE)), 
      $e$jscomp$60_grpcStatusCode$$ != module$exports$grpc$web$StatusCode.OK && ($self$$.handleError_(new module$exports$grpc$web$RpcError($e$jscomp$60_grpcStatusCode$$, $errorMessage$jscomp$2_grpcStatusMessage$$ || "", $responseHeaders$$)), $errorEmitted_xhrStatusCode$$ = !0)), $errorEmitted_xhrStatusCode$$ || $self$$.sendEndCallbacks_();
    }
  });
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.on = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$on$($eventType$$, $callback$$) {
  "data" == $eventType$$ ? this.onDataCallbacks_.push($callback$$) : "status" == $eventType$$ ? this.onStatusCallbacks_.push($callback$$) : "metadata" == $eventType$$ ? this.onMetadataCallbacks_.push($callback$$) : "end" == $eventType$$ ? this.onEndCallbacks_.push($callback$$) : "error" == $eventType$$ && this.onErrorCallbacks_.push($callback$$);
  return this;
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.removeListenerFromCallbacks_ = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$removeListenerFromCallbacks_$($callbacks$$, $callback$jscomp$73_index$$) {
  $callback$jscomp$73_index$$ = $callbacks$$.indexOf($callback$jscomp$73_index$$);
  -1 < $callback$jscomp$73_index$$ && $callbacks$$.splice($callback$jscomp$73_index$$, 1);
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.removeListener = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$removeListener$($eventType$$, $callback$$) {
  "data" == $eventType$$ ? this.removeListenerFromCallbacks_(this.onDataCallbacks_, $callback$$) : "status" == $eventType$$ ? this.removeListenerFromCallbacks_(this.onStatusCallbacks_, $callback$$) : "metadata" == $eventType$$ ? this.removeListenerFromCallbacks_(this.onMetadataCallbacks_, $callback$$) : "end" == $eventType$$ ? this.removeListenerFromCallbacks_(this.onEndCallbacks_, $callback$$) : "error" == $eventType$$ && this.removeListenerFromCallbacks_(this.onErrorCallbacks_, $callback$$);
  return this;
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.setResponseDeserializeFn = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$setResponseDeserializeFn$($responseDeserializeFn$$) {
  this.responseDeserializeFn_ = $responseDeserializeFn$$;
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.cancel = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$cancel$() {
  this.aborted_ = !0;
  this.xhr_.abort();
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.parseHttp1Headers_ = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$parseHttp1Headers_$($chunks_str$$) {
  $chunks_str$$ = $chunks_str$$.trim().split("\r\n");
  for (var $headers$$ = {}, $i$$ = 0; $i$$ < $chunks_str$$.length; $i$$++) {
    var $pos$$ = $chunks_str$$[$i$$].indexOf(":");
    $headers$$[$chunks_str$$[$i$$].substring(0, $pos$$).trim()] = $chunks_str$$[$i$$].substring($pos$$ + 1).trim();
  }
  return $headers$$;
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.handleError_ = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$handleError_$($error$$) {
  $error$$.code != module$exports$grpc$web$StatusCode.OK && this.sendErrorCallbacks_(new module$exports$grpc$web$RpcError($error$$.code, decodeURIComponent($error$$.message || ""), $error$$.metadata));
  this.sendStatusCallbacks_({code:$error$$.code, details:decodeURIComponent($error$$.message || ""), metadata:$error$$.metadata});
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.sendDataCallbacks_ = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$sendDataCallbacks_$($data$$) {
  for (var $i$$ = 0; $i$$ < this.onDataCallbacks_.length; $i$$++) {
    this.onDataCallbacks_[$i$$]($data$$);
  }
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.sendStatusCallbacks_ = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$sendStatusCallbacks_$($status$$) {
  for (var $i$$ = 0; $i$$ < this.onStatusCallbacks_.length; $i$$++) {
    this.onStatusCallbacks_[$i$$]($status$$);
  }
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.sendMetadataCallbacks_ = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$sendMetadataCallbacks_$($metadata$$) {
  for (var $i$$ = 0; $i$$ < this.onMetadataCallbacks_.length; $i$$++) {
    this.onMetadataCallbacks_[$i$$]($metadata$$);
  }
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.sendErrorCallbacks_ = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$sendErrorCallbacks_$($error$$) {
  for (var $i$$ = 0; $i$$ < this.onErrorCallbacks_.length; $i$$++) {
    this.onErrorCallbacks_[$i$$]($error$$);
  }
};
module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.sendEndCallbacks_ = function $module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream$$sendEndCallbacks_$() {
  for (var $i$$ = 0; $i$$ < this.onEndCallbacks_.length; $i$$++) {
    this.onEndCallbacks_[$i$$]();
  }
};
goog.exportProperty(module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype, "cancel", module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.cancel);
goog.exportProperty(module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype, "removeListener", module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.removeListener);
goog.exportProperty(module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype, "on", module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream.prototype.on);
grpc.web.GrpcWebClientReadableStream = module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream;
goog.Uri = function $goog$Uri$($opt_uri$$, $opt_ignoreCase$$) {
  this.domain_ = this.userInfo_ = this.scheme_ = "";
  this.port_ = null;
  this.fragment_ = this.path_ = "";
  this.ignoreCase_ = this.isReadOnly_ = !1;
  var $m$$;
  $opt_uri$$ instanceof goog.Uri ? (this.ignoreCase_ = void 0 !== $opt_ignoreCase$$ ? $opt_ignoreCase$$ : $opt_uri$$.getIgnoreCase(), this.setScheme($opt_uri$$.getScheme()), this.setUserInfo($opt_uri$$.getUserInfo()), this.setDomain($opt_uri$$.getDomain()), this.setPort($opt_uri$$.getPort()), this.setPath($opt_uri$$.getPath()), this.setQueryData($opt_uri$$.getQueryData().clone()), this.setFragment($opt_uri$$.getFragment())) : $opt_uri$$ && ($m$$ = goog.uri.utils.split(String($opt_uri$$))) ? (this.ignoreCase_ = 
  !!$opt_ignoreCase$$, this.setScheme($m$$[goog.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo($m$$[goog.uri.utils.ComponentIndex.USER_INFO] || "", !0), this.setDomain($m$$[goog.uri.utils.ComponentIndex.DOMAIN] || "", !0), this.setPort($m$$[goog.uri.utils.ComponentIndex.PORT]), this.setPath($m$$[goog.uri.utils.ComponentIndex.PATH] || "", !0), this.setQueryData($m$$[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment($m$$[goog.uri.utils.ComponentIndex.FRAGMENT] || 
  "", !0)) : (this.ignoreCase_ = !!$opt_ignoreCase$$, this.queryData_ = new goog.Uri.QueryData(null, this.ignoreCase_));
};
goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
goog.Uri.prototype.toString = function $goog$Uri$$toString$() {
  var $out$$ = [], $scheme$$ = this.getScheme();
  $scheme$$ && $out$$.push(goog.Uri.encodeSpecialChars_($scheme$$, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), ":");
  var $domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$ = this.getDomain();
  if ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$ || "file" == $scheme$$) {
    $out$$.push("//"), ($scheme$$ = this.getUserInfo()) && $out$$.push(goog.Uri.encodeSpecialChars_($scheme$$, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), "@"), $out$$.push(goog.Uri.removeDoubleEncoding_(goog.string.urlEncode($domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$))), $domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$ = this.getPort(), null != $domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$ && $out$$.push(":", String($domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$));
  }
  if ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$ = this.getPath()) {
    this.hasDomain() && "/" != $domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$.charAt(0) && $out$$.push("/"), $out$$.push(goog.Uri.encodeSpecialChars_($domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$, "/" == $domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$.charAt(0) ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_, !0));
  }
  ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$ = this.getEncodedQuery()) && $out$$.push("?", $domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$);
  ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$ = this.getFragment()) && $out$$.push("#", goog.Uri.encodeSpecialChars_($domain$jscomp$2_fragment$jscomp$2_path$jscomp$25_port_query$$, goog.Uri.reDisallowedInFragment_));
  return $out$$.join("");
};
goog.Uri.prototype.resolve = function $goog$Uri$$resolve$($relativeUri$$) {
  var $absoluteUri$$ = this.clone(), $overridden$$ = $relativeUri$$.hasScheme();
  $overridden$$ ? $absoluteUri$$.setScheme($relativeUri$$.getScheme()) : $overridden$$ = $relativeUri$$.hasUserInfo();
  $overridden$$ ? $absoluteUri$$.setUserInfo($relativeUri$$.getUserInfo()) : $overridden$$ = $relativeUri$$.hasDomain();
  $overridden$$ ? $absoluteUri$$.setDomain($relativeUri$$.getDomain()) : $overridden$$ = $relativeUri$$.hasPort();
  var $path$$ = $relativeUri$$.getPath();
  if ($overridden$$) {
    $absoluteUri$$.setPort($relativeUri$$.getPort());
  } else {
    if ($overridden$$ = $relativeUri$$.hasPath()) {
      if ("/" != $path$$.charAt(0)) {
        if (this.hasDomain() && !this.hasPath()) {
          $path$$ = "/" + $path$$;
        } else {
          var $lastSlashIndex$$ = $absoluteUri$$.getPath().lastIndexOf("/");
          -1 != $lastSlashIndex$$ && ($path$$ = $absoluteUri$$.getPath().substr(0, $lastSlashIndex$$ + 1) + $path$$);
        }
      }
      $path$$ = goog.Uri.removeDotSegments($path$$);
    }
  }
  $overridden$$ ? $absoluteUri$$.setPath($path$$) : $overridden$$ = $relativeUri$$.hasQuery();
  $overridden$$ ? $absoluteUri$$.setQueryData($relativeUri$$.getQueryData().clone()) : $overridden$$ = $relativeUri$$.hasFragment();
  $overridden$$ && $absoluteUri$$.setFragment($relativeUri$$.getFragment());
  return $absoluteUri$$;
};
goog.Uri.prototype.clone = function $goog$Uri$$clone$() {
  return new goog.Uri(this);
};
goog.Uri.prototype.getScheme = function $goog$Uri$$getScheme$() {
  return this.scheme_;
};
goog.Uri.prototype.setScheme = function $goog$Uri$$setScheme$($newScheme$$, $opt_decode$$) {
  this.enforceReadOnly();
  if (this.scheme_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newScheme$$, !0) : $newScheme$$) {
    this.scheme_ = this.scheme_.replace(/:$/, "");
  }
  return this;
};
goog.Uri.prototype.hasScheme = function $goog$Uri$$hasScheme$() {
  return !!this.scheme_;
};
goog.Uri.prototype.getUserInfo = function $goog$Uri$$getUserInfo$() {
  return this.userInfo_;
};
goog.Uri.prototype.setUserInfo = function $goog$Uri$$setUserInfo$($newUserInfo$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.userInfo_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newUserInfo$$) : $newUserInfo$$;
  return this;
};
goog.Uri.prototype.hasUserInfo = function $goog$Uri$$hasUserInfo$() {
  return !!this.userInfo_;
};
goog.Uri.prototype.getDomain = function $goog$Uri$$getDomain$() {
  return this.domain_;
};
goog.Uri.prototype.setDomain = function $goog$Uri$$setDomain$($newDomain$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.domain_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newDomain$$, !0) : $newDomain$$;
  return this;
};
goog.Uri.prototype.hasDomain = function $goog$Uri$$hasDomain$() {
  return !!this.domain_;
};
goog.Uri.prototype.getPort = function $goog$Uri$$getPort$() {
  return this.port_;
};
goog.Uri.prototype.setPort = function $goog$Uri$$setPort$($newPort$$) {
  this.enforceReadOnly();
  if ($newPort$$) {
    $newPort$$ = Number($newPort$$);
    if (isNaN($newPort$$) || 0 > $newPort$$) {
      throw Error("Bad port number " + $newPort$$);
    }
    this.port_ = $newPort$$;
  } else {
    this.port_ = null;
  }
  return this;
};
goog.Uri.prototype.hasPort = function $goog$Uri$$hasPort$() {
  return null != this.port_;
};
goog.Uri.prototype.getPath = function $goog$Uri$$getPath$() {
  return this.path_;
};
goog.Uri.prototype.setPath = function $goog$Uri$$setPath$($newPath$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.path_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newPath$$, !0) : $newPath$$;
  return this;
};
goog.Uri.prototype.hasPath = function $goog$Uri$$hasPath$() {
  return !!this.path_;
};
goog.Uri.prototype.hasQuery = function $goog$Uri$$hasQuery$() {
  return "" !== this.queryData_.toString();
};
goog.Uri.prototype.setQueryData = function $goog$Uri$$setQueryData$($queryData$$, $opt_decode$$) {
  this.enforceReadOnly();
  $queryData$$ instanceof goog.Uri.QueryData ? (this.queryData_ = $queryData$$, this.queryData_.setIgnoreCase(this.ignoreCase_)) : ($opt_decode$$ || ($queryData$$ = goog.Uri.encodeSpecialChars_($queryData$$, goog.Uri.reDisallowedInQuery_)), this.queryData_ = new goog.Uri.QueryData($queryData$$, this.ignoreCase_));
  return this;
};
goog.Uri.prototype.setQuery = function $goog$Uri$$setQuery$($newQuery$$, $opt_decode$$) {
  return this.setQueryData($newQuery$$, $opt_decode$$);
};
goog.Uri.prototype.getEncodedQuery = function $goog$Uri$$getEncodedQuery$() {
  return this.queryData_.toString();
};
goog.Uri.prototype.getDecodedQuery = function $goog$Uri$$getDecodedQuery$() {
  return this.queryData_.toDecodedString();
};
goog.Uri.prototype.getQueryData = function $goog$Uri$$getQueryData$() {
  return this.queryData_;
};
goog.Uri.prototype.getQuery = function $goog$Uri$$getQuery$() {
  return this.getEncodedQuery();
};
goog.Uri.prototype.setParameterValue = function $goog$Uri$$setParameterValue$($key$$, $value$$) {
  this.enforceReadOnly();
  this.queryData_.set($key$$, $value$$);
  return this;
};
goog.Uri.prototype.setParameterValues = function $goog$Uri$$setParameterValues$($key$$, $values$$) {
  this.enforceReadOnly();
  Array.isArray($values$$) || ($values$$ = [String($values$$)]);
  this.queryData_.setValues($key$$, $values$$);
  return this;
};
goog.Uri.prototype.getParameterValues = function $goog$Uri$$getParameterValues$($name$$) {
  return this.queryData_.getValues($name$$);
};
goog.Uri.prototype.getParameterValue = function $goog$Uri$$getParameterValue$($paramName$$) {
  return this.queryData_.get($paramName$$);
};
goog.Uri.prototype.getFragment = function $goog$Uri$$getFragment$() {
  return this.fragment_;
};
goog.Uri.prototype.setFragment = function $goog$Uri$$setFragment$($newFragment$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.fragment_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newFragment$$) : $newFragment$$;
  return this;
};
goog.Uri.prototype.hasFragment = function $goog$Uri$$hasFragment$() {
  return !!this.fragment_;
};
goog.Uri.prototype.hasSameDomainAs = function $goog$Uri$$hasSameDomainAs$($uri2$$) {
  return (!this.hasDomain() && !$uri2$$.hasDomain() || this.getDomain() == $uri2$$.getDomain()) && (!this.hasPort() && !$uri2$$.hasPort() || this.getPort() == $uri2$$.getPort());
};
goog.Uri.prototype.makeUnique = function $goog$Uri$$makeUnique$() {
  this.enforceReadOnly();
  this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
  return this;
};
goog.Uri.prototype.removeParameter = function $goog$Uri$$removeParameter$($key$$) {
  this.enforceReadOnly();
  this.queryData_.remove($key$$);
  return this;
};
goog.Uri.prototype.setReadOnly = function $goog$Uri$$setReadOnly$($isReadOnly$$) {
  this.isReadOnly_ = $isReadOnly$$;
  return this;
};
goog.Uri.prototype.isReadOnly = function $goog$Uri$$isReadOnly$() {
  return this.isReadOnly_;
};
goog.Uri.prototype.enforceReadOnly = function $goog$Uri$$enforceReadOnly$() {
  if (this.isReadOnly_) {
    throw Error("Tried to modify a read-only Uri");
  }
};
goog.Uri.prototype.setIgnoreCase = function $goog$Uri$$setIgnoreCase$($ignoreCase$$) {
  this.ignoreCase_ = $ignoreCase$$;
  this.queryData_ && this.queryData_.setIgnoreCase($ignoreCase$$);
  return this;
};
goog.Uri.prototype.getIgnoreCase = function $goog$Uri$$getIgnoreCase$() {
  return this.ignoreCase_;
};
goog.Uri.parse = function $goog$Uri$parse$($uri$$, $opt_ignoreCase$$) {
  return $uri$$ instanceof goog.Uri ? $uri$$.clone() : new goog.Uri($uri$$, $opt_ignoreCase$$);
};
goog.Uri.create = function $goog$Uri$create$($opt_scheme$$, $opt_userInfo$$, $opt_domain$$, $opt_port$$, $opt_path$$, $opt_query$$, $opt_fragment$$, $opt_ignoreCase$jscomp$2_uri$$) {
  $opt_ignoreCase$jscomp$2_uri$$ = new goog.Uri(null, $opt_ignoreCase$jscomp$2_uri$$);
  $opt_scheme$$ && $opt_ignoreCase$jscomp$2_uri$$.setScheme($opt_scheme$$);
  $opt_userInfo$$ && $opt_ignoreCase$jscomp$2_uri$$.setUserInfo($opt_userInfo$$);
  $opt_domain$$ && $opt_ignoreCase$jscomp$2_uri$$.setDomain($opt_domain$$);
  $opt_port$$ && $opt_ignoreCase$jscomp$2_uri$$.setPort($opt_port$$);
  $opt_path$$ && $opt_ignoreCase$jscomp$2_uri$$.setPath($opt_path$$);
  $opt_query$$ && $opt_ignoreCase$jscomp$2_uri$$.setQueryData($opt_query$$);
  $opt_fragment$$ && $opt_ignoreCase$jscomp$2_uri$$.setFragment($opt_fragment$$);
  return $opt_ignoreCase$jscomp$2_uri$$;
};
goog.Uri.resolve = function $goog$Uri$resolve$($base$$, $rel$$) {
  $base$$ instanceof goog.Uri || ($base$$ = goog.Uri.parse($base$$));
  $rel$$ instanceof goog.Uri || ($rel$$ = goog.Uri.parse($rel$$));
  return $base$$.resolve($rel$$);
};
goog.Uri.removeDotSegments = function $goog$Uri$removeDotSegments$($path$jscomp$27_segments$$) {
  if (".." == $path$jscomp$27_segments$$ || "." == $path$jscomp$27_segments$$) {
    return "";
  }
  if (goog.string.contains($path$jscomp$27_segments$$, "./") || goog.string.contains($path$jscomp$27_segments$$, "/.")) {
    var $leadingSlash$$ = goog.string.startsWith($path$jscomp$27_segments$$, "/");
    $path$jscomp$27_segments$$ = $path$jscomp$27_segments$$.split("/");
    for (var $out$$ = [], $pos$$ = 0; $pos$$ < $path$jscomp$27_segments$$.length;) {
      var $segment$$ = $path$jscomp$27_segments$$[$pos$$++];
      "." == $segment$$ ? $leadingSlash$$ && $pos$$ == $path$jscomp$27_segments$$.length && $out$$.push("") : ".." == $segment$$ ? ((1 < $out$$.length || 1 == $out$$.length && "" != $out$$[0]) && $out$$.pop(), $leadingSlash$$ && $pos$$ == $path$jscomp$27_segments$$.length && $out$$.push("")) : ($out$$.push($segment$$), $leadingSlash$$ = !0);
    }
    return $out$$.join("/");
  }
  return $path$jscomp$27_segments$$;
};
goog.Uri.decodeOrEmpty_ = function $goog$Uri$decodeOrEmpty_$($val$$, $opt_preserveReserved$$) {
  return $val$$ ? $opt_preserveReserved$$ ? decodeURI($val$$.replace(/%25/g, "%2525")) : decodeURIComponent($val$$) : "";
};
goog.Uri.encodeSpecialChars_ = function $goog$Uri$encodeSpecialChars_$($encoded_unescapedPart$$, $extra$$, $opt_removeDoubleEncoding$$) {
  return "string" === typeof $encoded_unescapedPart$$ ? ($encoded_unescapedPart$$ = encodeURI($encoded_unescapedPart$$).replace($extra$$, goog.Uri.encodeChar_), $opt_removeDoubleEncoding$$ && ($encoded_unescapedPart$$ = goog.Uri.removeDoubleEncoding_($encoded_unescapedPart$$)), $encoded_unescapedPart$$) : null;
};
goog.Uri.encodeChar_ = function $goog$Uri$encodeChar_$($ch$jscomp$5_n$$) {
  $ch$jscomp$5_n$$ = $ch$jscomp$5_n$$.charCodeAt(0);
  return "%" + ($ch$jscomp$5_n$$ >> 4 & 15).toString(16) + ($ch$jscomp$5_n$$ & 15).toString(16);
};
goog.Uri.removeDoubleEncoding_ = function $goog$Uri$removeDoubleEncoding_$($doubleEncodedString$$) {
  return $doubleEncodedString$$.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
};
goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
goog.Uri.reDisallowedInRelativePath_ = /[#\?:]/g;
goog.Uri.reDisallowedInAbsolutePath_ = /[#\?]/g;
goog.Uri.reDisallowedInQuery_ = /[#\?@]/g;
goog.Uri.reDisallowedInFragment_ = /#/g;
goog.Uri.haveSameDomain = function $goog$Uri$haveSameDomain$($pieces1$$, $pieces2$$) {
  $pieces1$$ = goog.uri.utils.split($pieces1$$);
  $pieces2$$ = goog.uri.utils.split($pieces2$$);
  return $pieces1$$[goog.uri.utils.ComponentIndex.DOMAIN] == $pieces2$$[goog.uri.utils.ComponentIndex.DOMAIN] && $pieces1$$[goog.uri.utils.ComponentIndex.PORT] == $pieces2$$[goog.uri.utils.ComponentIndex.PORT];
};
goog.Uri.QueryData = function $goog$Uri$QueryData$($opt_query$$, $opt_ignoreCase$$) {
  this.count_ = this.keyMap_ = null;
  this.encodedQuery_ = $opt_query$$ || null;
  this.ignoreCase_ = !!$opt_ignoreCase$$;
};
goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function $goog$Uri$QueryData$$ensureKeyMapInitialized_$() {
  if (!this.keyMap_ && (this.keyMap_ = new goog.structs.Map, this.count_ = 0, this.encodedQuery_)) {
    var $self$$ = this;
    goog.uri.utils.parseQueryData(this.encodedQuery_, function($name$$, $value$$) {
      $self$$.add(goog.string.urlDecode($name$$), $value$$);
    });
  }
};
goog.Uri.QueryData.createFromMap = function $goog$Uri$QueryData$createFromMap$($map$jscomp$9_values$$, $opt_ignoreCase$jscomp$4_queryData$$) {
  var $keys$$ = goog.structs.getKeys($map$jscomp$9_values$$);
  if ("undefined" == typeof $keys$$) {
    throw Error("Keys are undefined");
  }
  $opt_ignoreCase$jscomp$4_queryData$$ = new goog.Uri.QueryData(null, $opt_ignoreCase$jscomp$4_queryData$$);
  $map$jscomp$9_values$$ = goog.structs.getValues($map$jscomp$9_values$$);
  for (var $i$$ = 0; $i$$ < $keys$$.length; $i$$++) {
    var $key$$ = $keys$$[$i$$], $value$$ = $map$jscomp$9_values$$[$i$$];
    Array.isArray($value$$) ? $opt_ignoreCase$jscomp$4_queryData$$.setValues($key$$, $value$$) : $opt_ignoreCase$jscomp$4_queryData$$.add($key$$, $value$$);
  }
  return $opt_ignoreCase$jscomp$4_queryData$$;
};
goog.Uri.QueryData.createFromKeysValues = function $goog$Uri$QueryData$createFromKeysValues$($keys$$, $values$$, $opt_ignoreCase$jscomp$5_queryData$$) {
  if ($keys$$.length != $values$$.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  $opt_ignoreCase$jscomp$5_queryData$$ = new goog.Uri.QueryData(null, $opt_ignoreCase$jscomp$5_queryData$$);
  for (var $i$$ = 0; $i$$ < $keys$$.length; $i$$++) {
    $opt_ignoreCase$jscomp$5_queryData$$.add($keys$$[$i$$], $values$$[$i$$]);
  }
  return $opt_ignoreCase$jscomp$5_queryData$$;
};
goog.Uri.QueryData.prototype.getCount = function $goog$Uri$QueryData$$getCount$() {
  this.ensureKeyMapInitialized_();
  return this.count_;
};
goog.Uri.QueryData.prototype.add = function $goog$Uri$QueryData$$add$($key$$, $value$$) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  $key$$ = this.getKeyName_($key$$);
  var $values$$ = this.keyMap_.get($key$$);
  $values$$ || this.keyMap_.set($key$$, $values$$ = []);
  $values$$.push($value$$);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.remove = function $goog$Uri$QueryData$$remove$($key$$) {
  this.ensureKeyMapInitialized_();
  $key$$ = this.getKeyName_($key$$);
  return this.keyMap_.containsKey($key$$) ? (this.invalidateCache_(), this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get($key$$).length, this.keyMap_.remove($key$$)) : !1;
};
goog.Uri.QueryData.prototype.clear = function $goog$Uri$QueryData$$clear$() {
  this.invalidateCache_();
  this.keyMap_ = null;
  this.count_ = 0;
};
goog.Uri.QueryData.prototype.isEmpty = function $goog$Uri$QueryData$$isEmpty$() {
  this.ensureKeyMapInitialized_();
  return 0 == this.count_;
};
goog.Uri.QueryData.prototype.containsKey = function $goog$Uri$QueryData$$containsKey$($key$$) {
  this.ensureKeyMapInitialized_();
  $key$$ = this.getKeyName_($key$$);
  return this.keyMap_.containsKey($key$$);
};
goog.Uri.QueryData.prototype.containsValue = function $goog$Uri$QueryData$$containsValue$($value$$) {
  var $vals$$ = this.getValues();
  return module$contents$goog$array_contains($vals$$, $value$$);
};
goog.Uri.QueryData.prototype.forEach = function $goog$Uri$QueryData$$forEach$($f$$, $opt_scope$$) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function($values$$, $key$$) {
    $values$$.forEach(function($value$$) {
      $f$$.call($opt_scope$$, $value$$, $key$$, this);
    }, this);
  }, this);
};
goog.Uri.QueryData.prototype.getKeys = function $goog$Uri$QueryData$$getKeys$() {
  this.ensureKeyMapInitialized_();
  for (var $vals$$ = this.keyMap_.getValues(), $keys$$ = this.keyMap_.getKeys(), $rv$$ = [], $i$$ = 0; $i$$ < $keys$$.length; $i$$++) {
    for (var $val$$ = $vals$$[$i$$], $j$$ = 0; $j$$ < $val$$.length; $j$$++) {
      $rv$$.push($keys$$[$i$$]);
    }
  }
  return $rv$$;
};
goog.Uri.QueryData.prototype.getValues = function $goog$Uri$QueryData$$getValues$($opt_key$jscomp$2_values$$) {
  this.ensureKeyMapInitialized_();
  var $rv$$ = [];
  if ("string" === typeof $opt_key$jscomp$2_values$$) {
    this.containsKey($opt_key$jscomp$2_values$$) && ($rv$$ = $rv$$.concat(this.keyMap_.get(this.getKeyName_($opt_key$jscomp$2_values$$))));
  } else {
    $opt_key$jscomp$2_values$$ = this.keyMap_.getValues();
    for (var $i$$ = 0; $i$$ < $opt_key$jscomp$2_values$$.length; $i$$++) {
      $rv$$ = $rv$$.concat($opt_key$jscomp$2_values$$[$i$$]);
    }
  }
  return $rv$$;
};
goog.Uri.QueryData.prototype.set = function $goog$Uri$QueryData$$set$($key$$, $value$$) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  $key$$ = this.getKeyName_($key$$);
  this.containsKey($key$$) && (this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get($key$$).length);
  this.keyMap_.set($key$$, [$value$$]);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.get = function $goog$Uri$QueryData$$get$($key$jscomp$136_values$$, $opt_default$$) {
  if (!$key$jscomp$136_values$$) {
    return $opt_default$$;
  }
  $key$jscomp$136_values$$ = this.getValues($key$jscomp$136_values$$);
  return 0 < $key$jscomp$136_values$$.length ? String($key$jscomp$136_values$$[0]) : $opt_default$$;
};
goog.Uri.QueryData.prototype.setValues = function $goog$Uri$QueryData$$setValues$($key$$, $values$$) {
  this.remove($key$$);
  0 < $values$$.length && (this.invalidateCache_(), this.keyMap_.set(this.getKeyName_($key$$), module$contents$goog$array_clone($values$$)), this.count_ = goog.asserts.assertNumber(this.count_) + $values$$.length);
};
goog.Uri.QueryData.prototype.toString = function $goog$Uri$QueryData$$toString$() {
  if (this.encodedQuery_) {
    return this.encodedQuery_;
  }
  if (!this.keyMap_) {
    return "";
  }
  for (var $sb$$ = [], $keys$$ = this.keyMap_.getKeys(), $i$$ = 0; $i$$ < $keys$$.length; $i$$++) {
    var $key$jscomp$138_val$$ = $keys$$[$i$$], $encodedKey$$ = goog.string.urlEncode($key$jscomp$138_val$$);
    $key$jscomp$138_val$$ = this.getValues($key$jscomp$138_val$$);
    for (var $j$$ = 0; $j$$ < $key$jscomp$138_val$$.length; $j$$++) {
      var $param$$ = $encodedKey$$;
      "" !== $key$jscomp$138_val$$[$j$$] && ($param$$ += "=" + goog.string.urlEncode($key$jscomp$138_val$$[$j$$]));
      $sb$$.push($param$$);
    }
  }
  return this.encodedQuery_ = $sb$$.join("&");
};
goog.Uri.QueryData.prototype.toDecodedString = function $goog$Uri$QueryData$$toDecodedString$() {
  return goog.Uri.decodeOrEmpty_(this.toString());
};
goog.Uri.QueryData.prototype.invalidateCache_ = function $goog$Uri$QueryData$$invalidateCache_$() {
  this.encodedQuery_ = null;
};
goog.Uri.QueryData.prototype.filterKeys = function $goog$Uri$QueryData$$filterKeys$($keys$$) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function($value$$, $key$$) {
    module$contents$goog$array_contains($keys$$, $key$$) || this.remove($key$$);
  }, this);
  return this;
};
goog.Uri.QueryData.prototype.clone = function $goog$Uri$QueryData$$clone$() {
  var $rv$$ = new goog.Uri.QueryData;
  $rv$$.encodedQuery_ = this.encodedQuery_;
  this.keyMap_ && ($rv$$.keyMap_ = this.keyMap_.clone(), $rv$$.count_ = this.count_);
  return $rv$$;
};
goog.Uri.QueryData.prototype.getKeyName_ = function $goog$Uri$QueryData$$getKeyName_$($arg$$) {
  $arg$$ = String($arg$$);
  this.ignoreCase_ && ($arg$$ = $arg$$.toLowerCase());
  return $arg$$;
};
goog.Uri.QueryData.prototype.setIgnoreCase = function $goog$Uri$QueryData$$setIgnoreCase$($ignoreCase$$) {
  $ignoreCase$$ && !this.ignoreCase_ && (this.ensureKeyMapInitialized_(), this.invalidateCache_(), this.keyMap_.forEach(function($value$$, $key$$) {
    var $lowerCase$$ = $key$$.toLowerCase();
    $key$$ != $lowerCase$$ && (this.remove($key$$), this.setValues($lowerCase$$, $value$$));
  }, this));
  this.ignoreCase_ = $ignoreCase$$;
};
goog.Uri.QueryData.prototype.extend = function $goog$Uri$QueryData$$extend$($var_args$$) {
  for (var $i$$ = 0; $i$$ < arguments.length; $i$$++) {
    goog.structs.forEach(arguments[$i$$], function($value$$, $key$$) {
      this.add($key$$, $value$$);
    }, this);
  }
};
var module$exports$goog$net$rpc$HttpCors = {HTTP_HEADERS_PARAM_NAME:"$httpHeaders", HTTP_METHOD_PARAM_NAME:"$httpMethod", generateHttpHeadersOverwriteParam:function($headers$$) {
  var $result$$ = "";
  module$contents$goog$object_forEach($headers$$, function($value$$, $key$$) {
    $result$$ += $key$$;
    $result$$ += ":";
    $result$$ += $value$$;
    $result$$ += "\r\n";
  });
  return $result$$;
}, generateEncodedHttpHeadersOverwriteParam:function($headers$$) {
  return goog.string.urlEncode(module$exports$goog$net$rpc$HttpCors.generateHttpHeadersOverwriteParam($headers$$));
}, setHttpHeadersWithOverwriteParam:function($url$$, $urlParam$$, $extraHeaders_httpHeaders$$) {
  if (module$contents$goog$object_isEmpty($extraHeaders_httpHeaders$$)) {
    return $url$$;
  }
  $extraHeaders_httpHeaders$$ = module$exports$goog$net$rpc$HttpCors.generateHttpHeadersOverwriteParam($extraHeaders_httpHeaders$$);
  if ("string" === typeof $url$$) {
    return goog.uri.utils.appendParam($url$$, goog.string.urlEncode($urlParam$$), $extraHeaders_httpHeaders$$);
  }
  $url$$.setParameterValue($urlParam$$, $extraHeaders_httpHeaders$$);
  return $url$$;
}};
var module$contents$grpc$web$UnaryResponse_UnaryResponse = function $module$contents$grpc$web$UnaryResponse_UnaryResponse$() {
};
module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype.getResponseMessage = function $module$contents$grpc$web$UnaryResponse_UnaryResponse$$getResponseMessage$() {
};
module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype.getMetadata = function $module$contents$grpc$web$UnaryResponse_UnaryResponse$$getMetadata$() {
};
module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype.getMethodDescriptor = function $module$contents$grpc$web$UnaryResponse_UnaryResponse$$getMethodDescriptor$() {
};
module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype.getStatus = function $module$contents$grpc$web$UnaryResponse_UnaryResponse$$getStatus$() {
};
goog.exportProperty(module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype, "getStatus", module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype.getStatus);
goog.exportProperty(module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype, "getMethodDescriptor", module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype.getMethodDescriptor);
goog.exportProperty(module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype, "getMetadata", module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype.getMetadata);
goog.exportProperty(module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype, "getResponseMessage", module$contents$grpc$web$UnaryResponse_UnaryResponse.prototype.getResponseMessage);
grpc.web.UnaryResponse = module$contents$grpc$web$UnaryResponse_UnaryResponse;
grpc.web.Interceptor = {};
var module$contents$grpc$web$Interceptor_UnaryInterceptor = function $module$contents$grpc$web$Interceptor_UnaryInterceptor$() {
};
module$contents$grpc$web$Interceptor_UnaryInterceptor.prototype.intercept = function $module$contents$grpc$web$Interceptor_UnaryInterceptor$$intercept$($request$$, $invoker$$) {
};
goog.exportProperty(module$contents$grpc$web$Interceptor_UnaryInterceptor.prototype, "intercept", module$contents$grpc$web$Interceptor_UnaryInterceptor.prototype.intercept);
var module$contents$grpc$web$Interceptor_StreamInterceptor = function $module$contents$grpc$web$Interceptor_StreamInterceptor$() {
};
module$contents$grpc$web$Interceptor_StreamInterceptor.prototype.intercept = function $module$contents$grpc$web$Interceptor_StreamInterceptor$$intercept$($request$$, $invoker$$) {
};
goog.exportProperty(module$contents$grpc$web$Interceptor_StreamInterceptor.prototype, "intercept", module$contents$grpc$web$Interceptor_StreamInterceptor.prototype.intercept);
grpc.web.Interceptor.UnaryInterceptor = module$contents$grpc$web$Interceptor_UnaryInterceptor;
grpc.web.Interceptor.StreamInterceptor = module$contents$grpc$web$Interceptor_StreamInterceptor;
goog.collections.maps = {};
var module$contents$goog$collections$maps_MapLike = function $module$contents$goog$collections$maps_MapLike$() {
};
module$contents$goog$collections$maps_MapLike.prototype.set = function $module$contents$goog$collections$maps_MapLike$$set$($key$$, $val$$) {
};
module$contents$goog$collections$maps_MapLike.prototype.get = function $module$contents$goog$collections$maps_MapLike$$get$($key$$) {
};
module$contents$goog$collections$maps_MapLike.prototype.keys = function $module$contents$goog$collections$maps_MapLike$$keys$() {
};
module$contents$goog$collections$maps_MapLike.prototype.values = function $module$contents$goog$collections$maps_MapLike$$values$() {
};
module$contents$goog$collections$maps_MapLike.prototype.has = function $module$contents$goog$collections$maps_MapLike$$has$($key$$) {
};
goog.collections.maps.MapLike = module$contents$goog$collections$maps_MapLike;
function module$contents$goog$collections$maps_setAll($map$$, $$jscomp$iter$1_entries$$) {
  if ($$jscomp$iter$1_entries$$) {
    $$jscomp$iter$1_entries$$ = $jscomp.makeIterator($$jscomp$iter$1_entries$$);
    for (var $$jscomp$key$$jscomp$destructuring$var0_k$$ = $$jscomp$iter$1_entries$$.next(); !$$jscomp$key$$jscomp$destructuring$var0_k$$.done; $$jscomp$key$$jscomp$destructuring$var0_k$$ = $$jscomp$iter$1_entries$$.next()) {
      var $$jscomp$destructuring$var1_v$$ = $jscomp.makeIterator($$jscomp$key$$jscomp$destructuring$var0_k$$.value);
      $$jscomp$key$$jscomp$destructuring$var0_k$$ = $$jscomp$destructuring$var1_v$$.next().value;
      $$jscomp$destructuring$var1_v$$ = $$jscomp$destructuring$var1_v$$.next().value;
      $map$$.set($$jscomp$key$$jscomp$destructuring$var0_k$$, $$jscomp$destructuring$var1_v$$);
    }
  }
}
goog.collections.maps.setAll = module$contents$goog$collections$maps_setAll;
function module$contents$goog$collections$maps_hasValue($$jscomp$iter$2_map$$, $val$$, $valueEqualityFn$$) {
  $valueEqualityFn$$ = void 0 === $valueEqualityFn$$ ? module$contents$goog$collections$maps_defaultEqualityFn : $valueEqualityFn$$;
  $$jscomp$iter$2_map$$ = $jscomp.makeIterator($$jscomp$iter$2_map$$.values());
  for (var $$jscomp$key$v$$ = $$jscomp$iter$2_map$$.next(); !$$jscomp$key$v$$.done; $$jscomp$key$v$$ = $$jscomp$iter$2_map$$.next()) {
    if ($valueEqualityFn$$($$jscomp$key$v$$.value, $val$$)) {
      return !0;
    }
  }
  return !1;
}
goog.collections.maps.hasValue = module$contents$goog$collections$maps_hasValue;
var module$contents$goog$collections$maps_defaultEqualityFn = function $module$contents$goog$collections$maps_defaultEqualityFn$($a$$, $b$$) {
  return $a$$ === $b$$;
};
function module$contents$goog$collections$maps_equals($map$$, $otherMap$$, $valueEqualityFn$$) {
  $valueEqualityFn$$ = void 0 === $valueEqualityFn$$ ? module$contents$goog$collections$maps_defaultEqualityFn : $valueEqualityFn$$;
  if ($map$$ === $otherMap$$) {
    return !0;
  }
  if ($map$$.size !== $otherMap$$.size) {
    return !1;
  }
  for (var $$jscomp$iter$3$$ = $jscomp.makeIterator($map$$.keys()), $$jscomp$key$key_key$$ = $$jscomp$iter$3$$.next(); !$$jscomp$key$key_key$$.done; $$jscomp$key$key_key$$ = $$jscomp$iter$3$$.next()) {
    if ($$jscomp$key$key_key$$ = $$jscomp$key$key_key$$.value, !$otherMap$$.has($$jscomp$key$key_key$$) || !$valueEqualityFn$$($map$$.get($$jscomp$key$key_key$$), $otherMap$$.get($$jscomp$key$key_key$$))) {
      return !1;
    }
  }
  return !0;
}
goog.collections.maps.equals = module$contents$goog$collections$maps_equals;
function module$contents$goog$collections$maps_transpose($map$$) {
  for (var $transposed$$ = new Map, $$jscomp$iter$4$$ = $jscomp.makeIterator($map$$.keys()), $$jscomp$key$key$jscomp$1_key$$ = $$jscomp$iter$4$$.next(); !$$jscomp$key$key$jscomp$1_key$$.done; $$jscomp$key$key$jscomp$1_key$$ = $$jscomp$iter$4$$.next()) {
    $$jscomp$key$key$jscomp$1_key$$ = $$jscomp$key$key$jscomp$1_key$$.value;
    var $val$$ = $map$$.get($$jscomp$key$key$jscomp$1_key$$);
    $transposed$$.set($val$$, $$jscomp$key$key$jscomp$1_key$$);
  }
  return $transposed$$;
}
goog.collections.maps.transpose = module$contents$goog$collections$maps_transpose;
function module$contents$goog$collections$maps_toObject($map$$) {
  for (var $obj$$ = {}, $$jscomp$iter$5$$ = $jscomp.makeIterator($map$$.keys()), $$jscomp$key$key$jscomp$2_key$$ = $$jscomp$iter$5$$.next(); !$$jscomp$key$key$jscomp$2_key$$.done; $$jscomp$key$key$jscomp$2_key$$ = $$jscomp$iter$5$$.next()) {
    $$jscomp$key$key$jscomp$2_key$$ = $$jscomp$key$key$jscomp$2_key$$.value, $obj$$[$$jscomp$key$key$jscomp$2_key$$] = $map$$.get($$jscomp$key$key$jscomp$2_key$$);
  }
  return $obj$$;
}
goog.collections.maps.toObject = module$contents$goog$collections$maps_toObject;
var module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$($options$$, $xhrIo$$) {
  $options$$ = void 0 === $options$$ ? {} : $options$$;
  this.format_ = $options$$.format || goog.getObjectByName("format", $options$$) || "text";
  this.suppressCorsPreflight_ = $options$$.suppressCorsPreflight || goog.getObjectByName("suppressCorsPreflight", $options$$) || !1;
  this.withCredentials_ = $options$$.withCredentials || goog.getObjectByName("withCredentials", $options$$) || !1;
  this.streamInterceptors_ = $options$$.streamInterceptors || goog.getObjectByName("streamInterceptors", $options$$) || [];
  this.unaryInterceptors_ = $options$$.unaryInterceptors || goog.getObjectByName("unaryInterceptors", $options$$) || [];
  this.xhrIo_ = $xhrIo$$ || null;
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.rpcCall = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$$rpcCall$($method$jscomp$9_stream$$, $requestMessage$$, $metadata$$, $methodDescriptor$$, $callback$$) {
  var $$jscomp$this$$ = this, $hostname$$ = module$contents$grpc$web$AbstractClientBase_AbstractClientBase.getHostname($method$jscomp$9_stream$$, $methodDescriptor$$);
  $method$jscomp$9_stream$$ = module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.runInterceptors_(function($request$$) {
    return $$jscomp$this$$.startStream_($request$$, $hostname$$);
  }, this.streamInterceptors_).call(this, $methodDescriptor$$.createRequest($requestMessage$$, $metadata$$));
  module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.setCallback_($method$jscomp$9_stream$$, $callback$$, !1);
  return new module$contents$grpc$web$ClientUnaryCallImpl_ClientUnaryCallImpl($method$jscomp$9_stream$$);
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.thenableCall = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$$thenableCall$($method$$, $requestMessage$$, $metadata$jscomp$0$$, $methodDescriptor$$) {
  var $$jscomp$this$$ = this, $hostname$$ = module$contents$grpc$web$AbstractClientBase_AbstractClientBase.getHostname($method$$, $methodDescriptor$$);
  return module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.runInterceptors_(function($request$$) {
    return new Promise(function($resolve$$, $reject$$) {
      var $stream$$ = $$jscomp$this$$.startStream_($request$$, $hostname$$), $unaryMetadata$$, $unaryStatus$$, $unaryMsg$$;
      module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.setCallback_($stream$$, function($error$$, $response$$, $status$$, $metadata$$, $unaryResponseReceived$$) {
        $error$$ ? $reject$$($error$$) : $unaryResponseReceived$$ ? $unaryMsg$$ = $response$$ : $status$$ ? $unaryStatus$$ = $status$$ : $metadata$$ ? $unaryMetadata$$ = $metadata$$ : $resolve$$($request$$.getMethodDescriptor().createUnaryResponse($unaryMsg$$, $unaryMetadata$$, $unaryStatus$$));
      }, !0);
    });
  }, this.unaryInterceptors_).call(this, $methodDescriptor$$.createRequest($requestMessage$$, $metadata$jscomp$0$$)).then(function($response$$) {
    return $response$$.getResponseMessage();
  });
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.unaryCall = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$$unaryCall$($method$$, $requestMessage$$, $metadata$$, $methodDescriptor$$) {
  return this.thenableCall($method$$, $requestMessage$$, $metadata$$, $methodDescriptor$$);
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.serverStreaming = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$$serverStreaming$($method$$, $requestMessage$$, $metadata$$, $methodDescriptor$$) {
  var $$jscomp$this$$ = this, $hostname$$ = module$contents$grpc$web$AbstractClientBase_AbstractClientBase.getHostname($method$$, $methodDescriptor$$);
  return module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.runInterceptors_(function($request$$) {
    return $$jscomp$this$$.startStream_($request$$, $hostname$$);
  }, this.streamInterceptors_).call(this, $methodDescriptor$$.createRequest($requestMessage$$, $metadata$$));
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.startStream_ = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$$startStream_$($payload_request$$, $hostname$jscomp$3_path$$) {
  var $methodDescriptor$$ = $payload_request$$.getMethodDescriptor();
  $hostname$jscomp$3_path$$ += $methodDescriptor$$.getName();
  var $xhr$$ = this.xhrIo_ ? this.xhrIo_ : new goog.net.XhrIo;
  $xhr$$.setWithCredentials(this.withCredentials_);
  var $stream$$ = new module$contents$grpc$web$GrpcWebClientReadableStream_GrpcWebClientReadableStream({xhr:$xhr$$});
  $stream$$.setResponseDeserializeFn($methodDescriptor$$.getResponseDeserializeFn());
  var $metadata$$ = $payload_request$$.getMetadata();
  for ($headerObject_key$$ in $metadata$$) {
    $xhr$$.headers.set($headerObject_key$$, $metadata$$[$headerObject_key$$]);
  }
  this.processHeaders_($xhr$$);
  if (this.suppressCorsPreflight_) {
    var $headerObject_key$$ = module$contents$goog$collections$maps_toObject($xhr$$.headers);
    $xhr$$.headers.clear();
    $hostname$jscomp$3_path$$ = module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.setCorsOverride_($hostname$jscomp$3_path$$, $headerObject_key$$);
  }
  $payload_request$$ = $methodDescriptor$$.getRequestSerializeFn()($payload_request$$.getRequestMessage());
  $payload_request$$ = this.encodeRequest_($payload_request$$);
  "text" == this.format_ ? $payload_request$$ = goog.crypt.base64.encodeByteArray($payload_request$$) : "binary" == this.format_ && $xhr$$.setResponseType(goog.net.XhrIo.ResponseType.ARRAY_BUFFER);
  $xhr$$.send($hostname$jscomp$3_path$$, "POST", $payload_request$$);
  return $stream$$;
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.setCallback_ = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$setCallback_$($stream$$, $callback$$, $useUnaryResponse$$) {
  var $isResponseReceived$$ = !1, $responseReceived$$ = null, $errorEmitted$$ = !1;
  $stream$$.on("data", function($response$$) {
    $isResponseReceived$$ = !0;
    $responseReceived$$ = $response$$;
  });
  $stream$$.on("error", function($error$$) {
    $error$$.code == module$exports$grpc$web$StatusCode.OK || $errorEmitted$$ || ($errorEmitted$$ = !0, $callback$$($error$$, null));
  });
  $stream$$.on("status", function($status$$) {
    $status$$.code == module$exports$grpc$web$StatusCode.OK || $errorEmitted$$ ? $useUnaryResponse$$ && $callback$$(null, null, $status$$) : ($errorEmitted$$ = !0, $callback$$({code:$status$$.code, message:$status$$.details, metadata:$status$$.metadata}, null));
  });
  if ($useUnaryResponse$$) {
    $stream$$.on("metadata", function($metadata$$) {
      $callback$$(null, null, null, $metadata$$);
    });
  }
  $stream$$.on("end", function() {
    $errorEmitted$$ || ($isResponseReceived$$ ? $useUnaryResponse$$ ? $callback$$(null, $responseReceived$$, null, null, !0) : $callback$$(null, $responseReceived$$) : $callback$$({code:module$exports$grpc$web$StatusCode.UNKNOWN, message:"Incomplete response"}));
    $useUnaryResponse$$ && $callback$$(null, null);
  });
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.encodeRequest_ = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$$encodeRequest_$($serialized$$) {
  for (var $len$$ = $serialized$$.length, $bytesArray$$ = [0, 0, 0, 0], $payload$$ = new Uint8Array(5 + $len$$), $i$$ = 3; 0 <= $i$$; $i$$--) {
    $bytesArray$$[$i$$] = $len$$ % 256, $len$$ >>>= 8;
  }
  $payload$$.set(new Uint8Array($bytesArray$$), 1);
  $payload$$.set($serialized$$, 5);
  return $payload$$;
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.processHeaders_ = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$$processHeaders_$($xhr$$) {
  "text" == this.format_ ? ($xhr$$.headers.set("Content-Type", "application/grpc-web-text"), $xhr$$.headers.set("Accept", "application/grpc-web-text")) : $xhr$$.headers.set("Content-Type", "application/grpc-web+proto");
  $xhr$$.headers.set("X-User-Agent", "grpc-web-javascript/0.1");
  $xhr$$.headers.set("X-Grpc-Web", "1");
  if ($xhr$$.headers.has("deadline")) {
    var $deadline_timeout$$ = Number($xhr$$.headers.get("deadline")), $currentTime$$ = (new Date).getTime();
    $deadline_timeout$$ = Math.ceil($deadline_timeout$$ - $currentTime$$);
    $xhr$$.headers.delete("deadline");
    Infinity === $deadline_timeout$$ && ($deadline_timeout$$ = 0);
    0 < $deadline_timeout$$ && ($xhr$$.headers.set("grpc-timeout", $deadline_timeout$$ + "m"), $xhr$$.setTimeoutInterval(Math.max(1000, Math.ceil(1.1 * $deadline_timeout$$))));
  }
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.setCorsOverride_ = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$setCorsOverride_$($method$$, $headerObject$$) {
  return (0,module$exports$goog$net$rpc$HttpCors.setHttpHeadersWithOverwriteParam)($method$$, module$exports$goog$net$rpc$HttpCors.HTTP_HEADERS_PARAM_NAME, $headerObject$$);
};
module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.runInterceptors_ = function $module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase$runInterceptors_$($invoker$$, $interceptors$$) {
  var $curInvoker$$ = $invoker$$;
  $interceptors$$.forEach(function($interceptor$$) {
    var $lastInvoker$$ = $curInvoker$$;
    $curInvoker$$ = function $$curInvoker$$$($request$$) {
      return $interceptor$$.intercept($request$$, $lastInvoker$$);
    };
  });
  return $curInvoker$$;
};
goog.exportProperty(module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype, "serverStreaming", module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.serverStreaming);
goog.exportProperty(module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype, "unaryCall", module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.unaryCall);
goog.exportProperty(module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype, "thenableCall", module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.thenableCall);
goog.exportProperty(module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype, "rpcCall", module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase.prototype.rpcCall);
grpc.web.GrpcWebClientBase = module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase;
var module$contents$grpc$web$MethodType_MethodType = {UNARY:"unary", SERVER_STREAMING:"server_streaming", BIDI_STREAMING:"bidi_streaming"};
grpc.web.MethodType = module$contents$grpc$web$MethodType_MethodType;
var module$exports$grpc$web$Exports = {};
module.exports.CallOptions = module$contents$grpc$web$CallOptions_CallOptions;
module.exports.MethodDescriptor = module$contents$grpc$web$MethodDescriptor_MethodDescriptor;
module.exports.GrpcWebClientBase = module$contents$grpc$web$GrpcWebClientBase_GrpcWebClientBase;
module.exports.RpcError = module$exports$grpc$web$RpcError;
module.exports.StatusCode = module$exports$grpc$web$StatusCode;
module.exports.MethodType = module$contents$grpc$web$MethodType_MethodType;
goog.Timer.defaultTimerObject = "undefined" !== typeof globalThis && globalThis || self;

