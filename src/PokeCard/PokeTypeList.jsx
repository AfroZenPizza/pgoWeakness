import PokeAPI from "pokeapi-typescript";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import iconStyle from "../icons/icons.module.css";
import DamageRelation from "./DamageRelation";

export default function PokeTypeList({ PokeType }) {
  const [doubleDamageTo, setDoubleDamageTo] = useState([]);
  const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
  const [halfDamageTo, setHalfDamageTo] = useState([]);
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
  const [noDamageTo, setNoDamageTo] = useState([]);
  const [noDamageFrom, setNoDamageFrom] = useState([]);

  function getIcons(fromArr) {
    return fromArr.map((x) => {
      return (
        <div className={`${iconStyle[x]} ${iconStyle.icon}`}>
          <img src={require("../icons/" + x + ".svg")} title={x} alt="" />
        </div>
      );
    });
  }

  function uniqueTypes(prev, arrIn) {
    return [...new Set([...prev, ...arrIn])];
  }
  function mapITypeToName(iType) {
    return iType.map((x) => x.name);
  }
  useEffect(() => {
    if (PokeType === "") return;
    PokeType.forEach((uniqueType) => {
      PokeAPI.Type.fetch(uniqueType).then((result) => {
        const { damage_relations } = result;
        const newDoubleDamageFrom = [
          ...new Set([
            ...mapITypeToName(damage_relations.double_damage_from),
            ...doubleDamageFrom,
          ]),
        ];
        const newDoubleDamageTo = [
          ...new Set([
            ...mapITypeToName(damage_relations.double_damage_to),
            ...doubleDamageTo,
          ]),
        ];
        const newHalfDamageTo = [
          ...new Set([
            ...mapITypeToName(damage_relations.half_damage_to),
            ...halfDamageTo,
          ]),
        ];
        const newHalfDamageFrom = [
          ...new Set([
            ...mapITypeToName(damage_relations.half_damage_from),
            ...halfDamageFrom,
          ]),
        ];
        const newNoDamageFrom = mapITypeToName(damage_relations.no_damage_from);
        const newNoDamageTo = mapITypeToName(damage_relations.no_damage_to);

        setDoubleDamageFrom(
          newDoubleDamageFrom.filter(
            (item) => !newHalfDamageFrom.includes(item)
          )
        );
        setDoubleDamageTo(
          newDoubleDamageTo.filter((item) => !newHalfDamageTo.includes(item))
        );
        setHalfDamageFrom(
          newHalfDamageFrom.filter(
            (item) => !newDoubleDamageFrom.includes(item)
          )
        );
        setHalfDamageTo(
          newHalfDamageTo.filter((item) => !newDoubleDamageTo.includes(item))
        );
        setNoDamageFrom(newNoDamageFrom);
        setNoDamageTo(newNoDamageTo);
      });
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
      <DamageRelation title="Invincible to" icons={getIcons(noDamageFrom)} />
      <DamageRelation title="2X Damage To" icons={getIcons(doubleDamageTo)} />
      <DamageRelation title="1/2 Damage to" icons={getIcons(halfDamageTo)} />
      <DamageRelation title="Doesn't Damage" icons={getIcons(noDamageTo)} />
    </div>
  );
}
