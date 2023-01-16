
    declare namespace CS {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ValueType extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Int32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
            protected [__keep_incompatibility]: never;
        }
        interface IComparable
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IConvertible
        {
        }
        interface IEquatable$1<T>
        {
        }
        interface IFormattable
        {
        }
        class String extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.IEquatable$1<string>, System.Collections.Generic.IEnumerable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICloneable
        {
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Array extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.Collections.IList, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine {
        /** Base class for all objects Unity can reference.
        */
        class Object extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Base class for everything attached to GameObjects.
        */
        class Component extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Behaviours are Components that can be enabled or disabled.
        */
        class Behaviour extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
        }
        /** MonoBehaviour is the base class from which every Unity script derives.
        */
        class MonoBehaviour extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
        }
        /** Representation of 3D vectors and points.
        */
        class Vector3 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector3>, System.IFormattable
        {
            protected [__keep_incompatibility]: never;
        }
        /** Representation of 2D vectors and points.
        */
        class Vector2 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2>, System.IFormattable
        {
            protected [__keep_incompatibility]: never;
        }
    }
        class Scripts extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public static IntArgAndReturnInt ($a: number) : number
            public static IntArgAndReturnIntWithOverload ($a: number) : number
            public static IntArgAndReturnIntWithOverload ($a: string) : number
            public static Vector3ArgAndReturnVector3 ($v: UnityEngine.Vector3) : UnityEngine.Vector3
            public static Vector3ArgAndReturnVector3WithOverload ($a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static Vector3ArgAndReturnVector3WithOverload ($a: UnityEngine.Vector2) : UnityEngine.Vector3
            public constructor ()
        }
        namespace System.Collections {
        interface IEnumerable
        {
        }
        interface IList extends System.Collections.IEnumerable, System.Collections.ICollection
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
    }
}
