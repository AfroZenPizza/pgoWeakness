import PokeAPI from "pokeapi-typescript";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import iconStyle from "../icons/icons.module.css";
import DamageRelation from "./DamageRelation";

function resolveOpposingTypes(typeList1, typeList2) {
  let sharedTypes = typeList1.filter((type) => {
    return typeList2.includes(type);
  });
  typeList1 = typeList1.filter((type) => {
    return !sharedTypes.includes(type);
  });
  typeList2 = typeList2.filter((type) => {
    return !sharedTypes.includes(type);
  });
  return [typeList1, typeList2];
}

function removeDuplicateTypesFrom(typeList) {
  return [...new Set(typeList)];
}

export default function PokeTypeList({ PokeType }) {
  const [doubleDamageTo, setDoubleDamageTo] = useState([]);
  const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
  const [halfDamageTo, setHalfDamageTo] = useState([]);
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
  const [noDamageTo, setNoDamageTo] = useState([]);
  const [noDamageFrom, setNoDamageFrom] = useState([]);

  function uniqueTypes(prev, arrIn) {
    return [...new Set([...prev, ...arrIn])];
  }

  function getTypeNames(iType) {
    return iType.map((x) => x.name);
  }

  function getIcons(fromArr) {
    return fromArr.map((x) => {
      return (
        <div className={`${iconStyle[x]} ${iconStyle.icon}`}>
          <img src={require("../icons/" + x + ".svg")} title={x} alt="" />
        </div>
      );
    });
  }

  useEffect(() => {
    if (PokeType === "") return;
    let doubleDamageTo = [];
    let doubleDamageFrom = [];
    let halfDamageTo = [];
    let halfDamageFrom = [];
    PokeType.forEach(async (uniqueType) => {
      await PokeAPI.Type.fetch(uniqueType).then((result) => {
        const { damage_relations } = result;
        doubleDamageFrom = doubleDamageFrom.concat(
          getTypeNames(damage_relations.double_damage_from)
        );
        doubleDamageTo = doubleDamageTo.concat(
          getTypeNames(damage_relations.double_damage_to)
        );
        halfDamageFrom = halfDamageFrom.concat(
          getTypeNames(damage_relations.half_damage_from)
        );
        halfDamageTo = halfDamageTo.concat(
          getTypeNames(damage_relations.half_damage_to)
        );
      });
      [doubleDamageFrom, halfDamageFrom] = resolveOpposingTypes(
        doubleDamageFrom,
        halfDamageFrom
      );
      [doubleDamageTo, halfDamageTo] = resolveOpposingTypes(
        doubleDamageTo,
        halfDamageTo
      );
      doubleDamageFrom = removeDuplicateTypesFrom(doubleDamageFrom);
      doubleDamageTo = removeDuplicateTypesFrom(doubleDamageTo);
      halfDamageFrom = removeDuplicateTypesFrom(halfDamageFrom);
      halfDamageTo = removeDuplicateTypesFrom(halfDamageTo);
      setDoubleDamageFrom(doubleDamageFrom);
      setDoubleDamageTo(doubleDamageTo);
      setHalfDamageFrom(halfDamageFrom);
      setHalfDamageTo(halfDamageTo);
    });
  }, [PokeType]);

  return (
    <div>
      <DamageRelation
        title="2x Damage From"
        icons={getIcons(doubleDamageFrom)}
      />
      <DamageRelation
        title="1/2 Damage From"
        icons={getIcons(halfDamageFrom)}
      />
      {/* <DamageRelation title="Invincible to" icons={getIcons(noDamageFrom)} /> */}
      <DamageRelation title="2X Damage To" icons={getIcons(doubleDamageTo)} />
      <DamageRelation title="1/2 Damage to" icons={getIcons(halfDamageTo)} />
      {/* <DamageRelation title="Doesn't Damage" icons={getIcons(noDamageTo)} /> */}
    </div>
  );
}
