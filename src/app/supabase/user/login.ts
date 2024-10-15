import type { User } from "@/app/Types/type";
import { supabase } from "@/lib/supabase/supabaseClient";
import { toCamelCaseObject } from "@/utils/captalize";
import type { PostgrestSingleResponse } from "@supabase/supabase-js";

export const Login = async (userId: string) => {
	if (userId) {
		try {
			// Supabase でユーザーが存在するか確認
			const { data, error } = await supabase
				.from("users")
				.select("*")
				.eq("user_id", userId)
				.single();

			// エラーチェック
			if (error) {
				// ユーザーが存在しない場合やクエリに問題がある場合
				if (error.code === "PGRST116" || error.code === "PGRST123") {
					console.log("User not found in Supabase.");
				} else {
					throw new Error(`Error checking user in Supabase: ${error.message}`);
				}
				return null; // ユーザーが存在しない場合は null を返す
			}

			return toCamelCaseObject<PostgrestSingleResponse<User>>(data);
		} catch (err) {
			console.error("Supabase error:", err);
			return null; // エラーが発生した場合は null を返す
		}
	}

	return null; // userId が提供されていない場合も null を返す
};
